"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

export default function NavbarMenu() {
  return (
    <section className="navbarmenu">
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
          <Navbar.Brand href="#home">
            <Image src="/images/logo.png" alt="logo" width={150} height={80} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="active">
                الصفحه الرئيسية
              </Nav.Link>
              <Nav.Link href="#link">الحدائق المفضلة</Nav.Link>
              <Nav.Link href="#link">اخبار الحدائق والفاعليات </Nav.Link>
              <Nav.Link href="#link">الحجوزات</Nav.Link>
              <Nav.Link href="#link">الخريطة</Nav.Link>
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
                  <FontAwesomeIcon icon={faUser} />
                  <span className="me-2"> تسجيل الدخول</span>
                </div>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
}
