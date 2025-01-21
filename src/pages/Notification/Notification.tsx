import { Wrapper } from "../../component/Layout/LayoutComponents";
import Header from "../../component/Layout/Header";
import NotifyCard from "./NotifyCard";
import EmptyDisplay from "../../component/EmptyDisplay";
import { EmptyContainer, NotifyContainer } from "./style";
import { useEffect, useState } from "react";
import { getNotifyDetail } from "../../apis/getNotifyDetail";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import type { Notification } from "../../type/type";
import { useNavigate } from "react-router-dom";
import Placeholder from "./Placeholder";
import { getReadNotify } from "../../apis/getReadNotify";

function Notification() {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);
  const [notifyList, setNotifyList] = useState<Notification[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await getNotifyDetail(token ?? "");
      //有通知則載入通知
      setNotifyList(res.data ?? null);
      await getReadNotify(token);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header title="Notification" />
      <NotifyContainer>
        {loading && <Placeholder />}
        {notifyList ? (
          notifyList.map((notify) => {
            return <NotifyCard key={"notify" + notify.id} notify={notify} />;
          })
        ) : (
          <EmptyContainer>
            <EmptyDisplay
              content="There are no notifications yet"
              iconStyle="local_fire_department"
              btnText="View popular threads"
              onClick={() => {
                navigate("/"); // 先導航到首頁
                setTimeout(() => {
                  const element = document.getElementById("threads");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 300); // 給一點時間讓頁面加載
              }}
            />
          </EmptyContainer>
        )}
      </NotifyContainer>
    </Wrapper>
  );
}

export default Notification;
