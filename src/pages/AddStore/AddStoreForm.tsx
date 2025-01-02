import { PrimaryBtn } from "../../component/button/PrimaryBtn";
import TagCheckBox from "../../component/TagCheckBox";
import { useForm } from "react-hook-form";
import { AddPlaceList } from "../../type/type";
import { FormTags } from "../../type/formType";
import { TagsContent } from "./style/addStoreForm";
const category = [
  { id: 1, name: "Food" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Services" },
  { id: 4, name: "Traffic" },
  { id: 5, name: "Leisure" },
  { id: 6, name: "Medical" },
];

const friendly = [
  { id: 7, name: "Friendly" },
  { id: 8, name: "Halal" },
  { id: 9, name: "Multilingual" },
  { id: 10, name: "Communication aids" },
  { id: 11, name: "online shopping" },
];

function AddStoreForm({ ...props }: AddPlaceList) {
  console.log(props);
  const { register, handleSubmit, watch } = useForm<FormTags>({
    defaultValues: {
      tags: [],
    },
  });
  //監聽tags是否有內容
  const haveTags = watch("tags");

  const onSubmit = (data: FormTags) => {
    const transformedData = data.tags.map(Number); // 自定義數據轉換
    const completeData = { ...props, tags: transformedData }; // 合併 props 和表單數據，ＡＰＩ請送出這筆資料
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TagsContent>
        <TagCheckBox
          required={true}
          register={register}
          title="Category"
          tags={category}
        />
        <TagCheckBox
          required={true}
          register={register}
          title="Friendly"
          tags={friendly}
        />
      </TagsContent>
      <PrimaryBtn
        $opacity={haveTags.length > 0 ? 1 : 0.5}
        $margin="16px 0"
        iconName="add_location"
        content="submit"
      />
    </form>
  );
}
export default AddStoreForm;
