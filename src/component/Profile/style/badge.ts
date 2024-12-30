import styled from "styled-components";
export const Content = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  p {
    color: ${({ theme }) => theme.colors.gray900};
  }
`;
export const BottomSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  div:last-child {
    align-items: center;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  color: #171d1e;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  p:first-child {
    font-weight: 700;
    padding-bottom: 2px;
  }
  img {
    display: block;
  }
`;
