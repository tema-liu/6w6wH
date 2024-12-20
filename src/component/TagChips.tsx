import styled from "styled-components";
import closeIcon from "../assets/close.png";

const Content = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
`;
const TagChip = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  background: ${({ theme }) => theme.colors.light};
  max-width: 100%;

  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;

  // 左側紅色條
  &::before {
    flex-shrink: 0;
    content: "";
    width: 8px;
    height: 100%;
    background: ${({ theme }) => theme.colors.container1};
    margin-right: 8px;
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  flex-shrink: 0;
  padding: 16px 16px 16px 8px;
  cursor: pointer;
  img {
    width: 14px;
    height: 14px;
  }
`;

interface TagChipProps {
  label: string;
  onRemove?: () => void;
}

export const TagChips = ({ label, onRemove }: TagChipProps) => (
  <TagChip>
    <Content>{label}</Content>
    {/* 帶入刪除函式 */}
    <CloseButton onClick={onRemove}>
      <img src={closeIcon} alt="close" />
    </CloseButton>
  </TagChip>
);
