import { useMemo, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useCustomFetch } from "../../../../hooks/Api/useCustomFetch";


const AddStudentForm = () => {
  const [openAddStudents, setopenAddStudents] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    gender: "male", // set a default value for the select field
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const useApiConfig = useMemo(() => {
    return {
      url: "http://127.0.0.1:5005/api/v1/students",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify(formData),
      },
    };
  }, [formData]);

  const { execute } = useCustomFetch(useApiConfig, false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (e: any) => {
    e.preventDefault();
    execute(useApiConfig);
  };

  return (
    <>
      {!openAddStudents && (
        <Button variant="primary" onClick={() => setopenAddStudents(true)}>
          Add Student
        </Button>
      )}
      {openAddStudents && (
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="id">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ID"
              value={formData.id}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>
          <Button
            className="mt-2"
            variant="primary"
            type="submit"
            onClick={onSubmit}
          >
            Add
          </Button>
          <Button
            className="mt-2"
            variant="light"
            type="submit"
            onClick={() => setopenAddStudents(false)}
          >
            Cancel
          </Button>
        </Form>
      )}
    </>
  );
};

export default AddStudentForm;
