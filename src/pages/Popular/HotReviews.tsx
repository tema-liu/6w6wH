import { useState } from "react";
import { Input, Label, Title, Reviews, ReviewContent } from "./styled";
import { CommentCard, ReviewsCard } from "../../component/ReviewCards";
import { hotReviewData } from "../../type/type";

function HotReviews({ res }: { res: hotReviewData }) {
  //單選nav
  const [selectedOption, setSelectedOption] = useState("Popular");

  //處理選擇的變更
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const data = res?.data;
  console.log(data);

  return (
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
          id="Lastest"
          type="radio"
          value="Lastest"
          checked={selectedOption === "Lastest"}
          onChange={handleOptionChange}
        />
        <Label htmlFor="Lastest">Lastest</Label>
      </div>
      <ReviewContent>
        {selectedOption == "Popular" && (
          <>
            {data?.popular && (
              <>
                <CommentCard data={data.popular} />
                {data.popular.reply?.map((item) => {
                  return <ReviewsCard key={item.replyID} data={item} />;
                })}
              </>
            )}
          </>
        )}
        {selectedOption == "Review" && (
          <>{data?.review && <CommentCard data={data?.review} />} </>
        )}
        {selectedOption == "Lastest" && (
          <>
            {data?.last && (
              <>
                <CommentCard data={data?.last} />
                {data.last.reply?.map((item) => {
                  return <ReviewsCard key={item.replyID} data={item} />;
                })}
              </>
            )}
          </>
        )}
      </ReviewContent>
    </Reviews>
  );
}

export default HotReviews;
