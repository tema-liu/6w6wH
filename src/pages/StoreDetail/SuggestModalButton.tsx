import { useState } from "react";
import Pure from "../../component/ReviewComponent/Pure";
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
        <Pure
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
