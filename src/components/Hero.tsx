"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Col, Container, Row } from "react-bootstrap";

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
          <Carousel.Item>
            <div className="imgcar">
              <div className="carousel-img-wrapper">
                <Image src="/images/hero/1.jpeg" fill alt="hero" />
              </div>
            </div>
            <Carousel.Caption>
              <Container>
                <Row>
                  <Col>
                    <h1>
                      أول وأكبر منصة إلكترونية تجمع جميع الحدائق العامة الخضراء
                      في دولتك والعالم
                    </h1>
                  </Col>
                  <Col>
                    <Image
                      src="/images/hero/logo2.png"
                      width={323}
                      height={157}
                      alt="hero"
                    />
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="imgcar">
              <div className="carousel-img-wrapper">
                <Image src="/images/hero/1.jpeg" fill alt="hero" />
              </div>
            </div>
            <Carousel.Caption>
              <Container>
                <Row>
                  <Col>
                    <h1>
                      أول وأكبر منصة إلكترونية تجمع جميع الحدائق العامة الخضراء
                      في دولتك والعالم
                    </h1>
                  </Col>
                  <Col>
                    <Image
                      src="/images/hero/logo2.png"
                      width={323}
                      height={157}
                      alt="hero"
                    />
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="imgcar">
              <div className="carousel-img-wrapper">
                <Image src="/images/hero/1.jpeg" fill alt="hero" />
              </div>
            </div>
            <Carousel.Caption>
              <Container>
                <Row>
                  <Col>
                    <h1>
                      أول وأكبر منصة إلكترونية تجمع جميع الحدائق العامة الخضراء
                      في دولتك والعالم
                    </h1>
                  </Col>
                  <Col>
                    <Image
                      src="/images/hero/logo2.png"
                      width={323}
                      height={157}
                      alt="hero"
                    />
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}
