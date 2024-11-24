import styled from "styled-components";
import Header from "../../component/header";
import { Container, Wrapper } from "../../component/LayoutComponents";
import FooterNav from "../../component/FooterNav";
import bugIcon from "../../assets/bug.png";
import { TagChips } from "../../component/TagChips";
const ChipGroup = styled.div``;
const TitleBox = styled.div`
  border-radius: 16px 16px 0 0;
  background-color: ${({ theme }) => theme.colors.gray100};
  width: fit-content;
  padding: 2px 16px 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;
const TitleBoxIcon = styled.img`
  width: 32px;
  height: auto;
`;
const TitleBoxText = styled.h2`
  margin-left: 8px;
  display: inline-block;
`;
const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  padding: 16px;
  border-radius: 0 16px 16px 16px;
  background-color: ${({ theme }) => theme.colors.gray100};
  gap: 8px;
`;

function SearchResult() {
  const num = 5;

  return (
    <>
      <Wrapper>
        <Header title={`SearchResults(${num})`} />
        <Container>
          <ChipGroup>
            <TitleBox>
              <TitleBoxIcon src={bugIcon} alt="bugIcon" />
              <TitleBoxText>R11 Kaohsiung Main Station</TitleBoxText>
            </TitleBox>
            <TagBox>
              <TagChips label={"food"} />
              <TagChips label={"Multilingual"} />
              <TagChips label={"Friendly"} />
            </TagBox>
          </ChipGroup>
        </Container>
        <FooterNav />
      </Wrapper>
    </>
  );
}

export default SearchResult;
