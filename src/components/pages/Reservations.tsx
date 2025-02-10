"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { useLocale } from "next-intl";

function Reservations() {
  const lang = useLocale();
  return (
    <>
      <section className="hero">
        <div className="titlepage">
          <h2> {lang === "ar" ? "الحجوزات" : "Reservations"}</h2>
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
        <h1 className="centeredh1">
          {lang === "ar"
            ? "تذكرتك جاهزة! استعد ليوم مليء بالمغامرة والمرح في الحديقة الترفيهية "
            : "Your ticket is ready! Get ready for a day full of adventure and fun at the theme park"}
        </h1>
        <div className="reservationsInner">
          <div className="reservation">
            <div className="rowData">
              <div className="rowItem">
                <span>{lang === "ar" ? "رقم التذكرة" : "Ticket Number"}</span>
                <span>123456</span>
              </div>
              <div className="rowItem">
                <span>{lang === "ar" ? "اسم الزائر" : "Visitor Name"}</span>
                <span>Ahmed Ibrahim</span>
              </div>
              <div className="rowItem">
                <span>{lang === "ar" ? "اسم الحديقة" : "Park Name"}</span>
                <span>Om Kalthoum</span>
              </div>
              <div className="rowItem">
                <span>{lang === "ar" ? "العنوان" : "Address"}</span>
                <span>Mansoura, Egypt Street 10</span>
              </div>
              <div className="rowItem">
                <span>{lang === "ar" ? "تاريخ الزيارة" : "Visit Date"}</span>
                <span>19-11-2025</span>
              </div>
              <div className="rowItem">
                <span>
                  {lang === "ar" ? "عدد الأفراد" : "Number of People"}
                </span>
                <span>10</span>
              </div>
              <div className="rowItem">
                <span>{lang === "ar" ? "سعر التذكرة" : "Ticket Price"}</span>
                <span>50 ج.م</span>
              </div>
            </div>
            <div className="qrdata">
              <Image src="/images/qr.png" width={500} height={500} alt="qr" />
              <h3>
                {lang === "ar"
                  ? "قم بمسح الرمز الضوئي لرؤية التذكرة"
                  : "Scan the QR code to view your ticket"}
              </h3>
              <div className="printBtns">
                <button>
                  {lang === "ar"
                    ? "اطبع التذكرة (العربية)"
                    : "Print Ticket (Arabic)"}
                </button>
                <button>
                  {lang === "ar"
                    ? "اطبع التذكرة (الإنجليزية)"
                    : "Print Ticket (English)"}
                </button>
                <button className="fillBtn">
                  {lang === "ar" ? "احجز تذكرة أخرى" : "Book Another Ticket"}
                </button>
                <button className="fillBtn">
                  {lang === "ar" ? "تنزيل التذكرة" : "Download Ticket"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Reservations;
