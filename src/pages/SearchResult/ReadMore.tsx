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
  amountOfWords = 14,
}) => {
  const splittedText = text.split(" ");

  const itCanOverflow = splittedText.length > amountOfWords; //判斷字大過於預設字數

  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(" ")
    : text;

  return (
    <>
      <p>
        {beginText}

        {itCanOverflow && (
          <>
            {"..."}
            <ReadMoreBtn>show all</ReadMoreBtn>
          </>
        )}
      </p>
    </>
  );
};
