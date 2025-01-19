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
}: {
  loading: boolean;
  userId: number;
  collectList: SearchResult[] | null;
  userComment: UserCommentData | null;
}) {
  const navigator = useNavigate();

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
                return (
                  <ProfileReviewsCard
                    userId={userId}
                    key={index + comment.commentId}
                    data={comment}
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
            return <CommentCard key={index + comment.userId} data={comment} />;
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
