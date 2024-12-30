import styled from "styled-components";
import Icon from "../../assets/Frame65Large.svg";
import { Icon as IconImg } from "../../component/layout/LayoutComponents";

type pdProps = {
  $padding: string;
};
const ImgContainer = styled.div<pdProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ $padding }) => $padding};
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  padding: 8px 0 16px 0;
`;
const Img = styled.img`
  width: 56.57px;
  height: 88px;
  margin: 0 auto;
`;

const Button = styled.button`
  font-size: 17px;
  line-height: 22px;
  font-weight: 700;
  letter-spacing: -0.41px;
  padding: 10px 0;
  margin: 0 auto;
  width: 172px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.outline3};
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    background-color: ${({ theme }) => theme.colors.container3};
  }
`;

function LocationMap({
  padding = "22px 0",
  noBtn = false,
  content = "Use your location to explore your surroundings",
}) {
  return (
    <ImgContainer $padding={padding}>
      <Img src={Icon} alt="6w6wHIcon" />
      <Title>{content}</Title>
      {!noBtn && (
        <Button>
          <IconImg $isPointer={true} className="material-symbols-outlined">
            person_pin_circle
          </IconImg>
          Turn on location
        </Button>
      )}
    </ImgContainer>

    // <iframe
    //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14731.185538343252!2d120.3089536!3d22.6240775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0484a6685969%3A0xba1378cd31697b65!2z6auY6ZuE5biC5b-g5a2d5aSc5biC!5e0!3m2!1szh-TW!2stw!4v1733559202677!5m2!1szh-TW!2stw"
    //   width="100%"
    //   height="221px"
    //   style={{ border: 0 }}
    //   loading="lazy"
    // ></iframe>
    // <iframe
    //   width={"100%"}
    //   height={"221px"}
    //   referrerpolicy="no-referrer-when-downgrade"
    //   src="https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=25.033964,121.564468&zoom=15"
    //   allowfullscreen
    // ></iframe>
  );
}

export default LocationMap;
