// Footer.tsx
import React from "react";
import { Container } from "react-bootstrap";

interface FooterProps {
  author: string;
  startYear: number;
}

const Footer: React.FC<FooterProps> = ({ author, startYear }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid className="bg-dark text-light text-center p-3">
      <p>
        Copyright {author}{" "}
        {startYear === currentYear ? startYear : `${startYear}-${currentYear}`}
      </p>
    </Container>
  );
};

export default Footer;
