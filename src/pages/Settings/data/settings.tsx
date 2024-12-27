import LangSelect from "../LangSelect";
import Toggle from "../../../component/Toggle";

export const itemList = [
  {
    iconName: "language",
    title: "Languages",
    button: <LangSelect />,
  },
  {
    iconName: "dark_mode",
    title: "Dark mode",
    button: <Toggle />,
  },
];
