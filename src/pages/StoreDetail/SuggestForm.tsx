import styled from "styled-components";

const InputCheck = styled.div`
  display: flex;
  padding: 8px 16px;
  column-gap: 8px;
  align-items: center;
`;
const Input = styled.input`
  position: relative;
  appearance: none;
  border: 3px solid ${({ theme }) => theme.colors.gray900};
  width: 18px;
  height: 18px;
  border-radius: 2px;

  &:checked {
    background-color: ${({ theme }) => theme.colors.light};
    border-color: ${({ theme }) => theme.colors.gray800};
  }

  // 添加勾選符號
  &:checked::after {
    content: "✔"; // 或者使用其他圖標
    position: absolute;
    top: -1px;
    left: -1px;
    font-size: 12px;
    line-height: 1;
    color: ${({ theme }) => theme.colors.gray800};
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray900};
`;
const Form = styled.form`
  div + div {
    margin-top: 8px;
  }
`;
const InputText = styled.textarea`
  resize: none;
  width: 100%;
  border-radius: 8px;
  height: 66px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  padding: 12px 16px;
  margin-top: 8px;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.41px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  border-radius: 8px;
  padding: 12px 0;
  margin-top: 24px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.outline2};
  opacity: 0.5;
  &:active {
    opacity: 1;
  }
`;
const TextAreaTitle = styled.p`
  padding-top: 16px;
`;

function SuggestForm() {
  return (
    <Form>
      <InputCheck>
        <Input id="StoreNameExists" type="checkbox" />
        <Label htmlFor="StoreNameExists">Store name exists</Label>
      </InputCheck>
      <InputCheck>
        <Input id="InvalidPhoneFormat" type="checkbox" />
        <Label htmlFor="InvalidPhoneFormat">Invalid phone format</Label>
      </InputCheck>
      <InputCheck>
        <Input id="InvalidAddressFormat" type="checkbox" />
        <Label htmlFor="InvalidAddressFormat">Invalid address format</Label>
      </InputCheck>
      <InputCheck>
        <Input id="InvalidBusinessHours" type="checkbox" />
        <Label htmlFor="InvalidBusinessHours">Invalid business hours</Label>
      </InputCheck>
      <TextAreaTitle>Any suggest?</TextAreaTitle>
      <InputText placeholder="Write down your suggestions at this place" />
      <Button type="button">Submit</Button>
    </Form>
  );
}

export default SuggestForm;
