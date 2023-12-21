import { useEffect, useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddStudentForm from "./Components/AddStudentForm";
import SearchStudentsForm from "./Components/SearchStudentsForm";
import StudentTable from "./Components/StudentTable";
import { useCustomFetch } from "../../../hooks/Api/useCustomFetch";
import { StudentProps } from "../Common/types";

const Students = () => {
  const [students, setStudents] = useState<StudentProps[]>();

  // Get Data And Set Into State START
  const useApiConfig = useMemo(() => {
    return {
      url: "http://127.0.0.1:5005/api/v1/students",
      options: {},
    };
  }, []);

  const { data, loading } = useCustomFetch(useApiConfig);

  useEffect(() => {
    setStudents(data?.data?.data);
  }, [data]);
  // Get Data And Set Into State END

  const handleSearchStudents = (searchTerm: string) => {
    const filteredStudents = students?.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setStudents(filteredStudents);
    if (searchTerm === "") {
      setStudents(data?.data?.data);
    }
  };

  return (
    <Container fluid>
      <h3 className="text-center text-uppercase mt-2 mb-4 border-bottom  ">
        Students
      </h3>
      <Row>
        <Col md={6}>
          <AddStudentForm />
        </Col>
      </Row>

      <Row className="mt-3 ">
        <Col md={6}>
          <SearchStudentsForm onSearch={handleSearchStudents} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          {loading ? (
            <h4>Loading...</h4>
          ) : (
            <StudentTable students={students || []} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Students;
