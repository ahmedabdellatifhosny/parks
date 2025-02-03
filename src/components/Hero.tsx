"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <>
      <div className="header text-center">
        <div className="title">
          <h4>ابحث عن اي حديقة في العالم</h4>
        </div>
      </div>

      <div className="sbar">
        <SearchBar />
      </div>

      <section className="hero">
        <div className="image-clip-path">
          <Image src="/images/image-clip-path.svg" fill alt="logo" />
        </div>
        <div className="overlay"></div>
        <Carousel fade interval={2000} controls={false} indicators={false}>
          {/* Slide 1 */}
          <Carousel.Item>
            <div className="imgcar">
              <div className="carousel-img-wrapper">
                <Image src="/images/hero/1.jpeg" fill alt="hero" />
              </div>
            </div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>هذا نص توضيحي للشريحة الأولى.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <div className="imgcar">
              <div className="carousel-img-wrapper">
                <Image src="/images/hero/1.jpeg" fill alt="hero" />
              </div>
            </div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>هذا نص توضيحي للشريحة الثانية.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <div className="imgcar">
              <div className="carousel-img-wrapper">
                <Image src="/images/hero/1.jpeg" fill alt="hero" />
              </div>
            </div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>هذا نص توضيحي للشريحة الثالثة.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}
