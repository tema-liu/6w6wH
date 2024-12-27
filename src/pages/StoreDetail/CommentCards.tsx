import { CommentCard } from "../../component/ReviewComponent/ReviewCards";
import { Container } from "./style/commentCards";

function CommentCards() {
  return (
    <>
      <Container>
        <CommentCard />
        <CommentCard />
      </Container>
    </>
  );
}

export default CommentCards;
