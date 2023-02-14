import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="hero">
      <Container className="text-white d-flex text-center justify-content-center align-item-center">
        <Row>
          <Col>
            <div className="title">Nonton Gratis</div>
            <div className="title">Gak Pake Karcis</div>
            <div className="hero-button mt-4 text-center">
              <Button variant="dark">Lihat Semua</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
