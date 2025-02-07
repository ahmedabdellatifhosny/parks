"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { useLocale } from "next-intl";

function Administration() {
  const lang = useLocale();
  return (
    <>
      <section className="hero hero75vh">
        <div className="titlepage">
          <h2>{lang === 'ar' ? 'إدارة الحدائق العامة' : 'Public Parks Administration'}</h2>
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
        <div className="contentText">
          <h2>
            {lang === 'ar'
              ? 'نظام تطوير وإدارة الحدائق العامة بمنظومة خدمة الترفيه وفق الطلب'
              : 'Public Parks Development and Management System with On-Demand Entertainment Service'}
          </h2>
          <span>
            {lang === 'ar'
              ? 'برنامج استشاري يحقق أهداف الجهات الحكومية مالكة الحدائق العامة وكبرى المؤسسات التي تتبنى مبادرات خدمة المجتمع ،، يحقق السعادة، وجودة الحياة والتنمية المستدامة'
              : 'A consulting program that achieves the goals of government entities owning public parks and major institutions adopting community service initiatives, achieving happiness, quality of life, and sustainable development'}
            <span>{lang === 'ar' ? ' وفقاً لتطبيق ثلاثة ركائز' : ' according to the application of three pillars'}</span>
          </span>
        </div>
        <div className="stepsCards">
          <div className="scard">
            <h3>1</h3>
            <p>{lang === 'ar' ? 'بحث الموازنة بين أهداف أصحاب المصلحة في كلّ حديقة عامة' : 'Balancing stakeholder objectives in each public park'}</p>
          </div>
          <div className="scard">
            <h3>2</h3>
            <p>{lang === 'ar' ? 'بناء الأساس الشامل لنظام استدامة الحدائق العامة' : 'Establishing a comprehensive foundation for the sustainability system of public parks'}</p>
          </div>
          <div className="scard">
            <h3>3</h3>
            <p>{lang === 'ar' ? 'تطوير الحدائق العامة وفق تصنيف 7Trees' : 'Developing public parks based on the 7Trees classification'}</p>
          </div>
        </div>
        <div className="contentText">
          <h2>{lang === 'ar' ? 'الركيزة الأولى' : 'The First Pillar'}</h2>
          <span>{lang === 'ar' ? 'بحث الموازنة بين أهداف أصحاب المصلحة في كلّ حديقة عامة' : 'Balancing stakeholder objectives in each public park'}</span>
        </div>
        <div className="ulList">
          {[...Array(4)].map((_, index) => (
            <div className="ullItem" key={index}>
              <div className="imageli">
                <Image src="/images/hero/1.jpeg" width={500} height={300} alt="park" />
                <h2>
                  {lang === 'ar'
                    ? 'الجهة الحكومية مالكة الحديقة (والمشرفة عليها)'
                    : 'The government entity owning and supervising the park'}
                </h2>
              </div>
              <ul>
                <li>{lang === 'ar' ? 'المشاركة في تحقيق رؤية وأهداف الحكومة المحلية' : 'Contributing to the realization of local government vision and goals'}</li>
                <li>{lang === 'ar' ? 'التميز والابتكار في تقديم الخدمات الحكومية' : 'Excellence and innovation in providing government services'}</li>
                <li>{lang === 'ar' ? 'زيادة المسطحات الخضراء والخدمات العامة' : 'Increasing green spaces and public services'}</li>
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Administration;
