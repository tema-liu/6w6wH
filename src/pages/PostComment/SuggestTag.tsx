import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TagText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.gray600};
`;
const TagChip = styled.div`
  display: flex;
  width: fit-content;
  height: 46px;
  align-items: center;
  flex-wrap: nowrap;
  background: ${({ theme }) => theme.colors.light};
  max-width: 100%;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;

  // 左側紅色條
  &::before {
    flex-shrink: 0;
    content: "";
    width: 8px;
    height: 100%;
    background: ${({ theme }) => theme.colors.container1};
    margin-right: 8px;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  p {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.32px;
    text-align: center;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;

const Input = styled.input`
  max-width: 264px;
  width: 100%;
  padding: 12px 16px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 8px;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.41px;
`;
const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

type buttonProps = {
  $color?: string;
};
const Button = styled.button<buttonProps>`
  width: 100%;
  padding: 9px 0;
  border-radius: 8px;
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.gray400};
  font-weight: 700;
`;

// const Label = styled.label`
//   font-size: 17px;
//   font-weight: 400;
//   line-height: 22px;
//   letter-spacing: -0.41px;
//   padding: 9px 0;
// `;
// const CheckBox = styled.input`
//   position: relative;
//   appearance: none;
//   border: 3px solid ${({ theme }) => theme.colors.gray600};
//   width: 18px;
//   height: 18px;
//   border-radius: 2px;

//   &:checked {
//     background-color: ${({ theme }) => theme.colors.light};
//     border-color: ${({ theme }) => theme.colors.gray900};
//   }

//   // 添加勾選符號
//   &:checked::after {
//     content: "✔"; // 或者使用其他圖標
//     position: absolute;
//     top: -1px;
//     font-size: 16px;
//     line-height: 1;
//     color: ${({ theme }) => theme.colors.gray900};
//   }
// `;
// const BoxDiv = styled.div`
//   display: flex;
//   align-items: center;
//   column-gap: 6px;
//   margin-top: 4px;
// `;

const ButtonDiv = styled.div`
  display: flex;
  column-gap: 8px;
`;

function SuggestTag({
  storeId,
  closeWindow,
}: {
  storeId: string;
  closeWindow: () => void;
}) {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);

  return (
    <>
      <form>
        <Container>
          <TopSection>
            <TagChip>
              <TagText>...... |</TagText>
            </TagChip>
            <p>Suggest Tags you want to add.</p>
          </TopSection>
          <MainSection>
            <Input
              onChange={(e) => {
                setSubmit(e.target.value.trim().length > 0);
              }}
              placeholder="add...｜"
            ></Input>
          </MainSection>
          <FooterSection>
            <ButtonDiv>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/storeList/${storeId}?option=Reviews`);
                }}
              >
                Cancel
              </Button>
              <Button
                $color={submit ? "dark" : "gray600"}
                onClick={(e) => {
                  e.preventDefault();
                  closeWindow();
                }}
                disabled={!submit}
              >
                Submit
              </Button>
            </ButtonDiv>

            {/* <BoxDiv>
            <CheckBox id="naverAppToday" type="checkbox" />
            <Label htmlFor="naverAppToday">Never appear again today</Label>
          </BoxDiv> */}
          </FooterSection>
        </Container>
      </form>
    </>
  );
}

export default SuggestTag;
