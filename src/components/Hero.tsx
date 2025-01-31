"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <Carousel fade interval={3000} controls={false} indicators={false}>
        <Carousel.Item>
          <div className="imgcar">
            <Image src="/images/hero/1.jpeg" fill alt="hero" />
          </div>

          <Carousel.Caption>
            <Container>
              <Row>
                <Col md={6}>
                  <div className="carousel-caption-text ">
                  <h3>
                      أول وأكبر منصة إلكترونية تجمع جميع الحدائق العامة الخضراء في
                      دولتك والعالم
                  </h3>
                  <p> 16614 حديقة</p>
                    </div>
                  
                </Col>
                <Col md={6}>
                  <Image
                    src="/images/hero/logo2.png"
                    alt="hero"
                    width={323}
                    height={157}
                  />
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgcar">
            <Image src="/images/hero/1.jpeg" fill alt="hero" />
          </div>
          <Carousel.Caption>
            <Container>
              <Row>
                <Col md={6}>
                  <h3>
                    أول وأكبر منصة إلكترونية تجمع جميع الحدائق العامة الخضراء في
                    دولتك والعالم
                  </h3>
                  <p> 16614 حديقة</p>
                </Col>
                <Col md={6}>
                  <Image
                    src="/images/hero/logo2.png"
                    alt="hero"
                    width={323}
                    height={157}
                  />
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgcar">
            <Image src="/images/hero/1.jpeg" fill alt="hero" />
          </div>
          <Carousel.Caption>
            <Container>
              <Row>
                <Col md={6}>
                  <h3>
                    أول وأكبر منصة إلكترونية تجمع جميع الحدائق العامة الخضراء في
                    دولتك والعالم
                  </h3>
                  <p> 16614 حديقة</p>
                </Col>
                <Col md={6}>
                  <Image
                    src="/images/hero/logo2.png"
                    alt="hero"
                    width={323}
                    height={157}
                  />
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
