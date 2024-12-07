import styled from "styled-components";
import { useState } from "react";
import { Icon } from "./LayoutComponents";
import OutsideAlerter from "../hooks/OutsideAlerter";

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
  userID: string;
  replyID: string;
  activeUserID?: string;
};

function MoreVert({
  activeUserID = "isAnonymous",
  userID,
  replyID,
}: moreProps) {
  const [menuOpenID, setMenuOpenID] = useState<string | null>(null);

  const toggleMenu = (replyID: string) => {
    if (menuOpenID === replyID) {
      setMenuOpenID(null); // 再次點擊時關閉
    } else {
      setMenuOpenID(replyID); // 打開菜單
    }
  };

  const closeMenu = () => {
    setMenuOpenID(null); // 點擊外部時關閉
  };

  return (
    <OutsideAlerter onOutsideClick={closeMenu}>
      <IconImg
        onClick={() => toggleMenu(replyID)}
        className="material-symbols-outlined"
      >
        more_vert
      </IconImg>
      {menuOpenID !== null && menuOpenID === replyID && (
        <MenuOptions role="menu">
          {userID === activeUserID && <button role="menuitem">delete</button>}
          <button role="menuitem">report</button>
        </MenuOptions>
      )}
    </OutsideAlerter>
  );
}

export default MoreVert;
