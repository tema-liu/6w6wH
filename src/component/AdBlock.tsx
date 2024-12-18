import styled from "styled-components";
import advertisImg from "../assets/Frame 18.png";

const AdBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
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

const OfferButton = styled.button`
  padding: 12px 16px;
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.41px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.container2};
`;

function ADblock() {
  return (
    <AdBox>
      <Title>Celebrate Eid Al Fitr Offers</Title>
      <AdvertisingContent src={advertisImg} alt="advertising" />
      <OfferSection>
        <OfferTitle>
          40% off for four people , 20% off for two people ！
        </OfferTitle>
        <OfferButton>Menu</OfferButton>
      </OfferSection>
    </AdBox>
  );
}

export default ADblock;
