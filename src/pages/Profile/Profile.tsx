import {
  ContainerPd16,
  Wrapper,
} from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import ProfileCard from "../../component/Profile/ProfileCard";
import ReviewListItem from "../../component/Profile/ReviewListItem";
import { useEffect, useState } from "react";
import { getProfileCollect } from "../../apis/getProfileCollect";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { useNavigate } from "react-router-dom";
import { SearchResult, UserCommentData } from "../../type/type";
import { getUserProfile } from "../../apis/getUserProfile";
import { fetchProfile } from "../../utils/redux/userProfile/slice";
import { getUserComment } from "../../apis/getUserComment";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const id = useSelector((state: RootState) => state.auth.userId);
  const [loading, setLoading] = useState(true);
  const [collectList, setCollectList] = useState<SearchResult[] | null>(null);
  const [userComment, setUserCommit] = useState<UserCommentData | null>(null);
  const profile = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        if (profile.name === "") {
          const userProfile = await getUserProfile(id, token);
          if (userProfile.status) {
            const gender =
              userProfile.data?.gender === 0
                ? "Male"
                : userProfile.data?.gender === 1
                ? "Female"
                : "Other";
            dispatch(
              fetchProfile({
                name: userProfile.data?.name,
                userPhoto: userProfile.data?.userPhoto,
                comeFrom: userProfile.data?.comeFrom,
                nowLiveIn: userProfile.data?.nowLiveIn,
                bio: userProfile.data?.bio,
                country: userProfile.data?.country,
                gender: gender,
                birthDay: userProfile.data?.birthDay,
                badge: userProfile.data?.badge,
                isFollowed: userProfile.data?.isFollowed,
              })
            );
          }
        }
        const [collectRes, userCommentRes] = await Promise.all([
          getProfileCollect(id, token),
          getUserComment(id, token),
        ]);
        userCommentRes.status && setUserCommit(userCommentRes.data ?? null);
        collectRes.status && setCollectList(collectRes.data ?? null);
        setLoading(false);
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
        {profile && <ProfileCard isUserProfile={true} profile={profile} />}
        <ReviewListItem
          loading={loading}
          userId={Number(id)}
          collectList={collectList}
          userComment={userComment}
        />
      </ContainerPd16>
    </Wrapper>
  );
}

export default Profile;
