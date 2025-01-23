import { Icon } from "./style/storeDetail";
import ADblock from "../../component/shop/AdBlock";
import {
  ContentDetail,
  Store,
  BusinessHours,
  BusinessHoursTitle,
} from "./style/storeInfo";
import { StoreData } from "../../type/type";
import VoiceReader from "../../component/shop/VoiceReader";

function StoreInfo({ data }: { data: StoreData }) {
  const weekDay = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const openHour = data.opening_hours;
  return (
    <>
      <ContentDetail>
        {data.advertise?.title && <ADblock data={data.advertise} />}

        {data.address && (
          <Store>
            <Icon $isPointer={false} className="material-symbols-outlined">
              location_on
            </Icon>
            <h2>{data.address}</h2>
            <VoiceReader text={data.address} $margin={"0 0 0 auto"} />
          </Store>
        )}
        {data.enAddress && (
          <Store>
            <Icon $isPointer={false} className="material-symbols-outlined">
              location_on
            </Icon>
            <h2>{data.enAddress}</h2>
          </Store>
        )}
        {data.budget && (
          <Store>
            <Icon $isPointer={false} className="material-symbols-outlined">
              attach_money
            </Icon>
            <h2>{data.budget.replace(/\s*/g, "").replace(/\//g, " / ")}</h2>
          </Store>
        )}
        {data.phone && (
          <Store>
            <Icon $isPointer={false} className="material-symbols-outlined">
              call
            </Icon>
            <h2>{data.phone.replace(/\s*/g, "")}</h2>
          </Store>
        )}
        {data.url && (
          <Store>
            <Icon $isPointer={false} className="material-symbols-outlined">
              language
            </Icon>
            <a href={data.url}>Website</a>
          </Store>
        )}
        {data.book && (
          <Store>
            <Icon $isPointer={false} className="material-symbols-outlined">
              today
            </Icon>
            <a href={data.book}>Book</a>
          </Store>
        )}

        <Store>
          <Icon $isPointer={false} className="material-symbols-outlined">
            schedule
          </Icon>
          <BusinessHours>
            <BusinessHoursTitle
              $colors={openHour?.Monday ? "gray900" : "danger"}
            >
              Business hours
            </BusinessHoursTitle>
            {weekDay.map((day) => {
              const hour = openHour?.[day];
              return hour ? <h2 key={day}>{`${day} ${hour}`}</h2> : null;
            })}
          </BusinessHours>
        </Store>
      </ContentDetail>
    </>
  );
}

export default StoreInfo;
