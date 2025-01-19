import styled from "styled-components";
import { Container, Wrapper } from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import photo from "../../assets/emptyPhoto/Group 48097694.png";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import { useNavigate } from "react-router-dom";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  row-gap: 48px;
`;
const EmptyPhoto = styled.img`
  width: 246.3px;
  height: 240px;
`;
const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 24px;
`;
const EmptyText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 8px;
  p {
    color: ${({ theme }) => theme.colors.gray900};
  }
  P:first-child {
    font-weight: 700;
  }
`;

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header isBefore={false} />
      <Container>
        <Main>
          <EmptyPhoto src={photo} alt="error404" />
          <EmptyContent>
            <EmptyText>
              <p>Error 404</p>
              <p>Woops.Looks like this page doesn't exist.</p>
            </EmptyText>
            <PrimaryBtn
              $Width="fit-content"
              $fontWeight={700}
              $borderRadius={8}
              $bgColor="outline2"
              color="gray900"
              content="Back to Homepage"
              $padding="10px 24px"
              onClick={() => {
                navigate("/");
              }}
            />
          </EmptyContent>
        </Main>
      </Container>
    </Wrapper>
  );
}

export default ErrorPage;
