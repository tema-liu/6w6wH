import styled from "styled-components";
import { useState } from "react";
import OutsideAlerter from "../../hooks/OutsideAlerter";
import { Icon } from "../layout/LayoutComponents";
import { GeneralPopupModal } from "../PopupModel/PopupModal";
import ModelInfo from "../PopupModel/ModelInfo";

const IconImg = styled(Icon)`
  margin: 12px 8px;
  color: ${({ theme }) => theme.colors.gray600};
`;
const MenuOptions = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
  background: white;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  z-index: 10;
  display: flex;
  flex-direction: column;

  > button + button {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
  button {
    padding: 4px;
    font-size: 16px;
    white-space: nowrap;
  }
`;

type moreProps = {
  reviewOrReply: "review" | "reply"; //判斷是評論或留言
  userID: string;
  replyID: string;
  activeUserID?: string; //登入者的ID
};

function MoreVert({
  reviewOrReply,
  // "isAnonymous"
  activeUserID = "reply-54321",
  userID,
  replyID,
}: moreProps) {
  const [menuOpenID, setMenuOpenID] = useState(false);

  const toggleMenu = (replyID: string) => {
    setMenuOpenID(!menuOpenID);
    console.log(`這個ID是${replyID}`, reviewOrReply);
  };

  return (
    <>
      <IconImg
        $isPointer={true}
        onClick={() => toggleMenu(replyID)}
        className="material-symbols-outlined"
      >
        more_vert
      </IconImg>
      {menuOpenID && (
        <GeneralPopupModal
          content={
            <ModelInfo
              title=""
              btnText={`Delete ${reviewOrReply}`}
              btnClick={() => {}}
              cancelClick={() => {
                setMenuOpenID(!menuOpenID);
              }}
            />
          }
          canActive={true}
          isActive={menuOpenID}
          onClose={() => {
            setMenuOpenID(!menuOpenID);
          }}
        />
      )}
    </>
  );
}

export default MoreVert;
