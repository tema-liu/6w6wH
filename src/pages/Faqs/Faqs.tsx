import { WhiteWrapper } from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import { addEditList, textList } from "./data";
import { Content, Title, Container, Section, SubTag, Ul } from "./style";

function Faqs() {
  return (
    <WhiteWrapper>
      <Header title="FAQs" />
      <Container>
        <div>
          <Title>Frequently Asked Questions (FAQ)</Title>
          <Content>
            {textList.map((item) => {
              return (
                <Section>
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
            {addEditList.map((item) => {
              return (
                <Section>
                  <SubTag>{item.title}</SubTag>
                  <Ul>
                    {item.li.map((text) => {
                      return <li>{text}</li>;
                    })}
                  </Ul>
                </Section>
              );
            })}
          </Content>
        </div>
      </Container>
    </WhiteWrapper>
  );
}

export default Faqs;
