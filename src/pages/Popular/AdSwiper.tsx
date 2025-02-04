import photo from "../../assets/b166552d01f7fc185b15236002eda985.png";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SwiperContainer, Button, Photo } from "../../component/SwiperStyle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Icon } from "../../component/Layout/LayoutComponents";
import { ADtag } from "./style/adSwiper";
import { PopularAdvertise } from "../../type/type";
import { popularAdvertisesPicture } from "../../constants/srcPaths";

type AdSwiperProps = {
  data: PopularAdvertise[];
};

function AdSwiper({ data }: AdSwiperProps) {
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
    >
      {/* <ADtag>
        <span>AD</span>
      </ADtag> */}
      {data.map((ad) => {
        const photoUrl = popularAdvertisesPicture + ad.photo;
        return (
          <SwiperSlide key={`adSlide${ad.adId}`}>
            <Photo
              onClick={() => {
                window.open(ad.url, "_blank");
              }}
              src={photoUrl}
              alt="advertise"
            />
          </SwiperSlide>
        );
      })}
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
    </SwiperContainer>
  );
}

export default AdSwiper;
