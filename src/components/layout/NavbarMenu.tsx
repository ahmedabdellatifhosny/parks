"use client";
import { useLocale, useTranslations } from "next-intl";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarMenu() {
  const pathname = usePathname();
  const lang = useLocale();
  const t = useTranslations('Navbar');
  const activeLink = pathname.split("/")[2] || lang;

  const getOppositeLocale = (currentLocale:string) => {
    return currentLocale === 'en' ? 'ar' : 'en';
  };

  const getNewPath = (currentPath:string, currentLocale:string) => {
    const oppositeLocale = getOppositeLocale(currentLocale);
    const pathWithoutLocale = currentPath.split('/').slice(2).join('/');
    return `/${oppositeLocale}/${pathWithoutLocale}`;
  };

  const newPath = getNewPath(pathname, lang);

  if (
    pathname === `/${lang}/signin` ||
    pathname === `/${lang}/signup` ||
    pathname === `/${lang}/forgot-password`
  ) {
    return null;
  }

  return (
    <section className="navbarmenu">
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
          <Link href={`/`}>
            <Image src="/images/logo.png" alt="logo" width={150} height={80} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link
                href={`/`}
                className={activeLink === lang ? "active" : "not"}
              >
                {t("home")}
              </Link>
              <Link
                href={`/favorites`}
                className={activeLink === "favorites" ? "active" : ""}
              >
                {t("favorites")}
              </Link>
              <Link
                href={`/news-and-events`}
                className={activeLink === "news-and-events" ? "active" : ""}
              >
                {t("news")}
              </Link>
              <Link
                href={`/reservations`}
                className={activeLink === "reservations" ? "active" : ""}
              >
                {t("reservations")}
              </Link>
              <Link
                href={`/map`}
                className={activeLink === "map" ? "active" : ""}
              >
                {t("map")}
              </Link>
            </Nav>
            <ul className="d-flex align-items-center mt-3">
              <li>
                <Link
                  href={newPath}
                  className="langs ms-2"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                  <span className="mx-2">{t("language")}</span>
                </Link>
              </li>
              <li>
                <div className="logs">
                  <Link href={`/signin`}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className="mx-2">{t("login")}</span>
                  </Link>
                </div>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
}
