import styled from "styled-components";
import { ContainerPd16 } from "../../../component/layout/LayoutComponents";

export const Content = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
  display: flex;
  flex-direction: column;
`;

export const Container = styled(ContainerPd16)`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
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
