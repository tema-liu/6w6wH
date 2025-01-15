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
import { ProfileType, SearchResult } from "../../type/type";
import { useEffect, useState } from "react";
import { getUserProfile } from "../../apis/getUserProfile";

function OtherProfile() {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);
  const { id } = useParams(); //從網址取得id
  const [collectList, setCollectList] = useState<SearchResult[] | null>(null);
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const reduxUserId = useSelector((state: RootState) => state.auth.userId);

  useEffect(() => {
    const fetchData = async () => {
      //如果網址有id則通過
      if (id) {
        //如果id和redux的userId相同就跳轉到profile
        if (Number(id) === reduxUserId) {
          navigate("/profile");
        } else {
          const [userProfile, collectList] = await Promise.all([
            getUserProfile(Number(id), token),
            getProfileCollect(Number(id), token),
          ]);
          //如果status是true就設定profile和collectList
          if (userProfile.status && collectList.status) {
            setProfile(userProfile.data ?? null);
            setCollectList(collectList.data ?? null);
          } else {
            //如果status是false跳轉404
            navigate("*");
          }
        }
        return;
      }
      navigate("*");
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header isBefore={true} />
      <ContainerPd16 style={{ display: "flex", flexDirection: "column" }}>
        {profile && <ProfileCard isUserProfile={false} profile={profile} />}
        <ReviewListItem collectList={collectList} />
      </ContainerPd16>
    </Wrapper>
  );
}

export default OtherProfile;
