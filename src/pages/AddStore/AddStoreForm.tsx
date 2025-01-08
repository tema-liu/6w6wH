import { PrimaryBtn } from "../../component/button/PrimaryBtn";
import TagCheckBox from "../../component/TagCheckBox";
import { useForm } from "react-hook-form";
import { AddPlaceList } from "../../type/type";
import { TagsField } from "../../type/formType";
import { TagsContent } from "./style/addStoreForm";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchTagsData } from "../../redux/tagList/slice";

function AddStoreForm({ ...props }: AddPlaceList) {
  const dispatch: Dispatch = useDispatch();
  const categoryTags = useSelector(
    (state: RootState) => state.tags.categoryTags
  );
  const friendlyTags = useSelector(
    (state: RootState) => state.tags.friendlyTags
  );
  const errorMessage = useSelector((state: RootState) => state.tags.error);

  const { register, handleSubmit, watch } = useForm<TagsField>({
    defaultValues: {
      tags: [],
    },
  });

  //避免重複調用 API
  useEffect(() => {
    if (!categoryTags || !friendlyTags) {
      dispatch(fetchTagsData());
    }
  }, [dispatch, categoryTags, friendlyTags]);
  if (errorMessage) {
    console.log(errorMessage);
  }

  //監聽tags是否有內容
  const haveTags = watch("tags");

  const onSubmit = (data: TagsField) => {
    const transformedData = data.tags.map((tag) => Number(tag)); // 自定義數據轉換
    const completeData = { ...props, tags: transformedData }; // 合併 props 和表單數據，ＡＰＩ請送出這筆資料
    console.log(completeData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TagsContent>
        <TagCheckBox
          required={true}
          register={register}
          title="Category"
          tags={categoryTags || []}
        />
        <TagCheckBox
          required={true}
          register={register}
          title="Friendly"
          tags={friendlyTags || []}
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
