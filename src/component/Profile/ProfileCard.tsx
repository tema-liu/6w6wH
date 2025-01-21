import { Icon } from "../layout/LayoutComponents";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import {
  Card,
  AreaLabel,
  AreaBox,
  Name,
  Content,
  HeadShot,
  Profile,
  TextBox,
  AreaMarquee,
  Text,
  Message,
  Button,
  FollowBtn,
} from "./style/ProfileCard";
import { useNavigate } from "react-router-dom";
import BadgeWindow from "./BadgeWindow";
import Country from "./ConuntryIcon";
import { ProfileType } from "../../type/type";
import { defaultUserPhoto, userPicture } from "../../constants/srcPaths";
import useDebounce from "../../hooks/useDebounce";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { postUserFollow } from "../../apis/postUserFollow";
import useAuthVerify from "../../hooks/useAuthVerify ";

type ProfileProps = {
  isUserProfile: Boolean;
  profile: ProfileType;
  userId?: number;
};

function ProfileCard({ userId, isUserProfile, profile }: ProfileProps) {
  const navigator = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);
  const [isAuth, setAuth] = useState(false);
  const authVerify = useAuthVerify(token);
  const [isFollow, setFollow] = useState(profile.isFollowed);
  const followClickHandler = async () => {
    if (!isAuth) {
      const isAuthenticated = await authVerify();
      if (!isAuthenticated) {
        return; // 如果驗證失敗結束函式
      }
      setAuth(!isAuth);
    }
    setFollow(!isFollow);
  };

  useDebounce(isFollow, 1000, async () => {
    if (userId) {
      const followUser = await postUserFollow(userId, token);
      console.log(followUser);
    }
  });

  return (
    <>
      <Card>
        <HeadShot
          src={
            profile.userPhoto
              ? userPicture + profile.userPhoto
              : defaultUserPhoto
          }
          alt="headShot"
        />
        <Content>
          <Profile>
            <Name>{profile?.name}</Name>
            <AreaLabel>
              <AreaBox>
                <Country country={profile?.country} />
                <BadgeWindow level={profile?.badge} />
              </AreaBox>
              <AreaMarquee>
                <Marquee>
                  <TextBox>
                    <Text>{profile.comeFrom}</Text>
                    <Icon
                      $isPointer={false}
                      $color="gray600"
                      className="material-symbols-outlined"
                    >
                      trending_flat
                    </Icon>
                    <Text>{profile.nowLiveIn}</Text>
                  </TextBox>
                </Marquee>
              </AreaMarquee>
            </AreaLabel>
          </Profile>
          <Message>{profile.bio}</Message>
        </Content>
        {isUserProfile ? (
          <Button
            onClick={() => {
              navigator("/editProfile");
            }}
          >
            <Icon
              $isPointer={true}
              $color="gray900"
              className="material-symbols-outlined"
            >
              edit
            </Icon>
            Edit
          </Button>
        ) : (
          <FollowBtn $isFollowing={isFollow} onClick={followClickHandler}>
            <Icon
              $isPointer={true}
              $fill={!isFollow}
              $color="gray900"
              className="material-symbols-outlined"
            >
              add_circle
            </Icon>
            {isFollow ? "Following" : "Follow"}
          </FollowBtn>
        )}
      </Card>
    </>
  );
}

export default ProfileCard;
