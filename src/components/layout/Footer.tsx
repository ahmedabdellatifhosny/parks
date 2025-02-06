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
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const pathname = usePathname();
  const lang = useLocale();
  const t = useTranslations("Footer");

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
            <h3>{t("aboutTarfeehi")}</h3>
            <p>{t("aboutDescription")}</p>
            <p>{t("mission")}</p>
          </Col>
          <Col md={2}>
            <h3>{t("about")}</h3>
            <ul>
              <li>{t("app")}</li>
              <li>{t("ourParks")}</li>
              <li>
                <Link href={"/about"}>{t("whoAreWe")}</Link>
              </li>
              <li>{t("partners")}</li>
              <li>{t("operatingCompanies")}</li>
            </ul>
          </Col>
          <Col md={2}>
            <h3>{t("site")}</h3>
            <ul>
              <li>
                <Link href={"/privacy"}>{t("privacyPolicy")}</Link>
              </li>
              <li>
                <Link href={"/terms"}>{t("termsOfUse")}</Link>
              </li>
              <li>
                <Link href={"/news-and-events"}>{t("newsAndEvents")}</Link>
              </li>
              <li>{t("contactUs")}</li>
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
                <p>{t("copyright")}</p>
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