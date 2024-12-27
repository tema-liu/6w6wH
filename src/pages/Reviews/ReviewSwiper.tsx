import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { SwiperContainer, Button } from "../../component/SwiperStyle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Icon, Img } from "../../component/layout/LayoutComponents";
import styled from "styled-components";

const Container = styled(SwiperContainer)`
  position: relative;
  width: 100%;
  height: 248px;
  border-radius: 32px 32px 0 0;
  margin: 0;
  overflow: hidden; // 這很重要！確保圖片不會超出圓角範圍
  background-color: transparent;
`;

function ReviewSwiper() {
  return (
    <Container
      // install Swiper modules
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Img src="https://picsum.photos/1000/800" alt="advertise" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="https://picsum.photos/1000/800" alt="advertise" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="https://picsum.photos/1000/800" alt="advertise" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="https://picsum.photos/1000/800" alt="advertise" />
      </SwiperSlide>
      <Button className="swiper-button-next">
        <Icon $isPointer={true} className="material-symbols-outlined">
          chevron_right
        </Icon>
      </Button>
      <Button className="swiper-button-prev">
        <Icon $isPointer={true} className="material-symbols-outlined">
          chevron_left
        </Icon>
      </Button>
    </Container>
  );
}

export default ReviewSwiper;
