import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

import "swiper/css/scrollbar";

import SwiperCore, { Scrollbar } from "swiper";

// install Swiper modules
SwiperCore.use([Scrollbar]);

interface IImage {
  id: number;
  src: string;
  name: string;
}

interface IProduct {
  id: number;
  name: string;
  images: IImage[];
  price: string;
  description?: string;
  slug?: string;
  qty: number;
}

interface IProducts {
  products: IProduct[];
}

const Slider = ({ products }: IProducts) => {
  return (
    <div style={{ width: "800px" }}>
      <Swiper
        scrollbar={{ draggable: true }}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Image
                width={200}
                height={200}
                src={product.images[0].src}
                alt="test"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
