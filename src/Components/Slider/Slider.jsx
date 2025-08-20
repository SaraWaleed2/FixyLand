import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Slider({
    items,
    renderItem,
    spaceBetween = 20,
    autoplay = true,
    loop = true,
    breakpoints,
}) {
    return (
        <Swiper
            spaceBetween={spaceBetween}
            autoplay={autoplay ? { delay: 2500, disableOnInteraction: false } : false}
            loop={loop}
            breakpoints={breakpoints}
            modules={[Autoplay]}
        >
            {items?.map((item, index) => (
                <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;
