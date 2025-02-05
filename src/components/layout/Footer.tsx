"use client";
import { usePathname } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function Footer() {
  const pathname = usePathname();
  const lang = useLocale();
  if (
    pathname === `/${lang}/signin` ||
    pathname === `/${lang}/signup` ||
    pathname === `/${lang}/forgot-password`
  ) {
    return null;
  }
  return (
    <section className="footer">
    <Container>
      <Row>
        <Col md={5}>
          <h3>{lang === 'ar' ? 'عن ترفيهي' : 'About Tarfeehi'}</h3>
          <p>
            {lang === 'ar'
              ? 'أول وأكبر منصة للحدائق العامة الخضراء. الحدائق هي رئة الحياة التي نتنفس بها المتعة والراحة'
              : 'The first and largest platform for public green parks. Parks are the lungs of life through which we breathe pleasure and comfort.'}
          </p>
          <p>
            {lang === 'ar'
              ? 'الرسالة: تقديم حلّ شامل في إدارة الترفيه والتسويق والاستثمار للحدائق العامة بمشاركة الإدارة المحلية'
              : 'Mission: Providing a comprehensive solution for managing recreation, marketing, and investment in public parks in partnership with local authorities.'}
          </p>
        </Col>
        <Col md={2}>
          <h3>{lang === 'ar' ? 'حول' : 'About'}</h3>
          <ul>
            <li>{lang === 'ar' ? 'التطبيق' : 'App'}</li>
            <li>{lang === 'ar' ? 'حدائقنا' : 'Our Parks'}</li>
            <li>
              <Link href={"/about"}>{lang === 'ar' ? 'من نحن ؟' : 'Who are we?'}</Link>
            </li>
            <li>{lang === 'ar' ? 'الجهات المشاركة' : 'Partners'}</li>
            <li>{lang === 'ar' ? 'الشركات المشغلة' : 'Operating Companies'}</li>
          </ul>
        </Col>
        <Col md={2}>
          <h3>{lang === 'ar' ? 'الموقع' : 'Site'}</h3>
          <ul>
            <li>{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</li>
            <li>{lang === 'ar' ? 'شروط الاستخدام' : 'Terms of Use'}</li>
            <li>{lang === 'ar' ? 'الأخبار والأحداث' : 'News & Events'}</li>
            <li>{lang === 'ar' ? 'تواصل معنا!' : 'Contact Us!'}</li>
          </ul>
        </Col>
        <Col md={3}>
          <Image
            src={"/images/hero/logo2.png"}
            alt="logo"
            width={323}
            height={157}
          />
        </Col>
      </Row>
    </Container>
    <div className="copy">
      <Container>
        <Row>
          <Col md={6}>
            <div className="copyright d-flex justify-content-start">
              <p>
                {lang === 'ar'
                  ? 'جميع الحقوق محفوظة ترفيهي &copy; 2025'
                  : 'All rights reserved Tarfeehi &copy; 2025'}
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="socialmedia-icons">
              <ul className="d-flex justify-content-end gap-3">
                <li>
                  <Link href={"#"}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
  );
}
