import styled from "styled-components";
import { Container, Wrapper } from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import { InputLabelPair, Content } from "../../component/InputLabelPair";
const SetupForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
`;

function Setup() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <SetupForm>
          <Content>
            <InputLabelPair
              idFor="country"
              label="Country"
              type="select"
              options={[
                { value: "indonesia", label: "Indonesia" },
                { value: "china", label: "China" },
                { value: "japan", label: "Japan" },
                { value: "south_korea", label: "South Korea" },
                { value: "thailand", label: "Thailand" },
                { value: "malaysia", label: "Malaysia" },
                { value: "singapore", label: "Singapore" },
                { value: "vietnam", label: "Vietnam" },
                { value: "philippines", label: "Philippines" },
                { value: "india", label: "India" },
                { value: "united_states", label: "United States" },
                { value: "united_kingdom", label: "United Kingdom" },
                { value: "france", label: "France" },
                { value: "germany", label: "Germany" },
                { value: "canada", label: "Canada" },
                { value: "australia", label: "Australia" },
                { value: "new_zealand", label: "New Zealand" },
                { value: "brazil", label: "Brazil" },
                { value: "mexico", label: "Mexico" },
              ]}
              defaultValue="male"
            />
            <InputLabelPair
              idFor="sex"
              label="Gender"
              type="select"
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
              ]}
              defaultValue="male"
            />
            <InputLabelPair
              idFor="birth"
              label="Birth date"
              type="date"
              defaultValue="2024-12-19"
            />
          </Content>
          <PrimaryBtn
            iconName="how_to_reg"
            content="Submit"
            $fill={true}
            $fontWeight={700}
          />
        </SetupForm>
      </Container>
    </Wrapper>
  );
}

export default Setup;
