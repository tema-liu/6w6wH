import { Icon } from "./style/storeDetail";
import { Icon as IconImg } from "../../component/layout/LayoutComponents";
import ADblock from "../../component/AdBlock";
import { StoreData } from "../../type/type";
import { ContentDetail, Store, BusinessHours } from "./style/storeInfo";

function StoreInfo({ data }: { data: StoreData }) {
  return (
    <>
      <ContentDetail>
        {data.advertise && <ADblock data={data.advertise} />}

        {data.address && (
          <Store>
            <Icon $isPointer={false} className="material-symbols-outlined">
              location_on
            </Icon>
            <h2>{data.address}</h2>
            <IconImg
              $isPointer={true}
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
            <h2>{data.budget}</h2>
          </Store>
        )}
        {data.phone && (
          <Store>
            <Icon $isPointer={false} className="material-symbols-outlined">
              call
            </Icon>
            <h2>{data.phone}</h2>
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
              <h2 style={{ fontWeight: "700" }}>Business hours</h2>
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
