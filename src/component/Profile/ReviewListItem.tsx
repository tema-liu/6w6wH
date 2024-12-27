import styled from "styled-components";
import { ToggleSwitch } from "./ProfileTab";
import { ProfileReviewsCard } from "../ReviewComponent/ReviewCards";
import EmptyDisplay from "../EmptyDisplay";
import { useNavigate } from "react-router-dom";

const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: calc(100dvh - 415px); /* 扣除 header 和 footer 高度 */
`;

function ReviewListItem() {
  const navigator = useNavigate();

  const options = ["Reviews", "Following", "Bookmarks"];
  const content = {
    Reviews: (
      <>
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
            onClick={() => {
              navigator("/popular");
            }}
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
            onClick={() => {
              navigator("/search");
            }}
          />
        </EmptyBox>
      </>
    ),
  };

  return <ToggleSwitch inputList={options} contentMapping={content} />;
}

export default ReviewListItem;
