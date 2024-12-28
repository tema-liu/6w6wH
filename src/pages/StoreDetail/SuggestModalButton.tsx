import { useState } from "react";
import { PopupModal } from "../../component/PopupModel/PopupModal";
import SuggestForm from "./SuggestForm";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import GoodJobWindow from "../../component/PopupModel/GoodJobWindow";

function SuggestModalButton() {
  const [modals, setModals] = useState({
    isModalOpen: false,
    isGoodJobWindowOpen: false,
  });

  const toggleModal = (modalName: keyof typeof modals) => {
    setModals((prev) => ({
      ...prev,
      [modalName]: !prev[modalName],
    }));
  };
  return (
    <>
      <PrimaryBtn
        content="Suggest an edit"
        $iconColor="primary"
        $bgColor="gray100"
        iconName="edit"
        $margin="0 0 24px"
        onClick={() => {
          toggleModal("isModalOpen");
        }}
      />
      {modals["isModalOpen"] && (
        <PopupModal
          canActive={true}
          isActive={modals["isModalOpen"]}
          text="Suggest an edit"
          content={
            <SuggestForm
              windowOpen={() => {
                toggleModal("isModalOpen");
                toggleModal("isGoodJobWindowOpen");
              }}
            />
          }
          onClose={() => {
            toggleModal("isModalOpen");
          }} // 讓遮罩層可以切換關閉
        />
      )}
      {modals["isGoodJobWindowOpen"] && (
        <GoodJobWindow
          isActive={modals["isGoodJobWindowOpen"]}
          onClose={() => {
            toggleModal("isGoodJobWindowOpen");
          }}
        />
      )}
    </>
  );
}

export default SuggestModalButton;
