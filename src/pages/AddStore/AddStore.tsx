import { useEffect, useState } from "react";
import Header from "../../component/layout/header";
import { Wrapper } from "../../component/layout/LayoutComponents";
import SelectLocation from "./SelectLocation";
import { Location } from "../../type/type";
import GoogleMap from "./GoogleMap";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import useAuthVerify from "../../hooks/useAuthVerify ";

function AddStore() {
  const [selectLocation, setSelectLocation] = useState<Location | null>(null);
  // const token = useSelector((state: RootState) => state.auth.token);
  // const authVerify = useAuthVerify(token);
  // useEffect(() => {
  //   const verify = async () => {
  //     const isAuthenticated = await authVerify();
  //     if (!isAuthenticated) {
  //       return;
  //     }
  //     console.log(isAuthenticated);
  //   };

  //   verify(); // 在 useEffect 中執行 verify
  // }, []);

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
