import styled from "styled-components";
import { CommentCard } from "../../component/ReviewCards";
import { Comment } from "../../type/type";
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
      <Container>
        {data.map((comment) => (
          <CommentCard key={comment?.commentID} data={comment} />
        ))}
      </Container>
    </>
  );
}

export default CommentCards;
