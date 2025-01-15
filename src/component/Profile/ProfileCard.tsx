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
import noUserPhoto from "../../assets/emptyPhoto/137420f5b9c39bc911e472f5d20f053e.jpg";
import { ProfileType } from "../../type/type";

type ProfileProps = {
  isUserProfile: Boolean;
  profile: ProfileType;
};

function ProfileCard({ isUserProfile, profile }: ProfileProps) {
  const navigator = useNavigate();
  const [isFollow, setFollow] = useState(false);
  const followClickHandler = () => {
    setFollow(!isFollow);
  };

  return (
    <>
      <Card>
        <HeadShot
          src={profile.userPhoto ? profile.userPhoto : noUserPhoto}
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
