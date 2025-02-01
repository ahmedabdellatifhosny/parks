"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { Button, Form } from "react-bootstrap";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";

export default function Hero() {
  return (
    <>
      <div className="header">
        <h4>ابحث عن اي حديقة في العالم</h4>
      </div>
      <div className="search-form">
        <div className="search-btn">
          <Button variant="success">
            <FontAwesomeIcon icon={faGear} />
            <FontAwesomeIcon icon={faFilter} />
          </Button>
        </div>
        <div className="form-search">
          <Form.Control type="text" placeholder="ابحث عن اسم الحديقة ..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <section className="hero">
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
    </>
  );
}
