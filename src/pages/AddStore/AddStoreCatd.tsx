import styled from "styled-components";
import { CommentCardImgBox } from "../../component/reviewComponent/style/ReviewCards";
import emptyPhoto from "../../assets/Rectangle.png";
import { Icon } from "../../component/layout/LayoutComponents";
import { PrimaryBtn } from "../../component/button/PrimaryBtn";
import { AddPlaceList } from "../../type/type";

const Content = styled.div`
  padding: 24px 16px 16px 16px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 0 0 32px 32px;
  > div + div {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;
const DisplayName = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
`;

const DisplayNameText = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-family: "mix";
`;
const AddressTextBox = styled.div`
  display: flex;
  column-gap: 8px;
`;

const AddressContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;

const AddressText = styled.p`
  color: ${({ theme }) => theme.colors.gray900};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0 8px;
`;

const SelectBtnBox = styled.div`
  display: flex;
  column-gap: 8px;
`;
const SelectText = styled.h5`
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.32px;
  text-align: center;
`;
type AddStoreCardProps = {
  data: AddPlaceList;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

function AddStoreCard({ data, index, setIndex }: AddStoreCardProps) {
  return (
    <Content>
      <div>
        <CommentCardImgBox>
          <img src={data.photos ? data.photos : emptyPhoto} alt="photo" />
        </CommentCardImgBox>
        <DisplayName>
          <DisplayNameText>{data.displayName}</DisplayNameText>

          <Icon
            $isPointer={true}
            color="900"
            className="material-symbols-outlined"
          >
            volume_up
          </Icon>
        </DisplayName>
      </div>
      <AddressContent>
        <AddressTextBox>
          <Icon
            $isPointer={true}
            color="900"
            className="material-symbols-outlined"
          >
            location_on
          </Icon>
          <AddressText>{data.address}</AddressText>
        </AddressTextBox>
        <Icon
          $isPointer={true}
          color="900"
          className="material-symbols-outlined"
        >
          volume_up
        </Icon>
      </AddressContent>
      <Footer>
        <SelectText>Is it here?</SelectText>
        <SelectBtnBox>
          <PrimaryBtn
            $borderRadius={8}
            $Width="fit-content"
            $bgColor="gray100"
            $color="gray600"
            $iconColor="gray600"
            $fontWeight={700}
            iconName="check_circle"
            content="No"
            onClick={() => {
              setIndex(index);
            }}
          />
          <PrimaryBtn
            $borderRadius={8}
            $Width="fit-content"
            $color="gray900"
            $fontWeight={700}
            iconName="check_circle"
            content="Yes"
          />
        </SelectBtnBox>
      </Footer>
    </Content>
  );
}
export default AddStoreCard;
