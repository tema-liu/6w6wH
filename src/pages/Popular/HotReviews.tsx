import { useState } from "react";
import { ReviewOrReply } from "../../type/type";
import {
  Input,
  Label,
  Title,
  Reviews,
  ReviewContent,
} from "./style/hotReviews";
import {
  CommentCard,
  ReviewsCard,
} from "../../component/reviewComponent/ReviewCards";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  &::before {
    /* background-color: #fafafa;
    border-radius: 32px;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    filter: drop-shadow(0px 4px 16px #0000000a)
      drop-shadow(0px 2px 8px #0000002a); */
    /* box-shadow: 0px -4px 16px 4px #0000000a, 0px -2px 8px 0px #0000001a; */
  }
`;

function HotReviews({ data }: { data: ReviewOrReply }) {
  //單選nav
  const [selectedOption, setSelectedOption] = useState("Popular");

  //處理選擇的變更
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Div>
      <Reviews>
        <div style={{ display: "flex" }}>
          <Title>Thread</Title>
          <Input
            id="Popular"
            type="radio"
            value="Popular"
            checked={selectedOption === "Popular"}
            onChange={handleOptionChange}
          />
          <Label htmlFor="Popular">Popular</Label>
          <Input
            id="Review"
            type="radio"
            value="Review"
            checked={selectedOption === "Review"}
            onChange={handleOptionChange}
          />
          <Label htmlFor="Review">Review</Label>
          <Input
            id="Latest"
            type="radio"
            value="Latest"
            checked={selectedOption === "Latest"}
            onChange={handleOptionChange}
          />
          <Label htmlFor="Latest">Latest</Label>
        </div>
        <ReviewContent>
          {selectedOption == "Popular" && (
            <>
              {data.popular && (
                <>
                  <CommentCard data={data.popular} />
                  {data.popular.reply?.map((item) => {
                    return <ReviewsCard key={item.replyId} data={item} />;
                  })}
                </>
              )}
            </>
          )}
          {selectedOption == "Review" && (
            <>{data.review && <CommentCard data={data.review} />} </>
          )}
          {selectedOption == "Latest" && (
            <>
              {data.latest && (
                <>
                  <CommentCard data={data.latest} />
                  {data.latest.reply?.map((item) => {
                    return <ReviewsCard key={item.replyId} data={item} />;
                  })}
                </>
              )}
            </>
          )}
        </ReviewContent>
      </Reviews>
    </Div>
  );
}

export default HotReviews;
