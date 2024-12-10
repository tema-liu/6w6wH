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

const PhotosBar = styled.div`
  width: 100%;
  height: 120px;
  padding: 0px 8px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto; /* 允許水平滾動 */
  overflow-y: hidden; /* 禁止垂直滾動 */
  align-items: center;
  column-gap: 4px;

  /* 隱藏滾動條 - Chrome, Safari, Edge */
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Photo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
`;

export { TagsBar, Tag, PhotosBar, Photo };
