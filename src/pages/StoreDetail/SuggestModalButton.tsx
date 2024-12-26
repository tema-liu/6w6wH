import { useState } from "react";
import { PopupModal } from "../../component/PopupModel/PopupModal";
import SuggestForm from "./SuggestForm";
import { SuggestBtn, PrIcon } from "./styled";

function SuggestModalButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <>
      <SuggestBtn onClick={toggleModal}>
        <PrIcon className="material-symbols-outlined">edit</PrIcon>
        Suggest an edit
      </SuggestBtn>
      {isModalOpen && (
        <PopupModal
          canActive={true}
          isActive={isModalOpen}
          text="Suggest an edit"
          content={<SuggestForm />}
          onClose={toggleModal} // 讓遮罩層可以切換關閉
        />
      )}
    </>
  );
}

export default SuggestModalButton;
