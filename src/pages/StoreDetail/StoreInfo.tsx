import styled from "styled-components";
import { Icon } from "./styled";
import { Icon as IconImg } from "../../component/LayoutComponents";
import ADblock from "../../component/AdBlock";
import { StoreData } from "../../type/type";

const Store = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.gray900};
  padding: 12px 0;

  a {
    text-decoration: underline;
  }
`;

const BusinessHours = styled.div`
  h2 + h2 {
    margin-top: 8px;
  }
`;
const ContentDetail = styled.div`
  padding: 16px 16px 0 16px;
  border-radius: 0 0 32px 32px;
  background-color: ${({ theme }) => theme.colors.light};
`;

function StoreInfo({ data }: { data: StoreData }) {
  return (
    <>
      <ContentDetail>
        {data.advertise && <ADblock data={data.advertise} />}

        {data.address && (
          <Store>
            <Icon className="material-symbols-outlined">location_on</Icon>
            <h2>{data.address}</h2>
            <IconImg
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
            <Icon className="material-symbols-outlined">location_on</Icon>
            <h2>{data.enAddress}</h2>
          </Store>
        )}
        {data.budget && (
          <Store>
            <Icon className="material-symbols-outlined">attach_money</Icon>
            <h2>{data.budget}</h2>
          </Store>
        )}
        {data.phone && (
          <Store>
            <Icon className="material-symbols-outlined">call</Icon>
            <h2>{data.phone}</h2>
          </Store>
        )}
        {data.url && (
          <Store>
            <Icon className="material-symbols-outlined">language</Icon>
            <a href={data.url}>Website</a>
          </Store>
        )}
        {data.Book && (
          <Store>
            <Icon className="material-symbols-outlined">today</Icon>
            <a href={data.Book}>Book</a>
          </Store>
        )}
        {data.opening_hours && (
          <Store>
            <Icon className="material-symbols-outlined">schedule</Icon>
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
