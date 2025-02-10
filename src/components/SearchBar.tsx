import { Button, Form } from "react-bootstrap";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function SearchBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="search-form">
      <div className="search-btn">
        <Button variant="success" onClick={handleShow}>
          <FontAwesomeIcon icon={faGear} />
          <FontAwesomeIcon icon={faFilter} />
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>عوامل تصفية البحث</Modal.Title>
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
      </div>
      <div className="form-search">
        <Form.Control type="text" placeholder="ابحث عن اسم الحديقة ..." />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}
