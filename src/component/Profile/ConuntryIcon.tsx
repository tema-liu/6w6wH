import { useState } from "react";
import { IconImg } from "../Layout/LayoutComponents";
import { countryImgList } from "./data/contry";

type countryProps = {
  country: keyof typeof countryImgList; // 限制 country 為 countryList 的鍵值
};

function Country({ country }: countryProps) {
  const [isWindowOpen, setWindowOpen] = useState(false);

  return (
    <>
      <IconImg
        onClick={() => {
          setWindowOpen(!isWindowOpen);
        }}
        src={countryImgList[country]}
        alt={country}
      />
    </>
  );
}

export default Country;
