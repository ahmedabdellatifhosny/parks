"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import SearchBar from "../SearchBar";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { useLocale } from "next-intl";
import Pagination from "../Pagination";
import { useState } from "react";

function AroundTheWorld() {
  const lang = useLocale();
  const [activePage, setActivePage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(4);
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      // fetchData()
      setActivePage(1);
      setTotalPages(4);
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      <section className="hero hero75vh">
        <div className="titlepage">
          <h2>
            {lang === "ar" ? "   حدائق حول العالم" : " Parks Around the World "}
          </h2>
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
          <SearchBar />
        </div>
        <div className="favinner ptb50 pb-0">
          {[...Array(6)].map((_, i) => (
            <div className="favItem item2" key={i}>
              <Link href={"/in-your-country"} className="favItemImage">
                <Image
                  src={"/images/parks/3.jpeg"}
                  width={1920}
                  height={1080}
                  alt=""
                />
              </Link>
              <div className="favItemData">
                <div className="itD">
                  <span>{lang === "ar" ? " مصر" : " Egypt"}</span>
                </div>
                <div className="itR">
                  <span>{lang === "ar" ? "130 حديقه " : "130 Park"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <Pagination
          currentPage={activePage}
          totalPages={totalPages}
          scroll={true}
          onPageChange={handlePageChange}
        />
      </Container>
    </>
  );
}

export default AroundTheWorld;
