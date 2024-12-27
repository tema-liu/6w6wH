import { languages } from "./data/langSelect";
import { Select, SelectBox } from "./style/langSelect";

function LangSelect() {
  const handleBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    // 取消焦点
    event.target.blur();
  };

  return (
    <SelectBox htmlFor="lang">
      <Select id="lang" onChange={handleBlur}>
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
