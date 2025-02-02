"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function NavbarMenu() {
  const [activeLink, setActiveLink] = useState("home");
  const pathname = usePathname();
  if (pathname === "/signin" || pathname === "/signup" || pathname === "/forgot-password") {
    return null;
  }

  return (
    <section className="navbarmenu">
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={150} height={80} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link
                href="/"
                className={activeLink === "home" ? "active" : ""}
                onClick={() => setActiveLink("home")}
              >
                الصفحه الرئيسية
              </Link>
              <Link
                href="/"
                className={activeLink === "favorites" ? "active" : ""}
                onClick={() => setActiveLink("favorites")}
              >
                الحدائق المفضلة
              </Link>
              <Link
                href="/news-and-events"
                className={activeLink === "news" ? "active" : ""}
                onClick={() => setActiveLink("news")}
              >
                اخبار الحدائق والفاعليات{" "}
              </Link>
              <Link
                href="/"
                className={activeLink === "reservations" ? "active" : ""}
                onClick={() => setActiveLink("reservations")}
              >
                الحجوزات
              </Link>
              <Link
                href="/"
                className={activeLink === "map" ? "active" : ""}
                onClick={() => setActiveLink("map")}
              >
                الخريطة
              </Link>
            </Nav>
            <ul className="d-flex align-items-center mt-3">
              <li>
                <div className="langs ms-2">
                  <FontAwesomeIcon icon={faGlobe} />
                  <span className="me-2">اللغة العربية</span>
                </div>
              </li>
              <li>
                <div className="logs">
                  <Link href="/signin">
                    <FontAwesomeIcon icon={faUser} />
                    <span className="me-2"> تسجيل الدخول</span>
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
