import styled from "styled-components";
import { useState } from "react";
import { CommentReply } from "../../type/formType";
import { postCommentReply } from "../../apis/postCommentReply";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { Reply } from "../../type/type";
import useAuthVerify from "../../hooks/useAuthVerify ";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";

const Box = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  padding-top: 8px;
  padding-bottom: 16px;
  bottom: 0;
  padding: 8px 8px 16px 8px;
`;

const Message = styled.input`
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.41px;
  margin: 0 8px 0 0;
  padding: 12px 16px 14px 16px;
  vertical-align: top;
  flex: 1;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  background-color: ${({ theme }) => theme.colors.light};
`;

type moreProps = {
  userId: number;
  commentId: number;
  onAddReply: (reply: Reply) => void;
};

function MessageBox({ userId, commentId, onAddReply }: moreProps) {
  const [inputValue, setInputValue] = useState("");
  const [isSubmit, setSubmit] = useState(false);
  const reply: CommentReply = {
    userId: userId,
    commentId: commentId,
    comment: inputValue,
  };
  const token = useSelector((state: RootState) => state.auth.token);
  const authVerify = useAuthVerify(token);
  const handleBtnClick = async () => {
    console.log("123");
    setSubmit(true);
    if (inputValue.trim()) {
      // 驗證是否登入
      const isAuthenticated = await authVerify();
      if (!isAuthenticated) {
        return; // 如果驗證失敗結束函式
      }
      console.log(reply);
      const res = await postCommentReply(reply, token!);
      if (res.data) {
        onAddReply(res.data);
      }
      setInputValue(""); //清空輸入值
    } else {
      alert("Please do not input blank spaces.");
    }
    setSubmit(false);
  };

  return (
    <Box>
      <Message
        value={inputValue}
        placeholder="Reply to this review"
        onChange={(e) => setInputValue(e.target.value)}
      ></Message>
      <PrimaryBtn
        disabled={isSubmit}
        onClick={handleBtnClick}
        $bgColor={
          !isSubmit && inputValue.trim() !== "" ? "outline3" : "gray400"
        }
        iconName="add_comment"
        $Width="fit-content"
        $borderRadius={8}
        $padding="12px"
        $boxShadow=" 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a"
      />
    </Box>
  );
}

export default MessageBox;
