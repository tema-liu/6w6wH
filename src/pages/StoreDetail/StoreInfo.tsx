import { Icon } from "./style/storeDetail";
import { Icon as IconImg } from "../../component/layout/LayoutComponents";
import ADblock from "../../component/shop/AdBlock";
import {
  ContentDetail,
  Store,
  BusinessHours,
  BusinessHoursTitle,
} from "./style/storeInfo";

function StoreInfo() {
  return (
    <>
      <ContentDetail>
        <ADblock />
        {/* <Store>
          <Icon className="material-symbols-outlined">train</Icon>
          <h2>336m from Kaohsiung Railway Station</h2>
        </Store> */}
        <Store>
          <Icon $isPointer={false} className="material-symbols-outlined">
            location_on
          </Icon>
          <h2>高雄市新興區河南一路118號一樓</h2>
          <IconImg
            $isPointer={false}
            className="material-symbols-outlined"
            style={{
              marginBottom: "auto",
              marginTop: "auto",
              marginLeft: "auto",
              cursor: "pointer",
            }}
          >
            volume_up
          </IconImg>
        </Store>
        <Store>
          <Icon $isPointer={false} className="material-symbols-outlined">
            location_on
          </Icon>
          <h2>
            800, Kaohsiung City, Sinsing District, Henan 1st Rd, No.118, 1F
          </h2>
        </Store>
        <Store>
          <Icon $isPointer={false} className="material-symbols-outlined">
            attach_money
          </Icon>
          <h2>NTD200~400 / Rp1500～3000</h2>
        </Store>
        <Store>
          <Icon $isPointer={false} className="material-symbols-outlined">
            call
          </Icon>
          <h2>0983387594</h2>
        </Store>
        <Store>
          <Icon $isPointer={false} className="material-symbols-outlined">
            language
          </Icon>
          <a href="#">Website</a>
        </Store>
        <Store>
          <Icon $isPointer={false} className="material-symbols-outlined">
            today
          </Icon>
          <a href="#">Book</a>
        </Store>
        <Store>
          <Icon $isPointer={false} className="material-symbols-outlined">
            schedule
          </Icon>
          <BusinessHours>
            <BusinessHoursTitle $colors="gray900">
              Business hours
            </BusinessHoursTitle>
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
