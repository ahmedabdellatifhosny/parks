"use client";

import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Image from "next/image";

export default function News() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <section className="news">
      <div className="slider-container text-center mb-5">
        <Container>
          <Slider {...settings}>
            <div className="box">
              <div className="box-header d-flex justify-content-between align-items-center">
                <div className="title">
                  <h5>حديقة رويال بالاس</h5>
                  <p>السعودية</p>
                </div>
                <div className="header-img">
                  <Image src={"/images/news/1.jpeg"} fill alt="logo" />
                </div>
              </div>
              <div className="desc">
                <p className="text-end">
                  تم التعاقد بين أمانة الدمام وشركة الرياض للصيانة والتشغيل
                  لإدارة العامة بالمشروع التابع للحديقه لتطيور وتجميل الحديقه
                  وتوفير فاعليات للاطفال اصغر من سن ال7 سنوات وتوفير كافة
                  الاحتياجات لهم .
                </p>
              </div>
              <div className="read-more text-start">
                <p>.. عرض المزيد </p>
              </div>
            </div>
            <div>
              <div className="box">
                <Image
                  src={"/images/news/2.jpg"}
                  width={250}
                  height={200}
                  alt="logo"
                />
              </div>
            </div>
            <div>
              <div className="box">
                <Image
                  src={"/images/news/3.jpeg"}
                  width={250}
                  height={200}
                  alt="logo"
                />
              </div>
            </div>
            <div>
              <div className="box">
                <div className="box-header">
                  <Image
                    src={"/images/news/4.jpg"}
                    width={250}
                    height={200}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="box">
                <Image
                  src={"/images/news/5.jpg"}
                  width={250}
                  height={200}
                  alt="logo"
                />
              </div>
            </div>
          </Slider>
          <div className="read-more mt-5 text-start">
            <p>عرض المزيد ..</p>
          </div>
        </Container>
      </div>
    </section>
  );
}
