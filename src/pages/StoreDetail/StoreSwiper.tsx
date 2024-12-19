import CollectIcon from "../../component/CollectIcon";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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

function StoreSwiper() {
  return (
    <Container
      // install Swiper modules
      modules={[Navigation]}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <CollectIcon right={32} />
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
      <Button $bottom={124} className="swiper-button-next">
        <Icon className="material-symbols-outlined">chevron_right</Icon>
      </Button>
      <Button $bottom={124} className="swiper-button-prev">
        <Icon className="material-symbols-outlined">chevron_left</Icon>
      </Button>
    </Container>
  );
}

export default StoreSwiper;
