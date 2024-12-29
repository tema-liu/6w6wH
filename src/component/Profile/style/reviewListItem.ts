import styled from "styled-components";

export const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: calc(100dvh - 415px); /* 扣除 header 和 footer 高度 */
`;

export const GrayBorderBox = styled.div`
  > div + div {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px;
`;
