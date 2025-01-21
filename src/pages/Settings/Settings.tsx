import { Container, Content, Item, ItemText } from "./style/settings";
import { Wrapper, Icon } from "../../component/Layout/LayoutComponents";
import Header from "../../component/Layout/Header";
import GrayButton from "../../component/Button/GrayBtn";
import { useState } from "react";
import { GeneralPopupModal } from "../../component/PopupModel/PopupModal";
import ModelInfo from "../../component/PopupModel/ModelInfo";
import { itemList } from "./data/settings";
import { postDeleteAccount } from "../../apis/postUserDelete";
import { RootState } from "../../utils/redux/store";
import { useSelector } from "react-redux";
import useAuthVerify from "../../hooks/useAuthVerify ";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const [windowOpen, setWindowOpen] = useState(false);
  const token = useSelector((state: RootState) => state.auth.token);
  const authVerify = useAuthVerify(token);
  const deleteHandler = async () => {
    const isAuthenticated = await authVerify();
    if (!isAuthenticated) {
      return; // 如果驗證失敗結束函式
    }
    const res = await postDeleteAccount(token);
    console.log(res);
    navigate("/");
  };

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
                btnClick={deleteHandler}
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
