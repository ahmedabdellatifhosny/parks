"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { useLocale } from "next-intl";

function Privacy() {
  const lang = useLocale();
  return (
    <>
      <section className="hero hero75vh">
        <div className="titlepage">
          <h2> {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}</h2>
        </div>
        <div className="image-clip-path">
          <Image src="/images/image-clip-path.svg" fill alt="logo" />
        </div>
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
      <Container>
        {lang === "ar" ? (
          <div className="contentText">
            <h2>العنوان</h2>
            <p>الوصف</p>
            <h2>العنوان</h2>
            <p>الوصف</p>
            <h2>العنوان</h2>
            <p>الوصف</p>
          </div>
        ) : (
          <div className="contentText">
            <h2>Title</h2>
            <p>Details</p>
            <h2>Title</h2>
            <p>Details</p>
            <h2>Title</h2>
            <p>Details</p>
          </div>
        )}
      </Container>
    </>
  );
}
export default Privacy;
