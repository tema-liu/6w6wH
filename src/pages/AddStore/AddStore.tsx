import { useState } from "react";
import Header from "../../component/layout/header";
import { Wrapper } from "../../component/layout/LayoutComponents";
import SelectLocation from "./SelectLocation";
import { Location } from "../../type/type";
import GoogleMap from "./GoogleMap";

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

      {selectLocation && <GoogleMap location={selectLocation} />}
    </Wrapper>
  );
}

export default AddStore;
