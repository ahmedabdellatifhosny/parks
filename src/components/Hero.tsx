"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <Carousel fade interval={2000} controls={false} indicators={false}>
        <Carousel.Item>
          <div className="imgcar">
            <Image src="/images/hero/1.jpeg" fill alt="hero" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgcar">
            <Image src="/images/hero/1.jpeg" fill alt="hero" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgcar">
            <Image src="/images/hero/1.jpeg" fill alt="hero" />
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
