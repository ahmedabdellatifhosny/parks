"use client";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function AddNewPark() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="addnewpark text-center">
      <Container>
        <p>
          إذا كانت هناك حديقة بالقرب من منزلك، عملك او النادي الرياضي الخاص بك
          يمكنك إضافتها الان مع ترفيهي حدائق..
        </p>
        <div className="add-btn">
          <Button variant="warning" onClick={handleShow}>
            <span>اضافه حديقه جديده</span>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Do not even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}
