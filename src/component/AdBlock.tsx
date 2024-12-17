import styled from "styled-components";
import { Advertise } from "../type/type";

const AdBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const AdvertisingContent = styled.img`
  width: 100%;
  height: 238px;
  object-fit: cover;
  object-position: center;
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.38px;
`;

const OfferSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OfferTitle = styled.p`
  font-weight: 700;
`;

const OfferButton = styled.a`
  padding: 12px 16px;
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.41px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.container2};
`;

type ADblockProps = {
  data: Advertise;
};

function ADblock({ data }: ADblockProps) {
  return (
    <AdBox>
      <Title>{data.title}</Title>
      <AdvertisingContent src={data.photo} alt="advertising" />
      <OfferSection>
        <OfferTitle>{data.slogan}</OfferTitle>
        <OfferButton href={data.url}>Menu</OfferButton>
      </OfferSection>
    </AdBox>
  );
}

export default ADblock;
