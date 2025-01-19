import Header from "../../component/layout/header";
import { Icon, Wrapper } from "../../component/layout/LayoutComponents";
import { useNavigate } from "react-router-dom";
import {
  GeneralPopupModal,
  PopupModal,
} from "../../component/PopupModel/PopupModal";
import { useState } from "react";
import TextAreaInfo from "../../component/PopupModel/TextAreaInfo";
import { Container, Content, Item, ItemText } from "./style/menu";
import ModelInfo from "../../component/PopupModel/ModelInfo";
import GrayButton from "../../component/Button/GrayBtn";
import { ItemList } from "./data";
import { useDispatch } from "react-redux";
import { clearLoginData } from "../../utils/redux/auth/slice";
import { clearProfile } from "../../utils/redux/userProfile/slice";

function Menu() {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  //控制彈跳視窗
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );

  const logOutHandler = () => {
    dispatch(clearLoginData());
    dispatch(clearProfile());
    navigator("/");
  };

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
                <Icon
                  $isPointer={true}
                  $color="gray900"
                  className="material-symbols-outlined"
                >
                  {item.iconName}
                </Icon>
                <p>{item.title}</p>
              </ItemText>
              <Icon
                $isPointer={true}
                $color="gray900"
                className="material-symbols-outlined"
              >
                chevron_right
              </Icon>
            </Item>
          ))}
        </Content>
        <GrayButton
          title="Log Out"
          iconName="output"
          onClick={() => {
            setModalContent("logOut");
          }}
        ></GrayButton>
        {modalContent === "Contact us" && (
          <PopupModal
            canActive={true}
            isActive={modalContent === "Contact us"}
            text="Contact us"
            content={
              <TextAreaInfo
                placeholder={
                  "If you have any reporting system issues, feedback, or cross-industry cooperation issues, you can report them to us here."
                }
                idFor="contactUs"
                title="What do you want to tell 6w6wH?"
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
                isBtnDanger={true}
                title="Log out 6w6wH ?"
                btnText="Log out"
                btnClick={logOutHandler}
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
