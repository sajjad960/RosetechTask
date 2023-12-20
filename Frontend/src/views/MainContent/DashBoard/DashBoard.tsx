import { Card, Container, Row, Col } from "react-bootstrap";
import { useEffect, useMemo, useState } from "react";
import { useCustomFetch } from "../../../hooks/Api/useCustomFetch";
import { StudentProps } from "../Common/types";


const DashboardContent = () => {
  const [students, setstudents] = useState<StudentProps[]>();

  // Get Data And Set Into State START
  const useApiConfig = useMemo(() => {
    return {
      url: "http://127.0.0.1:5005/api/v1/students",
      options: {},
    };
  }, []);

  const { data, loading } = useCustomFetch(useApiConfig);

  useEffect(() => {
    setstudents(data?.data?.data)
  }, [data])
  // Get Data And Set Into State END
  


  const cardData = [
    {
      title: "Total Students",
      data: students?.reduce((acc) => acc + 1, 0),
      style: "bg-primary text-white",
    },
    {
      title: "Total Male Students",
      data: students
        ?.filter((student) => student?.gender === "male")
        .reduce((acc) => acc + 1, 0),
      style: "bg-light text-black",
    },
    {
      title: "Total Female Students",
      data: students
        ?.filter((student) => student?.gender === "female")
        .reduce((acc) => acc + 1, 0),
      style: "bg-light text-black",
    },
  ];

 

  return (
    <Container fluid>
      <h3 className="text-center text-uppercase mt-2 mb-4 border-bottom  ">
        Dashboard
      </h3>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <Row>
          {cardData?.map((card, index) => (
            <Col md={4} key={index}>
              <Card className={card?.style}>
                <Card.Body>
                  <Card.Title className="fs-4 ">{card?.title}</Card.Title>
                  <Card.Text className="fs-4 ">{card?.data}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default DashboardContent;
