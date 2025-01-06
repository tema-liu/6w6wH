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
        {data.Book && (
          <Store>
            <Icon $isPointer={false} className="material-symbols-outlined">
              today
            </Icon>
            <a href={data.Book}>Book</a>
          </Store>
        )}
        {data.opening_hours && (
          <Store>
            <Icon $isPointer={false} className="material-symbols-outlined">
              schedule
            </Icon>
            <BusinessHours>
              <BusinessHoursTitle $colors="gray900">
                Business hours
              </BusinessHoursTitle>
              <h2>{`Monday ${data.opening_hours?.Monday}`}</h2>
              <h2>{`Tuesday ${data.opening_hours?.Tuesday}`}</h2>
              <h2>{`Wednesday ${data.opening_hours?.Wednesday}`}</h2>
              <h2>{`Thursday ${data.opening_hours?.Thursday}`}</h2>
              <h2>{`Friday ${data.opening_hours?.Friday}`}</h2>
              <h2>{`Saturday ${data.opening_hours?.Saturday}`}</h2>
              <h2>{`Sunday ${data.opening_hours?.Sunday}`}</h2>
            </BusinessHours>
          </Store>
        )}
      </ContentDetail>
    </>
  );
}

export default StoreInfo;
