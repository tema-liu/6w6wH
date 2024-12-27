import styled from "styled-components";
import { ContainerPd16 } from "../../component/layout/LayoutComponents";

export const Container = styled(ContainerPd16)`
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const Title = styled.h1`
  font-weight: 700;
  margin-bottom: 24px;
`;

export const SubTag = styled.h2`
  font-weight: 700;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const Ul = styled.ul`
  padding-left: 12px;
  list-style-type: disc;
  padding-left: 24px;
  li {
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.41px;
  }
`;
