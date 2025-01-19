import { Icon } from "../../component/layout/LayoutComponents";
import ADblock from "../../component/shop/AdBlock";
import { HeadShot, CardWrapper, Text, Content } from "./style";
import { defaultUserPhoto } from "../../constants/srcPaths";
import { useNavigate } from "react-router-dom";
import type {
  AdvertiseNotification,
  GeneralNotification,
  Notification,
} from "../../type/type";

const AdNotification = (notify: AdvertiseNotification) => {
  const { data } = notify;

  return (
    <CardWrapper>
      <ADblock data={data} />
    </CardWrapper>
  );
};

const GeneralNotification = (notify: GeneralNotification) => {
  const { action, data } = notify;
  const navigate = useNavigate();
  const iconSettings = {
    follow: {
      iconColor: "secondary",
      iconType: "person",
      text: "followed you",
    },
    like: {
      iconColor: "container1",
      iconType: "favorite",
      text: `liked your ${data.likeType}`,
      fill: " 'FILL' 1",
    },
    respond: {
      iconColor: "secondary",
      iconType: "prompt_suggestion",
      text: "respond to your post",
    },
  };

  const settings = iconSettings[action];
  const { iconColor, iconType, text } = settings;

  // 檢查 fill 是否存在
  const fill = "fill" in settings ? settings.fill : "'FILL' 0";

  return (
    <CardWrapper
      onClick={() => {
        if (action === "like" || action === "respond") {
          navigate(`/review/${data.commentId}`);
        } else {
          navigate(`/otherProfile/${data.userId}`);
        }
      }}
    >
      <Icon
        $isPointer={true}
        $color={iconColor}
        style={{ fontVariationSettings: fill }}
        className="material-symbols-outlined"
      >
        {iconType}
      </Icon>
      <Content>
        <HeadShot
          src={
            notify.data?.userPhoto ? notify.data?.userPhoto : defaultUserPhoto
          }
        />
        <Text>
          {notify.data?.userName} {text}
        </Text>
      </Content>
    </CardWrapper>
  );
};

function NotifyCard({ notify }: { notify: Notification }) {
  if (notify.type === "advertise") {
    return <AdNotification {...notify} />;
  }
  if (notify.type === "general") {
    return <GeneralNotification {...notify} />;
  }
  return null;
}

export default NotifyCard;
