import React from "react";
import { Table, Button } from "react-bootstrap";
import { Student } from "./common/types";
import { isAuthCookieAvailable } from "../../../../utils/cookie";
import { toast } from "react-toastify";

interface StudentTableProps {
  students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  const handleEdit = () => {
    if (isAuthCookieAvailable()) {
      toast.success("Student Successfully Updated");
    } else {
      toast.error("Unauthorized");
    }
  };
  return (
    <>
      <h5>All Students</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.id}</td>
              <td>{student.gender}</td>
              <td>
                <Button variant="info" onClick={handleEdit}>
                  Edit
                </Button>{" "}
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default StudentTable;
