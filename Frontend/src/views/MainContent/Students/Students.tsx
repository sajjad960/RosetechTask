// StudentsContent.tsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddStudentForm from './Components/AddStudentForm';
import SearchStudentsForm from './Components/SearchStudentsForm';
import StudentTable from './Components/StudentTable';
import { Student } from './Components/common/types';


const studentsData: Student[] = [
  { id: 1, name: 'John', gender: 'male' },
  { id: 2, name: 'Jane', gender: 'female' },
];

const Students: React.FC = () => {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = () => {
  };

  const handleSearchStudents = (searchTerm: string) => {
    const filteredStudents = studentsData.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setStudents(filteredStudents);
  };

  return (
    <Container fluid>
         <h3 className="text-center text-uppercase mt-2 mb-4 border-bottom  ">Students</h3>
      <Row>
        <Col md={6}>
          <AddStudentForm onSubmit={handleAddStudent} />
        </Col>
      </Row>

      <Row className='mt-3 '>
        <Col md={6}>
          <SearchStudentsForm onSearch={handleSearchStudents} />
        </Col>
      </Row>

      <Row className='mt-4'>
        <Col>
          <StudentTable students={students} />
        </Col>
      </Row>
    </Container>
  )
}

export default Students