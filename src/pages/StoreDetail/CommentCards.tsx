import { Comment } from "../../type/type";
import {
  FilterColumn,
  FilterButtons,
  FilterContainer,
} from "./style/storeDetail";
import { useState } from "react";
import { CommentCard } from "../../component/reviewComponent/ReviewCards";
import { Container } from "./style/commentCards";

function CommentCards({ data }: { data: Comment[] }) {
  const [filterValue, setFilterValue] = useState("popular");

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue = e.target.value;
    setFilterValue(selectValue);
  };

  const latestList = () => {
    if (data.length <= 1) {
      return data; // 如果只有一個元素，直接返回原始陣列
    }
    return [...data].sort(
      (a, b) => b!.createTime.getTime() - a!.createTime.getTime()
    );
  };
  const repliesList = () => {
    if ([...data].length <= 1) {
      return [...data]; // 如果只有一個元素，直接返回原始陣列
    }
    return [...data].sort((a, b) => {
      const replyCountA = a?.replyCount ?? 0; // 如果 a 或 replyCount 是 undefined，默認為 0
      const replyCountB = b?.replyCount ?? 0; // 同上
      return replyCountB - replyCountA;
    });
  };

  const RenderList = () => {
    let listToRender: Comment[] = [];

    switch (filterValue) {
      case "popular":
        listToRender = data;
        break;
      case "latest":
        listToRender = latestList();
        break;
      case "replies":
        listToRender = repliesList();
        break;
    }
    return listToRender.map((comment) => (
      <CommentCard key={comment?.commentId} data={comment} />
    ));
  };

  return (
    <>
      <FilterColumn>
        <FilterContainer>
          <FilterButtons
            onChange={handleFilterChange}
            name="filter"
            id="filter"
          >
            <option value="popular">Popular</option>
            <option value="latest">Latest</option>
            <option value="replies">Replies</option>
          </FilterButtons>
        </FilterContainer>
      </FilterColumn>
      <Container>
        <RenderList />
      </Container>
    </>
  );
}

export default CommentCards;
