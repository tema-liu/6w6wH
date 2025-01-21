import {
  ContainerPd32,
  WhiteWrapper,
} from "../../component/Layout/LayoutComponents";
import { Content, Title, Section, SubTag } from "../Faqs/style";
import Header from "../../component/Layout/Header";
import { textList } from "./data";

function TermsAndConditions() {
  return (
    <WhiteWrapper>
      <Header title="Terms and Conditions" />
      <ContainerPd32>
        <div>
          <Title>6w6wH Terms and Conditions</Title>
          <Content>
            {textList.map((item, index) => {
              return (
                <Section key={"item" + index}>
                  <SubTag>{item.title}</SubTag>
                  <p>{item.content}</p>
                </Section>
              );
            })}
          </Content>
        </div>
      </ContainerPd32>
    </WhiteWrapper>
  );
}

export default TermsAndConditions;
