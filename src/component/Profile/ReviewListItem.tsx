import { ToggleSwitch } from "./ProfileTab";
import {
  CommentCard,
  ProfileReviewsCard,
} from "../ReviewComponent/ReviewCards";
import EmptyDisplay from "../EmptyDisplay";
import { useNavigate } from "react-router-dom";
import ShopCard from "../shop/ShopCard";
import { EmptyBox, Container, GrayBorderBox } from "./style/reviewListItem";
import { SearchResult, UserCommentData } from "../../type/type";
import Placeholder from "../../pages/Profile/Placeholder";

function ReviewListItem({
  loading,
  userId,
  collectList,
  userComment,
  setUserCommit,
}: {
  loading: boolean;
  userId: number;
  collectList: SearchResult[] | null;
  userComment: UserCommentData | null;
  setUserCommit: React.Dispatch<React.SetStateAction<UserCommentData | null>>;
}) {
  const navigator = useNavigate();
  //刪除評論
  const handleRemoveReply = (replyId: number) => {
    setUserCommit((prevReplies) => {
      if (!prevReplies) return null;
      const updatedReplies = prevReplies.comment!.filter(
        (comment) => comment.commentId !== replyId
      );
      return {
        ...prevReplies,
        comment: updatedReplies, // 更新 comment
      };
    });
  };
  const options = ["Reviews", "Following", "Bookmarks"];
  const content = {
    Reviews: (
      <GrayBorderBox>
        {loading ? (
          <Placeholder />
        ) : (
          <>
            {userComment?.comment ? (
              userComment?.comment.map((comment, index) => {
                const key = `review${index}${comment.commentId}`;
                return (
                  <ProfileReviewsCard
                    userId={userId}
                    key={key}
                    data={comment}
                    handleRemoveReply={handleRemoveReply}
                  />
                );
              })
            ) : (
              <EmptyBox>
                <EmptyDisplay
                  $isIconDark={true}
                  webIcon={true}
                  content="No review left yet"
                  btnText="Explore places"
                  onClick={() => {
                    navigator("/");
                  }}
                />
              </EmptyBox>
            )}
          </>
        )}
      </GrayBorderBox>
    ),
    Following: (
      <GrayBorderBox>
        {userComment?.following ? (
          userComment?.following.map((comment, index) => {
            const key = `following${index}${comment.commentId}`;
            return <CommentCard key={key} data={comment} />;
          })
        ) : (
          <EmptyBox>
            <EmptyDisplay
              $isIconDark={true}
              webIcon={false}
              iconStyle="local_fire_department"
              content="There are no people following"
              btnText="View popular threads"
              onClick={() => {
                navigator("/");
              }}
            />
          </EmptyBox>
        )}
      </GrayBorderBox>
    ),
    Bookmarks: (
      <Container>
        {collectList ? (
          collectList.map((shop) => {
            const shopKey = `${shop.id}-${shop.displayName}`;
            return <ShopCard key={shopKey} data={shop} />;
          })
        ) : (
          <EmptyBox>
            <EmptyDisplay
              $isIconDark={true}
              webIcon={false}
              iconStyle="local_fire_department"
              content="No bookmarks"
              btnText="View popular places"
              onClick={() => {
                navigator("/search");
              }}
            />
          </EmptyBox>
        )}
      </Container>
    ),
  };

  return <ToggleSwitch inputList={options} contentMapping={content} />;
}

export default ReviewListItem;
