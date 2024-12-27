import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0 0 32px 32px;
  background-color: ${({ theme }) => theme.colors.light};
  > div + div {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;
