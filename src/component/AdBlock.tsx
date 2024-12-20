import styled from "styled-components";
import { Advertise } from "../type/type";

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
  border: 0;
  overflow: hidden;
  max-width: 77px;
  width: 100%;
  position: relative;
  background: -webkit-linear-gradient(
    top,
    #e59005,
    #ffdb6b 25%,
    #ffffff 38%,
    #ffc002 63%,
    #ffe59a 87%,
    #e59005
  );
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 10%), 0px 0px 4px rgba(0, 0, 0, 20%);

  &:after {
    content: "";
    position: absolute;
    top: -100%;
    right: -100%;
    width: 50%;
    height: 300%;
    transform: rotate(30deg);
    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.4) 75%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: shine 2s infinite;
  }

  @keyframes shine {
    to {
      opacity: 1;
      right: 150%;
    }
  }
  a {
    display: inline-block;
    padding: 12px 16px;
    font-size: 17px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.41px;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray900};
  }
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
        <OfferButton>
          <a href={data.url}>Menu</a>
        </OfferButton>
      </OfferSection>
    </AdBox>
  );
}

export default ADblock;
