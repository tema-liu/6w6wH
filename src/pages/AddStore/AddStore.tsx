import { useState } from "react";
import Header from "../../component/layout/header";
import { Wrapper } from "../../component/layout/LayoutComponents";
import SelectLocation from "./SelectLocation";
import { Location } from "../../type/type";

function AddStore() {
  const [selectLocation, setSelectLocation] = useState<Location | null>(null);
  console.log(selectLocation);

  return (
    <Wrapper>
      <Header isBefore={false} title={"Add friendly store"} />
      {!selectLocation && (
        <SelectLocation
          selectLocation={selectLocation}
          setSelectLocation={setSelectLocation}
        />
      )}
    </Wrapper>
  );
}

export default AddStore;
