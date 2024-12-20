import styled from "styled-components";

const TagsBar = styled.div`
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto; /* 允許水平滾動 */
  overflow-y: hidden; /* 禁止垂直滾動 */
  align-items: center;

  /* 隱藏滾動條 - Chrome, Safari, Edge */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none;

  /* IE */
  -ms-overflow-style: none;

  h3 + h3 {
    padding-left: 6px;
    border-left: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;

const Tag = styled.h3`
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.gray600};
  padding-right: 6px;
`;

export { TagsBar, Tag };
