import {
  WhiteWrapper,
  ContainerPd32,
} from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import { addEditList, textList } from "./data";
import { Content, Title, Section, SubTag, Ul } from "./style";

function Faqs() {
  return (
    <WhiteWrapper>
      <Header title="FAQs" />
      <ContainerPd32>
        <div>
          <Title>Frequently Asked Questions (FAQ)</Title>
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
        <div>
          <Title>Add&Edit Store Information</Title>
          <Content>
            {addEditList.map((item, index) => {
              return (
                <Section key={"item" + index}>
                  <SubTag>{item.title}</SubTag>
                  <Ul>
                    {item.li.map((text, index) => {
                      return <li key={"text" + index}>{text}</li>;
                    })}
                  </Ul>
                </Section>
              );
            })}
          </Content>
        </div>
      </ContainerPd32>
    </WhiteWrapper>
  );
}

export default Faqs;
