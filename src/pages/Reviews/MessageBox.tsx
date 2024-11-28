import styled from "styled-components";
import messageIcon from "../../assets/message.png";
import { IconImg } from "../../component/LayoutComponents";
import { useState } from "react";

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-left: -8px;
  position: sticky;
  padding-top: 8px;
  padding-bottom: 40px;
  bottom: 0;
`;

const Message = styled.input`
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.41px;
  margin: 0 8px;
  padding: 12px 16px 14px 16px;
  vertical-align: top;
  flex: 1;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  background-color: ${({ theme }) => theme.colors.light};
`;

type ButtonProps = {
  $bgColor?: string;
};
const Button = styled.button<ButtonProps>`
  padding: 12px;
  background-color: ${({ $bgColor, theme }) =>
    $bgColor?.trim() !== "" ? theme.colors.outline3 : theme.colors.gray400};
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  border-radius: 8px;
`;

function MessageBox() {
  const [inputValue, setInputValue] = useState("");

  const handleBtnClick = () => {
    if (inputValue.trim()) {
      console.log("Reply:", inputValue); // 提交內容
      setInputValue(""); //清空輸入值
    } else {
      console.log("請勿空白！");
    }
  };

  return (
    <Box>
      <Message
        value={inputValue}
        placeholder="Reply to this review"
        onChange={(e) => setInputValue(e.target.value)}
      ></Message>

      <Button $bgColor={inputValue} onClick={handleBtnClick}>
        <IconImg src={messageIcon} alt="messageIcon" />
      </Button>
    </Box>
  );
}

export default MessageBox;
