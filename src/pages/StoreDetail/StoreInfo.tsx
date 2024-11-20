import trainIcon from "../../assets/directions_subway.png";
import markerIcon from "../../assets/marker.png";
import moneyIcon from "../../assets/attach_money.png";
import callIcon from "../../assets/call.png";
import language from "../../assets/language.png";
import todayIcon from "../../assets/today.png";
import scheduleIcon from "../../assets/schedule.png";
import voiceIcon from "../../assets/Voice.png";
import styled from "styled-components";
import { Icon } from "./styled";

const Store = styled.div`
  display: flex;
  h2 {
  }
  color: ${({ theme }) => theme.colors.gray900};
  padding: 12px 0;
`;

const BusinessHours = styled.div`
  h2 + h2 {
    margin-top: 8px;
  }
`;

function StoreInfo() {
  return (
    <>
      <Store>
        <Icon src={trainIcon} alt="train" />
        <h2>336m from Kaohsiung Railway Station</h2>
      </Store>
      <Store>
        <Icon src={markerIcon} alt="train" />
        <h2>高雄市新興區河南一路118號一樓</h2>
        <img
          width={"18px"}
          height={"17.5px"}
          style={{
            marginBottom: "auto",
            marginTop: "auto",
            marginLeft: "auto",
            marginRight: "4px",
          }}
          src={voiceIcon}
          alt="train"
        />
      </Store>
      <Store>
        <Icon src={moneyIcon} alt="train" />
        <h2>NTD200~400 / Rp1500～3000</h2>
      </Store>
      <Store>
        <Icon src={callIcon} alt="train" />
        <h2>0983387594</h2>
      </Store>
      <Store>
        <Icon src={language} alt="train" />
        <a href="#">Website</a>
      </Store>
      <Store>
        <Icon src={todayIcon} alt="train" />
        <h2>
          <a href="#">Book</a>
        </h2>
      </Store>
      <Store>
        <Icon src={scheduleIcon} alt="train" />
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
    </>
  );
}

export default StoreInfo;
