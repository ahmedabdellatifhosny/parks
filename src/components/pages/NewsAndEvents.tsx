"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Pagination from "../Pagination";
import { useState } from "react";
import { Container } from "react-bootstrap";

function NewsAndEvents() {
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
      <section className="hero">
        <div className="titlepage">
          <h2> اخبار الحدائق والفاعليات</h2>
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
      <div className="h2">
        <h2>تعرف علي جميع الأخبار المتعلقة بالحدائق</h2>
      </div>
      <Container>
        <div className="inner">
          <div className="nande">
            <Image
              src={"/images/news/1.jpeg"}
              alt=""
              width={1000}
              height={1000}
            />
            <div className="nandeD">
              <h2>أخبار عن حديقة العائلات</h2>
              <p>
                حديقة الفراشات في دبي أيقونية جمالية جديدة، هي أقرب إلى الخيال
                برونق ألوانها وسحر تفاصيلها، وهي أحدث إبداعات إمارة دبي، لتغدو
                توأم حديقة الزهور. وكل من يزور حديقة الفراشات تصيبه حالة من
                الدهشة منذ اللحظة الأولى في الحديقة، التي استقطبت كثيراً من
                الزوّار، في يومها الأول، للتعرف إلى أجوائها وما تحتويه من حكايات
                وأسرار ترويها لنا الفراشات عبر قصص أشبه بقصص الخيال. وتمثل
                الحديقة سيمفونية جديدة للشفافية والرقة والألوان في دبي. تحدّث
                المسؤول المالي والإداري في حديقة الفراشات في دبي
                <button>المزيد</button>
              </p>
            </div>
          </div>
          <div className="nande">
            <Image
              src={"/images/news/1.jpeg"}
              alt=""
              width={1000}
              height={1000}
            />
            <div className="nandeD">
              <h2>أخبار عن حديقة العائلات</h2>
              <p>
                حديقة الفراشات في دبي أيقونية جمالية جديدة، هي أقرب إلى الخيال
                برونق ألوانها وسحر تفاصيلها، وهي أحدث إبداعات إمارة دبي، لتغدو
                توأم حديقة الزهور. وكل من يزور حديقة الفراشات تصيبه حالة من
                الدهشة منذ اللحظة الأولى في الحديقة، التي استقطبت كثيراً من
                الزوّار، في يومها الأول، للتعرف إلى أجوائها وما تحتويه من حكايات
                وأسرار ترويها لنا الفراشات عبر قصص أشبه بقصص الخيال. وتمثل
                الحديقة سيمفونية جديدة للشفافية والرقة والألوان في دبي. تحدّث
                المسؤول المالي والإداري في حديقة الفراشات في دبي
                <button>المزيد</button>
              </p>
            </div>
          </div>
          <div className="nande">
            <Image
              src={"/images/news/1.jpeg"}
              alt=""
              width={1000}
              height={1000}
            />
            <div className="nandeD">
              <h2>أخبار عن حديقة العائلات</h2>
              <p>
                حديقة الفراشات في دبي أيقونية جمالية جديدة، هي أقرب إلى الخيال
                برونق ألوانها وسحر تفاصيلها، وهي أحدث إبداعات إمارة دبي، لتغدو
                توأم حديقة الزهور. وكل من يزور حديقة الفراشات تصيبه حالة من
                الدهشة منذ اللحظة الأولى في الحديقة، التي استقطبت كثيراً من
                الزوّار، في يومها الأول، للتعرف إلى أجوائها وما تحتويه من حكايات
                وأسرار ترويها لنا الفراشات عبر قصص أشبه بقصص الخيال. وتمثل
                الحديقة سيمفونية جديدة للشفافية والرقة والألوان في دبي. تحدّث
                المسؤول المالي والإداري في حديقة الفراشات في دبي
                <button>المزيد</button>
              </p>
            </div>
          </div>
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

export default NewsAndEvents;
