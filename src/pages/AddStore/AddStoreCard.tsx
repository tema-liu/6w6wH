import emptyPhoto from "../../assets/Rectangle.png";
import { Icon } from "../../component/Layout/LayoutComponents";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import { AddPlaceList } from "../../type/type";
import {
  ImgBox,
  Content,
  DisplayName,
  AddressText,
  DisplayNameText,
  AddressContent,
  AddressTextBox,
  Footer,
  SelectText,
  SelectBtnBox,
} from "./style/addStoreCard";
import VoiceReader from "../../component/shop/VoiceReader";

type AddStoreCardProps = {
  data: AddPlaceList;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  currentStore: AddPlaceList | null;
  setCurrentStore: React.Dispatch<React.SetStateAction<AddPlaceList | null>>;
};
function AddStoreCard({
  data,
  index,
  setIndex,
  currentStore,
  setCurrentStore,
}: AddStoreCardProps) {
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = emptyPhoto;
  };

  return (
    <Content>
      <div>
        <ImgBox>
          {data.photos && data.photos.length > 0 ? (
            data.photos.map((photo, index) => (
              <img
                key={"photo" + index}
                src={photo ? photo : emptyPhoto}
                alt="photo"
                onError={handleImageError}
              />
            ))
          ) : (
            <img src={emptyPhoto} alt="empty photo" />
          )}
        </ImgBox>
        <DisplayName>
          <DisplayNameText>{data.displayName}</DisplayNameText>
          <VoiceReader $color="gray900" text={data.displayName} />
        </DisplayName>
      </div>
      <AddressContent>
        <AddressTextBox>
          <Icon
            $isPointer={true}
            $color="gray900"
            className="material-symbols-outlined"
          >
            location_on
          </Icon>
          <AddressText>{data.address}</AddressText>
        </AddressTextBox>
        <VoiceReader $color="gray900" text={data.address} />
      </AddressContent>
      {!currentStore && (
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
              onClick={() => {
                if (data) {
                  setCurrentStore(data);
                }
              }}
            />
          </SelectBtnBox>
        </Footer>
      )}
    </Content>
  );
}
export default AddStoreCard;
