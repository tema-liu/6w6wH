import { Container, Content, Item, ItemText } from "./style/settings";
import { Wrapper, Icon } from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import GrayButton from "../../component/Button/GrayBtn";
import { useState } from "react";
import { GeneralPopupModal } from "../../component/PopupModel/PopupModal";
import ModelInfo from "../../component/PopupModel/ModelInfo";
import { itemList } from "./data/settings";

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
                  <Icon
                    $isPointer={false}
                    $color="gray900"
                    className="material-symbols-outlined"
                  >
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
                isBtnDanger={true}
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
