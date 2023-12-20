import { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import DashBoard from "./MainContent/DashBoard/DashBoard";
import Students from "./MainContent/Students/Students";

const DashboardContent = () => {
  return (
    <div className="p-4">
      <DashBoard />
    </div>
  );
};

const StudentsContent = () => {
  return (
    <div className="p-4">
      <Students />
    </div>
  );
};

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<string>("dashboard");

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <Container fluid>
      <Row className="h-100 min-vh-100">
        {/* Sidebar */}
        <Col md={3} className="bg-light  pt-4  sidebar">
          <Nav className="flex-column">
            {/* Dashboard Section */}
            <Nav.Item>
              <Nav.Link
                href="#"
                className={`nav-link fs-4  ${
                  activeSection === "dashboard" ? "bg-primary text-white" : ""
                }`}
                onClick={() => handleSectionClick("dashboard")}
              >
                Dashboard
              </Nav.Link>
            </Nav.Item>

            {/* Students Section */}
            <Nav.Item>
              <Nav.Link
                href="#"
                className={`nav-link fs-4 ${
                  activeSection === "students" ? "bg-primary text-white" : ""
                }`}
                onClick={() => handleSectionClick("students")}
              >
                Students
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={9} className="content">
          {activeSection === "dashboard" ? <DashboardContent /> : null}
          {activeSection === "students" ? <StudentsContent /> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
