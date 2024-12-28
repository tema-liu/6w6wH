import styled from "styled-components";
import { ToggleSwitch } from "./ProfileTab";
import {
  CommentCard,
  ProfileReviewsCard,
} from "../reviewComponent/ReviewCards";
import EmptyDisplay from "../EmptyDisplay";
import { useNavigate } from "react-router-dom";
import ShopCard from "../shop/ShopCard";
import { ContainerPd16 } from "../layout/LayoutComponents";

const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: calc(100dvh - 415px); /* 扣除 header 和 footer 高度 */
`;

const GrayBorderBox = styled.div`
  > div + div {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px;
`;

function ReviewListItem() {
  const navigator = useNavigate();

  const options = ["Reviews", "Following", "Bookmarks"];
  const content = {
    Reviews: (
      <GrayBorderBox>
        <ProfileReviewsCard />
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
        <CommentCard />
        <CommentCard />
        <CommentCard />
        {/* <EmptyBox>
          <EmptyDisplay
            $isIconDark={true}
            webIcon={false}
            iconStyle="local_fire_department"
            content="There are no people following"
            btnText="View popular threads"
            btnClick={() => {
              navigator("/popular");
            }}
          />
        </EmptyBox> */}
      </GrayBorderBox>
    ),
    Bookmarks: (
      <Container>
        <ShopCard />
        {/* <EmptyBox>
          <EmptyDisplay
            $isIconDark={true}
            webIcon={false}
            iconStyle="local_fire_department"
            content="No bookmarks"
            btnText="View popular places"
            btnClick={() => {
              navigator("/search");
            }}
          />
        </EmptyBox> */}
      </Container>
    ),
  };

  return <ToggleSwitch inputList={options} contentMapping={content} />;
}

export default ReviewListItem;
