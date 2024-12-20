import { Icon } from "../../component/layout/LayoutComponents";
import headImg from "../../assets/fe595192d2f3182e2c308450c2f7be7f.jpg";
import ADblock from "../../component/AdBlock";
import { HeadShot, CardWrapper, Text, Content } from "./style";

type GeneralNotificationProps = {
  action: "like" | "follow" | "respond";
  data?: {
    userName: string;
    userPhoto: string;
    commentID?: string;
    userID?: string;
    likeType?: "post" | "reply";
  };
};

const AdNotification = () => {
  return (
    <CardWrapper>
      <ADblock />
    </CardWrapper>
  );
};

const GeneralNotification = ({ action, data }: GeneralNotificationProps) => {
  const iconSettings = {
    follow: {
      iconColor: "secondary",
      iconType: "person",
      text: "followed you",
    },
    like: {
      iconColor: "container1",
      iconType: "favorite",
      text: "liked your review",
      fill: " 'FILL' 1",
    },
    respond: {
      iconColor: "secondary",
      iconType: "prompt_suggestion",
      text: "liked your review",
    },
  };

  const settings = iconSettings[action];
  const { iconColor, iconType, text } = settings;

  // 檢查 fill 是否存在
  const fill = "fill" in settings ? settings.fill : "'FILL' 0";

  return (
    <CardWrapper>
      <Icon
        $color={iconColor}
        style={{ fontVariationSettings: fill }}
        className="material-symbols-outlined"
      >
        {iconType}
      </Icon>
      <Content>
        <HeadShot src={headImg} />
        <Text>Fei Fei {text}</Text>
      </Content>
    </CardWrapper>
  );
};

type NotificationItemProps = {
  notification: {
    type: "general" | "advertise";
    action?: "like" | "follow" | "respond";
    data?: any; //暫時設定?
  };
};

function NotifyCard({ notification }: NotificationItemProps) {
  const { type, data, action } = notification;
  if (type === "advertise") {
    return <AdNotification />;
  }
  return <GeneralNotification action={action!} data={data} />;
}

export default NotifyCard;
