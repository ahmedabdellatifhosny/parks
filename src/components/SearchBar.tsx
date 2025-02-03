import { Button, Form } from "react-bootstrap";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";

export default function SearchBar() {
  return (
    <div className="search-form">
      <div className="search-btn">
        <Button variant="success">
          <FontAwesomeIcon icon={faGear} />
          <FontAwesomeIcon icon={faFilter} />
        </Button>
      </div>
      <div className="form-search">
        <Form.Control type="text" placeholder="ابحث عن اسم الحديقة ..." />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}
