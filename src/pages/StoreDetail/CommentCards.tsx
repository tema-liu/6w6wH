import styled from "styled-components";
import { CommentCard } from "../../component/ReviewCards";
import { Comment } from "../../type/type";
import { FilterColumn, FilterContainer, FilterButtons } from "./styled";
import constructWithOptions from "styled-components/dist/constructors/constructWithOptions";
import { useState } from "react";
const Container = styled.div`
  border-radius: 0 0 32px 32px;
  background-color: ${({ theme }) => theme.colors.light};
  > div + div {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;

function CommentCards({ data }: { data: Comment[] }) {
  const [reviewList, setReviewList] = useState(data);
  const [filterValue, setFilterValue] = useState("popular");

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue = e.target.value;
    setFilterValue(selectValue);
  };

  const latestList = () => {
    if (reviewList.length <= 1) {
      return reviewList; // 如果只有一個元素，直接返回原始陣列
    }
    return [...reviewList].sort(
      (a, b) => b!.postedAt.getTime() - a!.postedAt.getTime()
    );
  };
  const repliesList = () => {
    if ([...reviewList].length <= 1) {
      return [...reviewList]; // 如果只有一個元素，直接返回原始陣列
    }
    return [...reviewList].sort((a, b) => {
      const replyCountA = a?.replyCount ?? 0; // 如果 a 或 replyCount 是 undefined，默認為 0
      const replyCountB = b?.replyCount ?? 0; // 同上
      return replyCountB - replyCountA;
    });
  };

  const RenderList = () => {
    let listToRender: Comment[] = [];

    switch (filterValue) {
      case "popular":
        listToRender = reviewList;
        break;
      case "latest":
        listToRender = latestList();
        break;
      case "replies":
        listToRender = repliesList();
        break;
    }
    return listToRender.map((comment) => (
      <CommentCard key={comment?.commentID} data={comment} />
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
