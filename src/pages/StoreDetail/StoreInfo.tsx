import trainIcon from "../../assets/directions_subway.png";
import markerIcon from "../../assets/marker.png";
import moneyIcon from "../../assets/attach_money.png";
import callIcon from "../../assets/call.png";
import language from "../../assets/language.png";
import todayIcon from "../../assets/today.png";
import scheduleIcon from "../../assets/schedule.png";
import voiceIcon from "../../assets/Voice.png";
import advertisImg from "../../assets/Frame 18.png";
import styled from "styled-components";
import { Icon } from "./styled";
import { IconImg } from "../../component/LayoutComponents";

const Store = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.gray900};
  padding: 12px 0;
`;

const BusinessHours = styled.div`
  h2 + h2 {
    margin-top: 8px;
  }
`;
const ContentDetail = styled.div`
  padding: 0 16px;
  border-radius: 0 0 32px 32px;
  background-color: ${({ theme }) => theme.colors.light};
`;

const AdvertisingContent = styled.img`
  margin: 16px 0 16px 0;
  width: 100%;
  height: 238px;
  object-fit: cover;
  object-position: center;
`;

function StoreInfo() {
  return (
    <>
      <ContentDetail>
        <AdvertisingContent src={advertisImg} alt="advertising" />
        <Store>
          <Icon src={trainIcon} alt="train" />
          <h2>336m from Kaohsiung Railway Station</h2>
        </Store>
        <Store>
          <Icon src={markerIcon} alt="markerIcon" />
          <h2>高雄市新興區河南一路118號一樓</h2>
          <IconImg
            style={{
              marginBottom: "auto",
              marginTop: "auto",
              marginLeft: "auto",
            }}
            src={voiceIcon}
            alt="voiceIcon"
          />
        </Store>
        <Store>
          <Icon src={moneyIcon} alt="moneyIcon" />
          <h2>NTD200~400 / Rp1500～3000</h2>
        </Store>
        <Store>
          <Icon src={callIcon} alt="callIcon" />
          <h2>0983387594</h2>
        </Store>
        <Store>
          <Icon src={language} alt="language" />
          <a href="#">Website</a>
        </Store>
        <Store>
          <Icon src={todayIcon} alt="todayIcon" />
          <h2>
            <a href="#">Book</a>
          </h2>
        </Store>
        <Store>
          <Icon src={scheduleIcon} alt="scheduleIcon" />
          <BusinessHours>
            <h2 style={{ fontWeight: "700" }}>Business hours</h2>
            <h2>Monday closed</h2>
            <h2>Tuesday closed</h2>
            <h2>Wednesday 14:00–18:00</h2>
            <h2>Thursday 14:00–18:00</h2>
            <h2>Friday 14:00–18:00</h2>
            <h2>Saturday 14:00–19:00</h2>
            <h2>Sunday 14:00–19:00</h2>
          </BusinessHours>
        </Store>
      </ContentDetail>
    </>
  );
}

export default StoreInfo;
