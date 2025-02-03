"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import SearchBar from "../SearchBar";
import { Container } from "react-bootstrap";
import Link from "next/link";

function FavParks() {
  return (
    <>
      <section className="hero">
        <div className="titlepage">
          <h2> الحدائق المفضله</h2>
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
        <div className="sbar pr">
          <h2>ابحث عن اي حديقه في العالم </h2>
          <SearchBar />
        </div>
        <div className="favinner ptb50">
          <div className="favItem">
            <button className="likeItemBtn">
              <i className="fa-solid fa-heart"></i>
            </button>
            <Link href={"##"} className="favItemImage">
              <div className="overlay">
                <span>عرض</span>
              </div>
              <Image
                src={"/images/parks/3.jpeg"}
                width={1920}
                height={1080}
                alt=""
              />
              <Image
                className="image-layer"
                src={"/images/image-layer.svg"}
                width={1920}
                height={1080}
                alt=""
              />
            </Link>
            <div className="favItemData">
              <div className="itD">
                <span>حديقة المنتزه </span>
                <span> الاسكندريه </span>
              </div>
              <div className="itR">
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span>200 تقييم</span>
              </div>
            </div>
          </div>
          <div className="favItem">
            <button className="likeItemBtn">
              <i className="fa-solid fa-heart"></i>
            </button>
            <Link href={"##"} className="favItemImage">
              <div className="overlay">
                <span>عرض</span>
              </div>
              <Image
                src={"/images/parks/3.jpeg"}
                width={1920}
                height={1080}
                alt=""
              />
              <Image
                className="image-layer"
                src={"/images/image-layer.svg"}
                width={1920}
                height={1080}
                alt=""
              />
            </Link>
            <div className="favItemData">
              <div className="itD">
                <span>حديقة المنتزه </span>
                <span> الاسكندريه </span>
              </div>
              <div className="itR">
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span>200 تقييم</span>
              </div>
            </div>
          </div>
          <div className="favItem">
            <button className="likeItemBtn">
              <i className="fa-solid fa-heart"></i>
            </button>
            <Link href={"##"} className="favItemImage">
              <div className="overlay">
                <span>عرض</span>
              </div>
              <Image
                src={"/images/parks/3.jpeg"}
                width={1920}
                height={1080}
                alt=""
              />
              <Image
                className="image-layer"
                src={"/images/image-layer.svg"}
                width={1920}
                height={1080}
                alt=""
              />
            </Link>
            <div className="favItemData">
              <div className="itD">
                <span>حديقة المنتزه </span>
                <span> الاسكندريه </span>
              </div>
              <div className="itR">
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span>200 تقييم</span>
              </div>
            </div>
          </div>
          <div className="favItem">
            <button className="likeItemBtn">
              <i className="fa-light fa-heart"></i>
            </button>
            <Link href={"##"} className="favItemImage">
              <div className="overlay">
                <span>عرض</span>
              </div>
              <Image
                src={"/images/parks/3.jpeg"}
                width={1920}
                height={1080}
                alt=""
              />
              <Image
                className="image-layer"
                src={"/images/image-layer.svg"}
                width={1920}
                height={1080}
                alt=""
              />
            </Link>
            <div className="favItemData">
              <div className="itD">
                <span>حديقة المنتزه </span>
                <span> الاسكندريه </span>
              </div>
              <div className="itR">
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-light fa-star"></i>
                </div>
                <span>200 تقييم</span>
              </div>
            </div>
          </div>
          <div className="favItem">
            <button className="likeItemBtn">
              <i className="fa-solid fa-heart"></i>
            </button>
            <Link href={"##"} className="favItemImage">
              <div className="overlay">
                <span>عرض</span>
              </div>
              <Image
                src={"/images/parks/3.jpeg"}
                width={1920}
                height={1080}
                alt=""
              />
              <Image
                className="image-layer"
                src={"/images/image-layer.svg"}
                width={1920}
                height={1080}
                alt=""
              />
            </Link>
            <div className="favItemData">
              <div className="itD">
                <span>حديقة المنتزه </span>
                <span> الاسكندريه </span>
              </div>
              <div className="itR">
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span>200 تقييم</span>
              </div>
            </div>
          </div>
          <div className="favItem">
            <button className="likeItemBtn">
              <i className="fa-solid fa-heart"></i>
            </button>
            <Link href={"##"} className="favItemImage">
              <div className="overlay">
                <span>عرض</span>
              </div>
              <Image
                src={"/images/parks/3.jpeg"}
                width={1920}
                height={1080}
                alt=""
              />
              <Image
                className="image-layer"
                src={"/images/image-layer.svg"}
                width={1920}
                height={1080}
                alt=""
              />
            </Link>
            <div className="favItemData">
              <div className="itD">
                <span>حديقة المنتزه </span>
                <span> الاسكندريه </span>
              </div>
              <div className="itR">
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span>200 تقييم</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default FavParks;
