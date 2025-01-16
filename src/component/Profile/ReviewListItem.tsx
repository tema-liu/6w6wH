import { ToggleSwitch } from "./ProfileTab";
import {
  CommentCard,
  ProfileReviewsCard,
} from "../reviewComponent/ReviewCards";
import EmptyDisplay from "../EmptyDisplay";
import { useNavigate } from "react-router-dom";
import ShopCard from "../shop/ShopCard";
import { EmptyBox, Container, GrayBorderBox } from "./style/reviewListItem";
import { SearchResult } from "../../type/type";

function ReviewListItem({
  collectList,
}: {
  collectList: SearchResult[] | null;
}) {
  const navigator = useNavigate();

  const options = ["Reviews", "Following", "Bookmarks"];
  const content = {
    Reviews: (
      <GrayBorderBox>
        <ProfileReviewsCard />
        {/* <EmptyBox>
          <EmptyDisplay
            $isIconDark={true}
            webIcon={true}
            content="No review left yet"
            btnText="Explore places"
            btnClick={() => {
              navigator("/popular");
            }}
          />
        </EmptyBox> */}
      </GrayBorderBox>
    ),
    Following: (
      <GrayBorderBox>
        {/* <CommentCard /> */}
        {/* <EmptyBox>
          <EmptyDisplay
            $isIconDark={true}
            webIcon={false}
            iconStyle="local_fire_department"
            content="There are no people following"
            btnText="View popular threads"
            onClick={() => {
              navigator("/popular");
            }}
          />
        </EmptyBox> */}
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
