"use client";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function Parks() {
  return (
    <div className="parks">
      <div className="first-park">
        <Container>
          <Row>
            <Col md={4}>
              <Image
                src="/images/parks/4.jpg"
                width={350}
                height={200}
                alt="clippy"
              />
            </Col>
            <Col md={8}>
              <h3>حدائق ترفيهي</h3>
              <p>
                مع وجود عشرات (الحدائق العامة) في كلّ مدينة حول العالم.. وعلى
                الرغم من اتساع مساحاتها وتنوع إمكاناتها وتميز مواقع الكثير
                منها..
              </p>
              <p>
                إلا أنها تشهد اهتماماً واحتياجاً إلى تطوير أنظمتها الإدارية
                ومعايير أدائها لخدمة المجتمع وتقديم خدماتها الترفيهية التي تحقق
                الأهداف الرئيسية من وجود (الحديقة العامة) وهو.......{" "}
                <span>عرض المزيد</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="second-park">
        <Container>
          <Row>
            <Col md={8}>
              <h3>حدائق ترفيهي</h3>
              <p>
                مع وجود عشرات (الحدائق العامة) في كلّ مدينة حول العالم.. وعلى
                الرغم من اتساع مساحاتها وتنوع إمكاناتها وتميز مواقع الكثير
                منها..
              </p>
              <p>
                إلا أنها تشهد اهتماماً واحتياجاً إلى تطوير أنظمتها الإدارية
                ومعايير أدائها لخدمة المجتمع وتقديم خدماتها الترفيهية التي تحقق
                الأهداف الرئيسية من وجود (الحديقة العامة) وهو.......{" "}
                <span>عرض المزيد</span>
              </p>
            </Col>
            <Col md={4}>
              <Image
                src="/images/parks/5.jpg"
                width={350}
                height={200}
                alt="clippy"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
