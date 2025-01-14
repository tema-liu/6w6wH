import styled from "styled-components";
import { useState } from "react";
import { Icon } from "../layout/LayoutComponents";
import { GeneralPopupModal, PopupModal } from "../popupModel//PopupModal";
import ModelInfo from "../popupModel/ModelInfo";
import TextAreaInfo from "../popupModel/TextAreaInfo";
import { postCommentDelete } from "../../apis/postCommentDelete";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import useAuthVerify from "../../hooks/useAuthVerify ";
import { useNavigate } from "react-router-dom";
import { postReplyDelete } from "../../apis/postReplyDelete";

const IconImg = styled(Icon)`
  margin: 12px 8px;
  color: ${({ theme }) => theme.colors.gray600};
`;

type moreProps = {
  id: number;
  reviewOrReply: "review" | "reply"; //判斷是評論或留言
  userId: number;
  onRemoveReply?: (success: boolean, reply: number) => void;
};

function MoreVert({ id, reviewOrReply, userId, onRemoveReply }: moreProps) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [window, setWindow] = useState<"delete" | "report" | null>(null);
  const token = useSelector((state: RootState) => state.auth.token);
  const loginUserId = useSelector((state: RootState) => state.auth.userId);
  const authVerify = useAuthVerify(token);

  const handleDelete = async () => {
    try {
      // 驗證是否登入
      const isAuthenticated = await authVerify();
      if (!isAuthenticated) {
        return; // 如果驗證失敗結束函式
      }

      // 驗證成功後執行刪除評論
      let deleteRes;
      if (reviewOrReply === "review") {
        deleteRes = await postCommentDelete(id, token!);
        if (deleteRes && deleteRes.statusCode === 200) {
          setWindow(null); // 關閉彈窗或清除狀態
          navigate(-1); // 返回上一頁
        }
      } else if (reviewOrReply === "reply") {
        deleteRes = await postReplyDelete(id, token!);
        if (onRemoveReply) {
          onRemoveReply(true, id); // 只有當 onRemoveReply 存在時才調用
        }
        console.log(deleteRes);
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
              handleDelete();
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
            reportId={id}
            reviewOrReply={reviewOrReply}
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
                userId === loginUserId
                  ? `Delete ${reviewOrReply}`
                  : "Report Inappropriate Content"
              }
              btnClick={() => {
                setMenuOpen(!menuOpen);
                if (userId === loginUserId) {
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
