import styled from "styled-components";

export const Store = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.gray900};
  padding: 12px 0;

  a {
    text-decoration: underline;
  }
`;

export const BusinessHours = styled.div`
  h2 + h2 {
    margin-top: 8px;
  }
`;

type Colors = { $colors: string };

export const BusinessHoursTitle = styled.h2<Colors>`
  font-weight: 700;
  color: ${({ theme, $colors }) =>
    $colors ? theme.colors[$colors] : theme.colors.gray900};
`;

export const ContentDetail = styled.div`
  padding: 16px 16px 0 16px;
  border-radius: 0 0 32px 32px;
  background-color: ${({ theme }) => theme.colors.light};
`;
