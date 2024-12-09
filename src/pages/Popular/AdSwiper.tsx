import styled from "styled-components";
import photo from "../../assets/b166552d01f7fc185b15236002eda985.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Icon } from "../../component/LayoutComponents";

declare module "swiper/css" {}
const ADtag = styled.div`
  position: absolute;
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

const SwiperContainer = styled(Swiper)`
  position: relative;
  height: 248px;
  margin-left: -8px;
  margin-right: -8px;
  background-color: ${({ theme }) => theme.colors.outline1};
  display: flex;
  align-items: center;

  --swiper-pagination-color: #fff;
  --swiper-pagination-bullet-inactive-color: #fff;
  --swiper-pagination-bullet-inactive-opacity: 0.5;

  .swiper-pagination-bullet {
    box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Button = styled.div`
  bottom: 104px;
  margin-top: 0px;
  top: auto;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  &::after {
    content: none;
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
