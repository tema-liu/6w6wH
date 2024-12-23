import styled from "styled-components";
import { ToggleSwitch } from "./ProfileTab";
import { ProfileReviewsCard } from "../../component/ReviewComponent/ReviewCards";
import EmptyDisplay from "../../component/EmptyDisplay";

const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 100%;
`;

function ReviewListItem() {
  const options = ["Reviews", "Following", "Bookmarks"];
  const content = {
    Reviews: (
      <>
        {/* <ProfileReviewsCard /> */}
        <EmptyBox>
          <EmptyDisplay
            $isIconDark={true}
            webIcon={true}
            content="No review left yet"
            btnText="Explore places"
          />
        </EmptyBox>
        {/* 
        <ProfileReviewsCard /> */}
      </>
    ),
    Following: (
      <>
        <EmptyBox>
          <EmptyDisplay
            $isIconDark={true}
            webIcon={false}
            iconStyle="local_fire_department"
            content="There are no people following"
            btnText="View popular threads"
          />
        </EmptyBox>
      </>
    ),
    Bookmarks: (
      <>
        <EmptyBox>
          <EmptyDisplay
            $isIconDark={true}
            webIcon={false}
            iconStyle="local_fire_department"
            content="No bookmarks"
            btnText="View popular places"
          />
        </EmptyBox>
      </>
    ),
  };

  return <ToggleSwitch inputList={options} contentMapping={content} />;
}

export default ReviewListItem;
