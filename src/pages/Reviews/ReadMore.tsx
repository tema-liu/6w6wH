import { useState } from "react";
import styled from "styled-components";

const ReadMoreBtn = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  //styleName: Callout/Bold;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.32px;
  line-height: 21px;
  text-decoration-line: underline;
`;

type ReadMoreProps = {
  text: string;
  amountOfWords?: number;
};

export const ReadMore: React.FC<ReadMoreProps> = ({
  text,
  amountOfWords = 24,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const splittedText = text.split(" ");

  const itCanOverflow = splittedText.length > amountOfWords; //判斷字大過於預設字數

  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(" ")
    : text;

  const endText = splittedText.slice(amountOfWords - 1).join(" ");

  return (
    <>
      <p>
        {beginText}

        {itCanOverflow && (
          <>
            {isExpanded ? endText + " " : " ..."}
            <ReadMoreBtn
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            >
              {isExpanded ? "show less" : "show all"}
            </ReadMoreBtn>
          </>
        )}
      </p>
    </>
  );
};
