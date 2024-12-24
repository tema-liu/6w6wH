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
                "Indonesia",
                "China",
                "Japan",
                "South Korea",
                "Thailand",
                "Malaysia",
                "Singapore",
                "Vietnam",
                "Philippines",
                "India",
                "United States",
                "United Kingdom",
                "France",
                "Germany",
                "Canada",
                "Australia",
                "New Zealand",
                "Brazil",
                "Mexico",
              ]}
            />
            <InputLabelPair
              idFor="sex"
              label="Gender"
              type="select"
              options={["Male", "Female", "Other"]}
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
