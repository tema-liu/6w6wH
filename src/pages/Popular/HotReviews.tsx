import { useState } from "react";
import { Input, Label, Title, Reviews, ReviewContent } from "./styled";
import { CommentCard, ReviewsCard } from "../../component/ReviewCards";

function HotReviews() {
  //單選nav
  const [selectedOption, setSelectedOption] = useState("Popular");

  //處理選擇的變更
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

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
            <CommentCard />
            <ReviewsCard />
            <ReviewsCard />
          </>
        )}
        {selectedOption == "Review" && (
          <>
            <CommentCard />
          </>
        )}
        {selectedOption == "Latest" && (
          <>
            <CommentCard />
            <ReviewsCard />
            <ReviewsCard />
          </>
        )}
      </ReviewContent>
    </Reviews>
  );
}

export default HotReviews;
