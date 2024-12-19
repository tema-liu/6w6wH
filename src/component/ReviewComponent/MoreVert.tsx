import styled from "styled-components";
import { Icon } from "../layout/LayoutComponents";

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

function MoreVert() {
  return (
    <>
      <IconImg className="material-symbols-outlined">more_vert</IconImg>
      <MenuOptions role="menu">
        <button role="menuitem">delete</button>
        <button role="menuitem">report</button>
      </MenuOptions>
    </>
  );
}

export default MoreVert;
