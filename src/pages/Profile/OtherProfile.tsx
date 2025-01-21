import {
  ContainerPd16,
  Wrapper,
} from "../../component/Layout/LayoutComponents";
import Header from "../../component/Layout/Header";
import ProfileCard from "../../component/Profile/ProfileCard";
import ReviewListItem from "../../component/Profile/ReviewListItem";
import { getProfileCollect } from "../../apis/getProfileCollect";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileType, SearchResult, UserCommentData } from "../../type/type";
import { useEffect, useState } from "react";
import { getUserProfile } from "../../apis/getUserProfile";
import { getUserComment } from "../../apis/getUserComment";

function OtherProfile() {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);
  const { id } = useParams(); //從網址取得id
  const numberId = Number(id);
  const [collectList, setCollectList] = useState<SearchResult[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [userComment, setUserCommit] = useState<UserCommentData | null>(null);
  const reduxUserId = useSelector((state: RootState) => state.auth.userId);

  useEffect(() => {
    const fetchData = async () => {
      //如果網址有id則通過
      if (id) {
        //如果id和redux的userId相同就跳轉到profile
        if (numberId === reduxUserId) {
          navigate("/profile");
        } else {
          const [userProfile, collectList, userCommentRes] = await Promise.all([
            getUserProfile(numberId, token),
            getProfileCollect(numberId, token),
            getUserComment(numberId, token),
          ]);
          //如果status是true就設定profile和collectList
          if (
            userProfile.status &&
            collectList.status &&
            userCommentRes.status
          ) {
            setProfile(userProfile.data ?? null);
            setCollectList(collectList.data ?? null);
            setUserCommit(userCommentRes.data ?? null);
            setLoading(false);
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
        {profile && (
          <ProfileCard
            userId={numberId}
            isUserProfile={false}
            profile={profile}
          />
        )}
        <ReviewListItem
          loading={loading}
          userId={numberId}
          collectList={collectList}
          userComment={userComment}
        />
      </ContainerPd16>
    </Wrapper>
  );
}

export default OtherProfile;
