"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Nearest() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="nearest">
      <div className="slider-container text-center mb-5">
        <Container>
          <h3 className="text-end mb-5"> حدائق بالقرب منك</h3>
          <Slider {...settings}>
            <div className="carousel-item">
              <div className="box">
                <div className="like">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="box-img">
                  <div className="overlay"></div>
                  <div className="show-park">
                    <Link href="/">عرض</Link>
                  </div>
                  <Image
                    src={"/images/parks/3.jpeg"}
                    width={320}
                    height={200}
                    alt="logo"
                  />
                </div>
                <div className="title">
                  <Container>
                    <Row>
                      <Col>
                        <ul className="d-flex gap-2">
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                        </ul>
                      </Col>
                      <Col>
                        <p>حديقه متميزه</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="rate">
                  <Container>
                    <Row>
                      <Col>
                        <p className="">200 تقييم</p>
                      </Col>
                      <Col>
                        <p className="town">الاسكندرية</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="like">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="box-img">
                  <div className="overlay"></div>
                  <div className="show-park">
                    <Link href="/">عرض</Link>
                  </div>
                  <Image
                    src={"/images/parks/3.jpeg"}
                    width={320}
                    height={200}
                    alt="logo"
                  />
                </div>
                <div className="title">
                  <Container>
                    <Row>
                      <Col>
                        <ul className="d-flex gap-2">
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                        </ul>
                      </Col>
                      <Col>
                        <p>حديقه متميزه</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="rate">
                  <Container>
                    <Row>
                      <Col>
                        <p className="">200 تقييم</p>
                      </Col>
                      <Col>
                        <p className="town">الاسكندرية</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="like">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="box-img">
                  <div className="overlay"></div>
                  <div className="show-park">
                    <Link href="/">عرض</Link>
                  </div>
                  <Image
                    src={"/images/parks/3.jpeg"}
                    width={320}
                    height={200}
                    alt="logo"
                  />
                </div>
                <div className="title">
                  <Container>
                    <Row>
                      <Col>
                        <ul className="d-flex gap-2">
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                        </ul>
                      </Col>
                      <Col>
                        <p>حديقه متميزه</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="rate">
                  <Container>
                    <Row>
                      <Col>
                        <p className="">200 تقييم</p>
                      </Col>
                      <Col>
                        <p className="town">الاسكندرية</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="like">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="box-img">
                  <div className="overlay"></div>
                  <div className="show-park">
                    <Link href="/">عرض</Link>
                  </div>
                  <Image
                    src={"/images/parks/3.jpeg"}
                    width={320}
                    height={200}
                    alt="logo"
                  />
                </div>
                <div className="title">
                  <Container>
                    <Row>
                      <Col>
                        <ul className="d-flex gap-2">
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                        </ul>
                      </Col>
                      <Col>
                        <p>حديقه متميزه</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="rate">
                  <Container>
                    <Row>
                      <Col>
                        <p className="">200 تقييم</p>
                      </Col>
                      <Col>
                        <p className="town">الاسكندرية</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="like">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="box-img">
                  <div className="overlay"></div>
                  <div className="show-park">
                    <Link href="/">عرض</Link>
                  </div>
                  <Image
                    src={"/images/parks/3.jpeg"}
                    width={320}
                    height={200}
                    alt="logo"
                  />
                </div>
                <div className="title">
                  <Container>
                    <Row>
                      <Col>
                        <ul className="d-flex gap-2">
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                        </ul>
                      </Col>
                      <Col>
                        <p>حديقه متميزه</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="rate">
                  <Container>
                    <Row>
                      <Col>
                        <p className="">200 تقييم</p>
                      </Col>
                      <Col>
                        <p className="town">الاسكندرية</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </Slider>
          <div className="read-more mt-5 text-start">
            <p>عرض المزيد ..</p>
          </div>
        </Container>
      </div>
    </div>
  );
}
