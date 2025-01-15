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
import { ProfileType, SearchResult } from "../../type/type";
import { getUserProfile } from "../../apis/getUserProfile";

function Profile() {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);
  const id = useSelector((state: RootState) => state.auth.userId);
  const [collectList, setCollectList] = useState<SearchResult[] | null>(null);
  const [profile, setProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const [userProfile, collectList] = await Promise.all([
          getUserProfile(id, token),
          getProfileCollect(id, token),
        ]);
        if (userProfile.status && collectList.status) {
          setProfile(userProfile.data ?? null);
          setCollectList(collectList.data ?? null);
        }
        return;
      }

      navigate("/");
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header isBefore={false} menu={true} />
      <ContainerPd16 style={{ display: "flex", flexDirection: "column" }}>
        {profile && <ProfileCard isUserProfile={true} profile={profile} />}{" "}
        <ReviewListItem collectList={collectList} />
      </ContainerPd16>
    </Wrapper>
  );
}

export default Profile;
