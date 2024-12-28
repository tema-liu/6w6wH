import styled from "styled-components";

export const Content = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  padding: 12px 16px 12px 8px;
  color: ${({ theme }) => theme.colors.gray600};
`;
export const TagChip = styled.div`
  cursor: pointer;
  display: flex;
  height: 46px;
  align-items: center;
  flex-wrap: nowrap;
  background: ${({ theme }) => theme.colors.light};
  max-width: 100%;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  transition: all 0.25s ease;

  // 左側紅色條
  &::before {
    flex-shrink: 0;
    content: "";
    width: 8px;
    height: 100%;
    background: ${({ theme }) => theme.colors.container1};
    margin-right: 8px;
  }

  &:active {
    background: ${({ theme }) => theme.colors.container1};
    p {
      color: ${({ theme }) => theme.colors.gray900};
    }
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  padding: 8px 0 16px 0;
`;

export const MarqueeContainer = styled.div`
  margin: 0 -8px 0 -8px;
  overflow: visible;
`;
