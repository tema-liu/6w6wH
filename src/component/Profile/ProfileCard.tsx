import photo from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import country from "../../assets/id.svg";
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
  Img,
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

type ProfileProps = {
  isUserProfile: Boolean;
};

function ProfileCard({ isUserProfile }: ProfileProps) {
  const navigator = useNavigate();

  const [isFollow, setFollow] = useState(false);
  const followClickHandler = () => {
    setFollow(!isFollow);
  };

  return (
    <>
      <Card>
        <HeadShot src={photo} alt="headShot" />
        <Content>
          <Profile>
            <Name>Ala</Name>
            <AreaLabel>
              <AreaBox>
                <Img src={country} />
                <BadgeWindow level="level1" />
              </AreaBox>
              <AreaMarquee>
                <Marquee>
                  <TextBox>
                    <Text>Java</Text>
                    <Icon
                      $isPointer={false}
                      $color="gray600"
                      className="material-symbols-outlined"
                    >
                      trending_flat
                    </Icon>
                    <Text>Kaohsiung</Text>
                  </TextBox>
                </Marquee>
              </AreaMarquee>
            </AreaLabel>
          </Profile>
          <Message>Give a man a fish and you feed him for a day. </Message>
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
