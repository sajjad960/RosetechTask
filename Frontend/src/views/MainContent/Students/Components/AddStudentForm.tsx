import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface AddStudentFormProps {
  onSubmit: () => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onSubmit }) => {
  const [openAddStudents, setopenAddStudents] = useState<boolean>(false);

  return (
    <>
      {!openAddStudents && (
        <Button
          variant="primary"
          onClick={() => setopenAddStudents(true)}
        >
          Add Student
        </Button>
      )}
      {openAddStudents && (
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="formID">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Enter ID" />
          </Form.Group>
          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>
          <Button className="mt-2 " variant="primary" type="submit" onClick={onSubmit}>
            Add
          </Button>
          <Button className="mt-2 " variant="light" type="submit" onClick={() => setopenAddStudents(false)}>
            Cancle
          </Button>
        </Form>
      )}
    </>
  );
};

export default AddStudentForm;
