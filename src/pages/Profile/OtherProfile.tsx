import {
  ContainerPd16,
  Wrapper,
} from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import ProfileCard from "../../component/Profile/ProfileCard";
import ReviewListItem from "../../component/Profile/ReviewListItem";
import { getProfileCollect } from "../../apis/getProfileCollect";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { SearchResult } from "../../type/type";
import { useEffect, useState } from "react";

function OtherProfile() {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);
  const { id } = useParams(); //從網址取得id
  const [collectList, setCollectList] = useState<SearchResult[] | null>(null);
  console.log(collectList);
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const collectList = await getProfileCollect(Number(id), token);
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
      <Header isBefore={true} />
      <ContainerPd16 style={{ display: "flex", flexDirection: "column" }}>
        <ProfileCard isUserProfile={false} />
        <ReviewListItem collectList={collectList} />
      </ContainerPd16>
    </Wrapper>
  );
}

export default OtherProfile;
