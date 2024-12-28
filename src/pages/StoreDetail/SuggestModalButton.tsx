import { useState } from "react";
import { PopupModal } from "../../component/PopupModel/PopupModal";
import SuggestForm from "./SuggestForm";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";

function SuggestModalButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <>
      <PrimaryBtn
        content="Suggest an edit"
        $iconColor="primary"
        $bgColor="gray100"
        iconName="edit"
        $margin="0 0 24px"
        onClick={toggleModal}
      />
      {isModalOpen && (
        <PopupModal
          canActive={true}
          isActive={isModalOpen}
          text="Suggest an edit"
          content={<SuggestForm windowOpen={toggleModal} />}
          onClose={toggleModal} // 讓遮罩層可以切換關閉
        />
      )}
    </>
  );
}

export default SuggestModalButton;
