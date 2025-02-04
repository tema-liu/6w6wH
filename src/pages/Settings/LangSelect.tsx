import { useNavigate } from "react-router-dom";
import { languages } from "./data/langSelect";
import { Select, SelectBox } from "./style/langSelect";
import i18n from "../../utils/i18n/i18n";

function LangSelect() {
  const navigate = useNavigate();
  const lang = localStorage.getItem("i18nextLng");
  const handleBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    // 取消焦点
    event.target.blur();
    if (lang !== event.target.value) {
      localStorage.setItem("i18nextLng", event.target.value); //重新預設local的語言
      i18n.changeLanguage(event.target.value); //更改語言
      navigate("/");
    }
  };

  return (
    <SelectBox htmlFor="lang">
      <Select value={lang ?? "en"} id="lang" onChange={handleBlur}>
        {languages.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </Select>
    </SelectBox>
  );
}

export default LangSelect;
