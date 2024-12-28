import styled from "styled-components";

export const ShopCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 0 61px 0;
`;

export const ShopCardBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const ShopCardImg = styled.img`
  width: 100%;
  height: 424px;
  border-radius: 0 32px 32px 32px;
  object-fit: cover;
  object-position: center;
  border: 8px solid ${({ theme }) => theme.colors.gray100};
  box-shadow: 0px -4px 16px 4px #0000000a, 0px -2px 8px 0px #0000001a;
`;
export const ShopCardMain = styled.div`
  margin-top: -200px;
  position: relative;
  max-width: 376px;
  border-radius: 32px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px -4px 16px 4px #0000000a, 0px -2px 8px 0px #0000001a;
`;

export const PlaceName = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  h2 {
    font-family: "mix";
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.38px;
    margin-right: 36px;
    color: ${({ theme }) => theme.colors.gray900};
  }
  h6 {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

export const ShopCardText = styled.p`
  padding: 8px 0;
  color: ${({ theme }) => theme.colors.gray900};
`;
export const ShopCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 8px 0;
`;

export const Review = styled.button`
  cursor: pointer;
  display: flex;
  flex: 0;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.colors.outline3};
  padding: 12px 16px;
  margin-right: 0;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  &:hover {
    background-color: ${({ theme }) => theme.colors.success};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.container3};
  }
  span {
    cursor: pointer;
  }
`;

export const FooterTitle = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
`;
