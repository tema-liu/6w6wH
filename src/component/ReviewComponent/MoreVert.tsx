import styled from "styled-components";
import { useState } from "react";
import { Icon } from "../layout/LayoutComponents";
import { GeneralPopupModal, PopupModal } from "../popupModel//PopupModal";
import ModelInfo from "../popupModel/ModelInfo";
import TextAreaInfo from "../popupModel/TextAreaInfo";
import { postCommentDelete } from "../../apis/postCommentDelete";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useAuthVerify from "../../hooks/useAuthVerify ";
import { useNavigate } from "react-router-dom";

const IconImg = styled(Icon)`
  margin: 12px 8px;
  color: ${({ theme }) => theme.colors.gray600};
`;

type moreProps = {
  commentId: number;
  reviewOrReply: "review" | "reply"; //判斷是評論或留言
  userID: number;
  loginUserId: number; //登入者的ID
};

function MoreVert({
  commentId,
  reviewOrReply,
  loginUserId,
  userID,
}: moreProps) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [window, setWindow] = useState<"delete" | "report" | null>(null);
  const token = useSelector((state: RootState) => state.auth.token);
  const authVerify = useAuthVerify(token);

  const handleCommentDelete = async () => {
    try {
      // 驗證是否登入
      const isAuthenticated = await authVerify();
      if (!isAuthenticated) {
        return; // 如果驗證失敗結束函式
      }

      // 驗證成功後執行刪除評論
      const deleteRes = await postCommentDelete(commentId, token!);
      if (deleteRes.statusCode === 200) {
        setWindow(null); // 關閉彈窗或清除狀態
        navigate(-1); // 返回上一頁
      }
    } catch (error) {
      console.error("刪除評論時發生錯誤", error);
    }
  };

  const windowList = {
    delete: (
      <GeneralPopupModal
        content={
          <ModelInfo
            isBtnDanger={true}
            title={`Delete your ${reviewOrReply}`}
            text="This operation is irreversible"
            btnText="Delete"
            btnClick={() => {
              handleCommentDelete();
            }}
            cancelClick={() => {
              setWindow(null);
            }}
          />
        }
        canActive={true}
        isActive={window === "delete"}
        onClose={() => {
          setWindow(null);
        }}
      />
    ),
    report: (
      <PopupModal
        isActive={window === "report"}
        canActive={true}
        content={
          <TextAreaInfo
            idFor="report"
            title="Describe the reason for inappropriateness."
            placeholder="Describe the reason for inappropriateness."
            closeWindow={() => {
              setWindow(null);
            }}
          />
        }
        text="Report Inappropriate Content"
        onClose={() => {
          setWindow(null);
        }}
      />
    ),
  };

  return (
    <>
      <IconImg
        $isPointer={true}
        onClick={() => setMenuOpen(!menuOpen)}
        className="material-symbols-outlined"
      >
        more_vert
      </IconImg>
      {/* 如果當前userID是此留言UserID則顯示可刪除 */}
      {menuOpen && (
        <GeneralPopupModal
          content={
            <ModelInfo
              isBtnDanger={false}
              btnText={
                userID === loginUserId
                  ? `Delete ${reviewOrReply}`
                  : "Report Inappropriate Content"
              }
              btnClick={() => {
                setMenuOpen(!menuOpen);
                if (userID === loginUserId) {
                  setMenuOpen(!menuOpen);
                  setWindow("delete");
                } else {
                  setMenuOpen(!menuOpen);
                  setWindow("report");
                }
              }}
              cancelClick={() => {
                setMenuOpen(!menuOpen);
              }}
            />
          }
          canActive={true}
          isActive={menuOpen}
          onClose={() => {
            setMenuOpen(!menuOpen);
          }}
        />
      )}
      {/* 顯示刪除或檢舉視窗 */}
      {window && windowList[window]}
    </>
  );
}

export default MoreVert;
