import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';


interface SearchStudentsFormProps {
  searchTerm: string,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchStudentsForm: React.FC<SearchStudentsFormProps> = ({ searchTerm, setSearchTerm}) => {

  return (
    <Form.Group controlId="formSearch">
      <Form.Label>Search Students</Form.Label>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter name to search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col>
          {/* <Button variant="primary" onClick={handleSearch}>
            Search
          </Button> */}
        </Col>
      </Row>
    </Form.Group>
  );
};

export default SearchStudentsForm;
