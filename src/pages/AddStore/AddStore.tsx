import Header from "../../component/layout/header";
import { Wrapper } from "../../component/layout/LayoutComponents";
import SelectLocation from "./SelectLocation";

function AddStore() {
  return (
    <Wrapper>
      <Header isBefore={false} title={"Add friendly store"} />
      <SelectLocation />
    </Wrapper>
  );
}

export default AddStore;
