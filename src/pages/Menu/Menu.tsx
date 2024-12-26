import Header from "../../component/layout/header";
import { Icon, Wrapper } from "../../component/layout/LayoutComponents";
import { useNavigate } from "react-router-dom";
import {
  GeneralPopupModal,
  PopupModal,
} from "../../component/PopupModel/PopupModal";
import { useState } from "react";
import ContactInfo from "./ContactInfo";
import {
  Container,
  Content,
  ItemList,
  Item,
  ItemText,
  GrayButton,
} from "./style/menu";
import ModelInfo from "../../component/PopupModel/ModelInfo";

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
        <GrayButton
          onClick={() => {
            setModalContent("logOut");
          }}
        >
          <Icon $color="gray600" className="material-symbols-outlined">
            output
          </Icon>
          Log Out
        </GrayButton>
        {modalContent === "Contact us" && (
          <PopupModal
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
        {modalContent === "logOut" && (
          <GeneralPopupModal
            canActive={true}
            isActive={modalContent === "logOut"}
            content={
              <ModelInfo
                title="Log out 6w6wH ?"
                btnText="Log out"
                btnClick={() => {}} //5
                cancelClick={() => {
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
