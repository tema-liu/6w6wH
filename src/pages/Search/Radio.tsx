import styled from "styled-components";

const Input = styled.input`
  @keyframes changeBackground {
    0% {
      background-color: ${({ theme }) => theme.colors.container1};
    }
    100% {
      background-color: white;
    }
  }

  appearance: none;
  display: none;
  height: 0;
  width: 0;

  &:checked + label {
    box-shadow: 8px 0px 0px #ff6063 inset, 0px 0px 4px 0px #00000033,
      0px 0px 8px 0px #0000001a;
    animation: changeBackground 1s forwards; /* 設置動畫 */
    span {
      color: ${({ theme }) => theme.colors.gray900};
    }
  }
  //取消後動畫
  &:not(:checked) + label {
    span {
      transition: color 0.25s ease;
    }
  }
`;

const MoonBtn = styled.label`
  padding: 12px 16px;
  height: 46px;
  max-width: 100%;
  border: 0;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  border-radius: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.41px;
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

type CheckProps = {
  content: string;
  isCheck: boolean;
  onChange: () => void;
};

function Radio({ content, isCheck, onChange }: CheckProps) {
  return (
    <>
      <Input
        type="radio"
        id={content}
        name="location"
        checked={isCheck}
        onChange={onChange}
      />
      <MoonBtn htmlFor={content}>
        <span>{content}</span>
      </MoonBtn>
    </>
  );
}

export default Radio;
