import CollectIcon from "../../component/shop/CollectIcon";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperContainer, Button } from "../../component/SwiperStyle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Icon, Img } from "../../component/layout/LayoutComponents";
import styled from "styled-components";
import noPhotoImg from "../../assets/Item-1.png";
import { Photo } from "../../type/type";
import { storePicture } from "../../constants/srcPaths";

const Container = styled(SwiperContainer)`
  position: relative;
  width: 100%;
  height: 248px;
  border-radius: 32px 32px 0 0;
  margin: 0;
  overflow: hidden; // 這很重要！確保圖片不會超出圓角範圍
  background-color: transparent;
`;

function StoreSwiper({
  storeId,
  photos,
  isFavorite,
}: {
  storeId: number;
  photos: Photo[];
  isFavorite: boolean;
}) {
  return (
    <Container
      // install Swiper modules
      modules={[Navigation]}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      <CollectIcon storeId={storeId} isFavoriteData={isFavorite} right={32} />
      {photos.length > 0 ? (
        photos.map((photo) => (
          <SwiperSlide key={`photo${photo.Id}`}>
            <Img src={`${storePicture}${photo.PictureUrl}`} alt="storePhoto" />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide key={`noPhotoImg`}>
          <Img src={noPhotoImg} alt="storePhoto" />
        </SwiperSlide>
      )}
      <Button $bottom={"124px"} className="swiper-button-next">
        <Icon $isPointer={true} className="material-symbols-outlined">
          chevron_right
        </Icon>
      </Button>
      <Button $bottom={"124px"} className="swiper-button-prev">
        <Icon $isPointer={true} className="material-symbols-outlined">
          chevron_left
        </Icon>
      </Button>
    </Container>
  );
}

export default StoreSwiper;
