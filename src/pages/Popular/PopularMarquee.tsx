import Marquee from "react-fast-marquee";
import {
  TagChip,
  Content,
  MarqueeContainer,
  TagList,
} from "./style/popularMarquee";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../utils/redux/store";
import { useEffect } from "react";
import { fetchTagsData } from "../../utils/redux/tagList/slice";
import { useNavigate } from "react-router-dom";

type TagChipProps = {
  id: number;
  label: string;
};

const TagChips = ({ id, label }: TagChipProps) => {
  const navigate = useNavigate();
  const newParams = new URLSearchParams({
    tags: String(id),
  });

  return (
    <TagChip
      onClick={() => {
        navigate(`/storeList?${newParams.toString()}`);
      }}
    >
      <Content>{label}</Content>
    </TagChip>
  );
};

function PopularMarquee({ tags }: { tags: number[] }) {
  const dispatch: Dispatch = useDispatch();
  const categoryTags = useSelector(
    (state: RootState) => state.tags.categoryTags
  );
  const friendlyTags = useSelector(
    (state: RootState) => state.tags.friendlyTags
  );
  //取得搜尋的tag
  const searchTags = () => {
    const tagsList = (categoryTags || [])?.concat(friendlyTags || []);
    return tags
      .map((tagId) => tagsList.find((item) => item.id === tagId))
      .filter((item) => item !== undefined); // 過濾掉找不到的項目
  };
  const popularTags = searchTags();

  //避免重複調用 API
  useEffect(() => {
    if (!categoryTags || !friendlyTags) {
      dispatch(fetchTagsData());
    }
  }, [dispatch, categoryTags, friendlyTags]);

  return (
    <MarqueeContainer>
      <Marquee pauseOnClick={true} style={{ gap: "8px" }}>
        <TagList>
          {popularTags.map((tag) => {
            return <TagChips id={tag.id} key={tag.name} label={tag.name} />;
          })}
        </TagList>
      </Marquee>
    </MarqueeContainer>
  );
}

export default PopularMarquee;
