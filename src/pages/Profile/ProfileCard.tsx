import styled from "styled-components";
import photo from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import country from "../../assets/id.svg";
import { Icon } from "../../component/layout/LayoutComponents";
import Marquee from "react-fast-marquee";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 16px;
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
  display: flex;
  position: relative;
`;
const HeadShot = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 16px 0 0 16px;
`;
const Content = styled.div`
  padding: 16px;
  width: 100%;
`;
const AreaLabel = styled.div`
  padding: 8px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  display: flex;
`;
const AreaBox = styled.div`
  padding-right: 6px;
  border-right: 1px solid ${({ theme }) => theme.colors.gray400};
  display: inline-flex;
  column-gap: 4px;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
const Profile = styled.div`
  width: 100%;
`;
const Name = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.38px;
`;
const Message = styled.div`
  padding-top: 8px;
`;
const Button = styled.button`
  position: absolute;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.outline3};
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;

  border-radius: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  column-gap: 8px;
  bottom: 16px;
  left: -16px;
`;

const AreaMarquee = styled.div`
  padding-left: 6px;
  width: 100%;
  display: flex;
`;
const TextBox = styled.div`
  display: flex;
  column-gap: 2px;
  align-items: center;
  overflow-y: hidden;
  margin-left: 8px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray600};
`;

function ProfileCard() {
  return (
    <>
      <Card>
        <HeadShot src={photo} alt="headShot" />
        <Content>
          <Profile>
            <Name>Ala</Name>
            <AreaLabel>
              <AreaBox>
                <Img src={country} />
                <Img src={country} />
              </AreaBox>
              <AreaMarquee>
                <Marquee>
                  <TextBox>
                    <Text>Java</Text>
                    <Icon
                      $color="gray600"
                      className="material-symbols-outlined"
                    >
                      trending_flat
                    </Icon>
                    <Text>Kaohsiung</Text>
                  </TextBox>
                </Marquee>
              </AreaMarquee>
            </AreaLabel>
          </Profile>
          <Message>Give a man a fish and you feed him for a day. </Message>
        </Content>
        <Button>
          <Icon $color="primary" className="material-symbols-outlined">
            edit
          </Icon>
          Edit
        </Button>
      </Card>
    </>
  );
}

export default ProfileCard;
