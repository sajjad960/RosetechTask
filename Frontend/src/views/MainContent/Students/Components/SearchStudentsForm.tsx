import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

interface SearchStudentsFormProps {
  onSearch: (searchTerm: string) => void;
}

const SearchStudentsForm: React.FC<SearchStudentsFormProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

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
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Row>
    </Form.Group>
  );
};

export default SearchStudentsForm;
