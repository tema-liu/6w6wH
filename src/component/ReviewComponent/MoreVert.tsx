import styled from "styled-components";
import { useState } from "react";
import { Icon } from "../layout/LayoutComponents";
import { GeneralPopupModal, PopupModal } from "../popupModel//PopupModal";
import ModelInfo from "../popupModel/ModelInfo";
import TextAreaInfo from "../popupModel/TextAreaInfo";

const IconImg = styled(Icon)`
  margin: 12px 8px;
  color: ${({ theme }) => theme.colors.gray600};
`;

type moreProps = {
  reviewOrReply: "review" | "reply"; //判斷是評論或留言
  userID: string;
  activeUserID?: string; //登入者的ID
};

function MoreVert({
  reviewOrReply,
  activeUserID = "isAnonymous",
  userID,
}: moreProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [window, setWindow] = useState<"delete" | "report" | null>(null);

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
              setWindow(null);
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
                userID === activeUserID
                  ? `Delete ${reviewOrReply}`
                  : "Report Inappropriate Content"
              }
              btnClick={() => {
                setMenuOpen(!menuOpen);
                if (userID === activeUserID) {
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
