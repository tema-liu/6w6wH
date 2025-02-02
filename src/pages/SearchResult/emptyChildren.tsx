import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  p {
    text-align: center;
  }
`;
const TopText = styled.div`
  color: ${({ theme }) => theme.colors.gray600};
`;

function EmptyChildren() {
  return (
    <Content>
      <TopText>
        <p>- Try using fewer tags -</p>
        <p>- Adjust your location settings -</p>
      </TopText>
      <p>or</p>
    </Content>
  );
}

export default EmptyChildren;
