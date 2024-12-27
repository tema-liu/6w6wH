import { WhiteWrapper } from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import { Content, Container, Section, SubTag, Ul } from "../Faqs/style";
import { textList } from "./data";

function PrivacyPolicy() {
  return (
    <WhiteWrapper>
      <Header title="Privacy Policy" />
      <Container>
        <Content>
          {textList.map((item) => {
            return (
              <Section>
                <SubTag>{item.title}</SubTag>
                <p>{item.content}</p>
                {item.li && (
                  <Ul>
                    {item.li.map((text) => {
                      return <li>{text}</li>;
                    })}
                  </Ul>
                )}
                {item.subContent && <p>{item.subContent}</p>}
              </Section>
            );
          })}
        </Content>
      </Container>
    </WhiteWrapper>
  );
}

export default PrivacyPolicy;
