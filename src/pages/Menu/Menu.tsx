import styled from "styled-components";
import Header from "../../component/layout/header";
import {
  ContainerPd16,
  Icon,
  Wrapper,
} from "../../component/layout/LayoutComponents";

import { useNavigate } from "react-router-dom";
import Pure from "../../component/ReviewComponent/Pure";
import { useState } from "react";
import ContactInfo from "./CountactInfo";

const Content = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
  display: flex;
  flex-direction: column;

  div:last-child {
    margin-top: auto;
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;

const Item = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

const ItemList = [
  {
    iconName: "quiz",
    title: "FAQ",
    path: "/faqs",
  },
  {
    iconName: "settings",
    title: "Setting",
    path: "/settings",
  },
  {
    iconName: "security",
    title: "Privacy Policy",
    path: "/privacyPolicy",
  },
  {
    iconName: "list_alt",
    title: "Terms and Conditions",
    path: "/termsAndConditions",
  },
  {
    iconName: "send",
    title: "Contact us",
    window: "Contact us",
  },
  {
    iconName: "sentiment_very_satisfied",
    title: "Recommended Ｗebsite",
  },
];
const Container = styled(ContainerPd16)`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
const GrayButton = styled.button`
  column-gap: 8px;
  display: flex;
  color: ${({ theme }) => theme.colors.gray600};
  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 16px;
  padding: 16px;
`;

function Menu() {
  const navigator = useNavigate();
  //控制彈跳視窗
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );

  return (
    <Wrapper>
      <Header title="Menu" />
      <Container>
        <Content>
          {ItemList.map((item) => (
            <Item
              key={item.title}
              onClick={() => {
                if (item.path) {
                  navigator(item.path);
                }
                if (item.window) {
                  setModalContent(item.window);
                }
              }}
            >
              <ItemText>
                <Icon $color="gray900" className="material-symbols-outlined">
                  {item.iconName}
                </Icon>
                <p>{item.title}</p>
              </ItemText>
              <Icon $color="gray900" className="material-symbols-outlined">
                chevron_right
              </Icon>
            </Item>
          ))}
        </Content>
        <GrayButton>
          <Icon $color="gray600" className="material-symbols-outlined">
            output
          </Icon>
          Log Out
        </GrayButton>
        {modalContent && (
          <Pure
            canActive={true}
            isActive={modalContent === "Contact us"}
            text="Contact us"
            content={
              <ContactInfo
                closeWindow={() => {
                  setModalContent(null);
                }}
              />
            }
            onClose={() => {
              setModalContent(null);
            }}
          />
        )}
      </Container>
    </Wrapper>
  );
}

export default Menu;
