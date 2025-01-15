import {
  ContainerPd16,
  Wrapper,
} from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import ProfileCard from "../../component/Profile/ProfileCard";
import ReviewListItem from "../../component/Profile/ReviewListItem";
import { useEffect, useState } from "react";
import { getProfileCollect } from "../../apis/getProfileCollect";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { useNavigate } from "react-router-dom";
import { SearchResult } from "../../type/type";

function Profile() {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);
  const id = useSelector((state: RootState) => state.auth.userId);
  const [collectList, setCollectList] = useState<SearchResult[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const collectList = await getProfileCollect(id, token);
        if (collectList.status) {
          setCollectList(collectList.data ?? null);
          return;
        }
      }

      navigate("/");
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header isBefore={false} menu={true} />
      <ContainerPd16 style={{ display: "flex", flexDirection: "column" }}>
        <ProfileCard isUserProfile={true} />
        <ReviewListItem collectList={collectList} />
      </ContainerPd16>
    </Wrapper>
  );
}

export default Profile;
