"use client";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
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
              <Image
                src={"/images/parks/3.jpeg"}
                width={250}
                height={200}
                alt="logo"
              />
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
                    <Col>حديقة متميزه</Col>
                  </Row>
                </Container>
              </div>
              <div className="rate">
                <Container>
                  <Row>
                    <Col>
                      <p>200 تقييم</p>
                    </Col>
                    <Col> الاسكندرية</Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div>
              <div className="box">
                <Image
                  src={"/images/parks/3.jpeg"}
                  width={250}
                  height={200}
                  alt="logo"
                />
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
                      <Col>حديقة متميزه</Col>
                    </Row>
                  </Container>
                </div>
                <div className="rate">
                  <Container>
                    <Row>
                      <Col>
                        <p>200 تقييم</p>
                      </Col>
                      <Col> الاسكندرية</Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
            <div>
              <div className="box">
                <Image
                  src={"/images/parks/3.jpeg"}
                  width={250}
                  height={200}
                  alt="logo"
                />
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
                      <Col>حديقة متميزه</Col>
                    </Row>
                  </Container>
                </div>
                <div className="rate">
                  <Container>
                    <Row>
                      <Col>
                        <p>200 تقييم</p>
                      </Col>
                      <Col> الاسكندرية</Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
            <div>
              <div className="box">
                <Image
                  src={"/images/parks/3.jpeg"}
                  width={250}
                  height={200}
                  alt="logo"
                />
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
                      <Col>حديقة متميزه</Col>
                    </Row>
                  </Container>
                </div>
                <div className="rate">
                  <Container>
                    <Row>
                      <Col>
                        <p>200 تقييم</p>
                      </Col>
                      <Col> الاسكندرية</Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
            <div>
              <div className="box">
                <Image
                  src={"/images/parks/3.jpeg"}
                  width={250}
                  height={200}
                  alt="logo"
                />
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
                      <Col>حديقة متميزه</Col>
                    </Row>
                  </Container>
                </div>
                <div className="rate">
                  <Container>
                    <Row>
                      <Col>
                        <p>200 تقييم</p>
                      </Col>
                      <Col> الاسكندرية</Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
            <div>
              <div className="box">
                <Image
                  src={"/images/parks/3.jpeg"}
                  width={250}
                  height={200}
                  alt="logo"
                />
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
                      <Col>حديقة متميزه</Col>
                    </Row>
                  </Container>
                </div>
                <div className="rate">
                  <Container>
                    <Row>
                      <Col>
                        <p>200 تقييم</p>
                      </Col>
                      <Col> الاسكندرية</Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
            <div>
              <div className="box">
                <Image
                  src={"/images/parks/3.jpeg"}
                  width={250}
                  height={200}
                  alt="logo"
                />
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
                      <Col>حديقة متميزه</Col>
                    </Row>
                  </Container>
                </div>
                <div className="rate">
                  <Container>
                    <Row>
                      <Col>
                        <p>200 تقييم</p>
                      </Col>
                      <Col> الاسكندرية</Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
            <div>
              <div className="box">
                <Image
                  src={"/images/parks/3.jpeg"}
                  width={250}
                  height={200}
                  alt="logo"
                />
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
                      <Col>حديقة متميزه</Col>
                    </Row>
                  </Container>
                </div>
                <div className="rate">
                  <Container>
                    <Row>
                      <Col>
                        <p>200 تقييم</p>
                      </Col>
                      <Col> الاسكندرية</Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
            <div>
              <div className="box">
                <Image
                  src={"/images/parks/3.jpeg"}
                  width={250}
                  height={200}
                  alt="logo"
                />
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
                      <Col>حديقة متميزه</Col>
                    </Row>
                  </Container>
                </div>
                <div className="rate">
                  <Container>
                    <Row>
                      <Col>
                        <p>200 تقييم</p>
                      </Col>
                      <Col> الاسكندرية</Col>
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
    </section>
  );
}
