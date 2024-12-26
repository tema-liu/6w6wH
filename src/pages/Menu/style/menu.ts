import { ContainerPd16 } from "../../../component/layout/LayoutComponents";
import styled from "styled-components";

export const Content = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
  display: flex;
  flex-direction: column;

  div:last-child {
    margin-top: auto;
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;

export const Item = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ItemText = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const Container = styled(ContainerPd16)`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const GrayButton = styled.button`
  column-gap: 8px;
  display: flex;
  color: ${({ theme }) => theme.colors.gray600};
  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 16px;
  padding: 16px;
`;
