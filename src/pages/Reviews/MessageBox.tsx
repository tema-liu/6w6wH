import styled from "styled-components";
import photo from "../../assets/fe595192d2f3182e2c308450c2f7be7f.jpg";
import messageIcon from "../../assets/message.png";
import { IconImg } from "../../component/LayoutComponents";
import { useState } from "react";

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-left: -8px;
  position: sticky;
  padding-top: 8px;
  padding-bottom: 16px;
  bottom: 72px;
`;

const HeadShot = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  object-position: center;
  border-radius: 0 8px 8px 0;
`;

const Message = styled.input`
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.41px;
  margin: 0 8px;
  height: 64px;
  padding: 0 16px 12px 16px;
  vertical-align: top;
  flex: 1;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  background-color: ${({ theme }) => theme.colors.light};
`;
const Button = styled.button`
  padding: 20px 8px;
  background-color: ${({ theme }) => theme.colors.gray100};
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
      <HeadShot src={photo} alt="HeadShot" />
      <Message
        value={inputValue}
        placeholder="Reply to this review"
        onChange={(e) => setInputValue(e.target.value)}
      ></Message>
      <Button onClick={handleBtnClick}>
        <IconImg src={messageIcon} alt="messageIcon" />
      </Button>
    </Box>
  );
}

export default MessageBox;
