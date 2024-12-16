import styled from "styled-components";
import { CommentCard } from "../../component/ReviewCards";
import { Comment } from "../../type/type";
import { FilterColumn, FilterContainer, FilterButtons } from "./styled";
const Container = styled.div`
  border-radius: 0 0 32px 32px;
  background-color: ${({ theme }) => theme.colors.light};
  > div + div {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;

function CommentCards({ data }: { data: Comment[] }) {
  return (
    <>
      <FilterColumn>
        <FilterContainer>
          <FilterButtons name="filter" id="filter">
            <option value="popular">Popular</option>
            <option value="latest">Latest</option>
            <option value="Replies">Replies</option>
          </FilterButtons>
        </FilterContainer>
      </FilterColumn>
      <Container>
        {data.map((comment) => (
          <CommentCard key={comment?.commentID} data={comment} />
        ))}
      </Container>
    </>
  );
}

export default CommentCards;
