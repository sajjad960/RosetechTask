import React, { useEffect, useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { memo } from 'react';


interface SearchStudentsFormProps {
  searchTerm: string,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchStudentsForm: React.FC<SearchStudentsFormProps> = ({ searchTerm, setSearchTerm}) => {
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSearch = () => {
  //   onSearch(searchTerm);
  // };

  // useEffect(() => {
  //   onSearch(searchTerm)
  // }, [searchTerm])
  

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
