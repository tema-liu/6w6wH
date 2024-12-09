import styled from "styled-components";
import photo from "../../assets/b166552d01f7fc185b15236002eda985.png";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SwiperContainer, Button, Photo } from "../../component/SwiperStyle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Icon } from "../../component/LayoutComponents";

const ADtag = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 24px;
  width: 30px;
  height: 30px;
  padding: 4px;
  background: #00000080;
  border-radius: 0 0 4px 4px;
  span {
    color: ${({ theme }) => theme.colors.light};
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.41px;
  }
`;

function AdSwiper() {
  return (
    <SwiperContainer
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <ADtag>
        <span>AD</span>
      </ADtag>
      <SwiperSlide>
        <Photo src={photo} alt="advertise" />
      </SwiperSlide>
      <SwiperSlide>
        <Photo src={photo} alt="advertise" />
      </SwiperSlide>
      <SwiperSlide>
        <Photo src={photo} alt="advertise" />
      </SwiperSlide>
      <SwiperSlide>
        <Photo src={photo} alt="advertise" />
      </SwiperSlide>
      <Button className="swiper-button-next">
        <Icon className="material-symbols-outlined">chevron_right</Icon>
      </Button>
      <Button className="swiper-button-prev">
        <Icon className="material-symbols-outlined">chevron_left</Icon>
      </Button>
    </SwiperContainer>
  );
}

export default AdSwiper;
