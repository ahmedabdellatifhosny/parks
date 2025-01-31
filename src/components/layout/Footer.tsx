"use client";
import { usePathname } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

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
         <Image src={"/images/hero/logo2.png"} alt="logo" width={323} height={157} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
