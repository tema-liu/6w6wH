import {
  WhiteWrapper,
  ContainerPd32,
} from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import { Content, Section, SubTag, Ul } from "../Faqs/style";
import { textList } from "./data";

function PrivacyPolicy() {
  return (
    <WhiteWrapper>
      <Header title="Privacy Policy" />
      <ContainerPd32>
        <Content>
          {textList.map((item, index) => {
            return (
              <Section key={"item" + index}>
                <SubTag>{item.title}</SubTag>
                <p>{item.content}</p>
                {item.li && (
                  <Ul>
                    {item.li.map((text, index) => {
                      return <li key={"text" + index}>{text}</li>;
                    })}
                  </Ul>
                )}
                {item.subContent && <p>{item.subContent}</p>}
              </Section>
            );
          })}
        </Content>
      </ContainerPd32>
    </WhiteWrapper>
  );
}

export default PrivacyPolicy;
