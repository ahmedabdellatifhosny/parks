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

export default function Footer() {
  const pathname = usePathname();
  console.log(pathname);

  if (pathname === "/signin" || pathname === "/signup") {
    return null;
  }
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col md={5}>
            <h3>عن ترفيهي</h3>
            <p>
              أول وأكبر منصة للحدائق العامة الخضراء.الحدائق هي رئة الحياة التي
              نتنفس بها المتعة والراحة
            </p>
            <p>
              الرسالة: تقديـــم حلّ شامل في إدارة الترفيه والتسويق والاستثمار
              للحدائق العامة بمشاركة الإدارة المحلية
            </p>
          </Col>
          <Col md={2}>
            <h3>حول</h3>
            <ul>
              <li>التطبيق</li>
              <li>حدائقنا</li>
              <li>من نحن ؟</li>
              <li>الجهات المشاركه </li>
              <li>الشركات المشغله </li>
            </ul>
          </Col>
          <Col md={2}>
            <h3>الموقع </h3>
            <ul>
              <li>سياسة الخصوصيه</li>
              <li>شروط الاستخدام</li>
              <li>الاخبار والاحداث</li>
              <li>تواصل معنا !</li>
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
                <p>جميع الحقوق محفوظه ترفيهي &copy; 2025</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="socialmedia-icons">
                <ul className="d-flex justify-content-end">
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
