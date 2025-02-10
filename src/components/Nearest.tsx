"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function Nearest() {
  const lang = useLocale();
  return (
    <div className="nearest">
      <div className="slider-container text-center mb-5">
        <Container>
          <h3 className="text-end mb-5"> حدائق بالقرب منك</h3>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
              breakpoints={{
              320: { slidesPerView: 1 }, 
              480: { slidesPerView: 1.5 }, 
              640: { slidesPerView: 1.5},
              768: { slidesPerView: 2 }, 
              1024: { slidesPerView: 3 }, 
              1350: { slidesPerView: 4 }, 
            }}
            className="pb30 user-select-none"
          >
            {[...Array(6)].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="favItem">
                  <button className="likeItemBtn">
                    <i className="fa-solid fa-heart"></i>
                  </button>
                  <Link href={"##"} className="favItemImage">
                    <div className="overlay">
                      <span>{lang === "ar" ? "عرض" : "View"}</span>
                    </div>
                    <Image
                      src={"/images/parks/3.jpeg"}
                      width={1920}
                      height={1080}
                      alt=""
                    />
                    <Image
                      className="image-layer"
                      src={"/images/image-layer.svg"}
                      width={1920}
                      height={1080}
                      alt=""
                    />
                  </Link>
                  <div className="favItemData">
                    <div className="itD">
                      <span>
                        {lang === "ar" ? "حديقة المنتزه" : "Montazah Park"}
                      </span>
                      <span>{lang === "ar" ? "الإسكندرية" : "Alexandria"}</span>
                    </div>
                    <div className="itR">
                      <div className="rate">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <span>{lang === "ar" ? "200 تقييم" : "200 Reviews"}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="read-more text-start">
            <Link href={'/in-your-country'}>عرض المزيد ..</Link>
          </div>
        </Container>
      </div>
    </div>
  );
}
