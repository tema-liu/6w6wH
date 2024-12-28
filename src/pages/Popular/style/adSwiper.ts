import styled from "styled-components";
export const ADtag = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 24px;
  width: 30px;
  height: 30px;
  padding: 4px;
  background: #00000080;
  border-radius: 0 0 4px 4px;
  span {
    color: ${({ theme }) => theme.colors.light};
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.41px;
  }
`;
