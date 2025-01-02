import styled from "styled-components";

export const Content = styled.div`
  padding: 24px 16px 16px 16px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 0 0 32px 32px;
  > div + div {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;
export const DisplayName = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
`;

export const DisplayNameText = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-family: "mix";
`;
export const AddressTextBox = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const AddressContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;

export const AddressText = styled.p`
  color: ${({ theme }) => theme.colors.gray900};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0 8px;
`;

export const SelectBtnBox = styled.div`
  display: flex;
  column-gap: 8px;
`;
export const SelectText = styled.h5`
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.32px;
  text-align: center;
`;

export const ImgBox = styled.div`
  height: 220px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
    object-position: center;
  }
`;
