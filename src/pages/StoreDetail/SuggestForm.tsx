import { checkBoxList } from "./data/suggestForm";
import {
  InputCheck,
  Input,
  InputText,
  Form,
  Label,
  TextAreaTitle,
  Button,
} from "./style/suggestForm";

function SuggestForm() {
  return (
    <Form>
      {checkBoxList.map((item) => {
        return (
          <InputCheck>
            <Input id={item.idFor} type="checkbox" />
            <Label htmlFor={item.idFor}>{item.errorText}</Label>
          </InputCheck>
        );
      })}
      <TextAreaTitle>Any suggest?</TextAreaTitle>
      <InputText placeholder="Write down your suggestions at this place" />
      <Button type="button">Submit</Button>
    </Form>
  );
}

export default SuggestForm;
