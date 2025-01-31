"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <Carousel fade>
        <Carousel.Item>
          <div className="imgcar">
            <Image src="/images/hero/1.jpeg" fill alt="hero" />
          </div>

          <Carousel.Caption>
            <Container>
              <Row>
                <Col md={6}><h3>First slide label</h3></Col>
                <Col md={6}><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></Col>
              </Row>
            </Container>
            
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgcar">
            <Image src="/images/hero/1.jpeg" fill alt="hero" />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgcar">
            <Image src="/images/hero/1.jpeg" fill alt="hero" />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
