import styled from "styled-components";
import {
  Wrapper,
  ContainerPd16,
  Icon,
} from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import GrayButton from "../../component/Button/GrayBtn";
import { useState } from "react";
import { GeneralPopupModal } from "../../component/PopupModel/PopupModal";
import ModelInfo from "../../component/PopupModel/ModelInfo";
import LangSelect from "./LangSelect";
import Toggle from "../../component/Toggle";

const Content = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
  display: flex;
  flex-direction: column;
`;

const Container = styled(ContainerPd16)`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
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

const itemList = [
  {
    iconName: "language",
    title: "Languages",
    button: <LangSelect />,
  },
  {
    iconName: "dark_mode",
    title: "Dark mode",
    button: <Toggle />,
  },
];

function Settings() {
  const [windowOpen, setWindowOpen] = useState(false);

  return (
    <Wrapper>
      <Header title="Setting" />
      <Container>
        <Content>
          {itemList.map((item) => {
            return (
              <Item key={item.title}>
                <ItemText>
                  <Icon $color="gray900" className="material-symbols-outlined">
                    {item.iconName}
                  </Icon>
                  <p>{item.title}</p>
                </ItemText>
                {item.button}
              </Item>
            );
          })}
        </Content>
        <GrayButton
          iconName="delete"
          title="Delete account"
          onClick={() => {
            setWindowOpen(!windowOpen);
          }}
        />
        {windowOpen && (
          <GeneralPopupModal
            canActive={true}
            isActive={windowOpen}
            content={
              <ModelInfo
                text="Deleting your account will permanently remove:All your Details, Reviews, Favorites, Followers etc."
                title="Delete your account ?"
                btnText="Delete account"
                btnClick={() => {}} //5
                cancelClick={() => {
                  setWindowOpen(!windowOpen);
                }}
              />
            }
            onClose={() => {
              setWindowOpen(!windowOpen);
            }}
          />
        )}
      </Container>
    </Wrapper>
  );
}

export default Settings;
