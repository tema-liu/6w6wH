import styled from "styled-components";
import { TagsBar } from "../../component/TagsBar";
import { Icon } from "../../component/LayoutComponents";

export const Input = styled.input`
  clip: rect(0, 0, 0, 0);
  opacity: 0;
  position: absolute;
`;

export const Label = styled.label`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  flex: 1;
  font-size: 17px;
  line-height: 22px;
  padding: 12px 0;
  letter-spacing: -0.41px;
  font-weight: 700;
  text-align: center;
  transition: background, color 0.4s ease;
  color: rgba(33, 33, 33, 0.5);

  /* First label */
  &:first-of-type {
    border-radius: 16px 0 0 0;
    background: #b2e0f3;
    ${Input}:checked + & {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
  &:nth-of-type(2) {
    background: #f8b9dd;
    ${Input}:checked + & {
      background: ${({ theme }) => theme.colors.outline1};
    }
  }

  /* Last label */
  &:last-of-type {
    background: ${({ theme }) => theme.colors.outline2};
    border-radius: 0 16px 0 0;
    ${Input}:checked + & {
      background: ${({ theme }) => theme.colors.outline2};
    }
  }

  /* Checked state */
  ${Input}:checked + & {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export const Title = styled.div`
  background: ${({ theme }) => theme.colors.gray100};
  border-radius: 16px 16px 0 0;
  margin-right: 8px;
  padding: 12px 24px;
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.41px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

export const Reviews = styled.div`
  position: relative;
  margin-top: -64px;
  filter: drop-shadow(0px 4px 16px #0000000a) drop-shadow(0px 2px 8px #0000002a);
`;

export const ReviewContent = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 0 0 32px 32px;
  > div + div {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;
