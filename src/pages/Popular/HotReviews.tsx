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
} from "../../component/ReviewComponent/ReviewCards";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Div = styled.div`
  position: relative;
`;

function HotReviews({ data }: { data: ReviewOrReply }) {
  //單選nav
  const [selectedOption, setSelectedOption] = useState("Popular");
  const { t } = useTranslation("popular");

  //處理選擇的變更
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Div id="threads" style={{ scrollMarginTop: "80px" }}>
      <Reviews>
        <div style={{ display: "flex" }}>
          <Title>{`${t("thread")}`}</Title>
          <Input
            id="Popular"
            type="radio"
            value="Popular"
            checked={selectedOption === "Popular"}
            onChange={handleOptionChange}
          />
          <Label htmlFor="Popular">{`${t("popular")}`}</Label>
          <Input
            id="Review"
            type="radio"
            value="Review"
            checked={selectedOption === "Review"}
            onChange={handleOptionChange}
          />
          <Label htmlFor="Review">{`${t("review")}`}</Label>
          <Input
            id="Latest"
            type="radio"
            value="Latest"
            checked={selectedOption === "Latest"}
            onChange={handleOptionChange}
          />
          <Label htmlFor="Latest">{`${t("latest")}`}</Label>
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
