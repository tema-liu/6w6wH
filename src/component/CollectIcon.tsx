import styled from "styled-components";

interface CollectIconProps {
  $right?: number;
}
interface ComponentProps {
  right?: number;
}

const Icon = styled.div<CollectIconProps>`
  position: absolute;
  top: 0;
  right: ${(props) => props.$right}px;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.warning};
  opacity: 0.75;
  border-radius: 4px 4px 0 0; /* 上方圓角 */
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
  padding: 4px;
  .ribbon {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 28px;
    background-color: ${({ theme }) =>
      theme.colors.light}; /* 如果點擊後背景為黃色 */
    border-radius: 4px 4px 0 0; /* 上方圓角 */
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
  }
  &:active {
    opacity: 1;
    .ribbon {
      background-color: ${({ theme }) => theme.colors.warning};
    }
  }
  &:hover {
    opacity: 1;
    .ribbon {
      background-color: ${({ theme }) => theme.colors.warning};
    }
  }
`;

const CollectIcon = ({ right }: ComponentProps) => {
  return (
    <Icon $right={right}>
      <div className="ribbon"></div>
    </Icon>
  );
};

export default CollectIcon;
