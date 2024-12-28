import { CommentCard } from "../../component/reviewComponent/ReviewCards";
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
