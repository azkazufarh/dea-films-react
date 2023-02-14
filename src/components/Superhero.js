import React from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/antman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <div id="superhero">
      <Container className="py-5">
        <h1 className="text-center text-white mb-4">SUPERHERO MOVIES</h1>
        <Row>
          <Col md={4} className="movie-wraper mb-3">
            <Card className="bg-dark text-white movie-img">
              <Image src={antmanImage} alt="Dune" className="images" />
              <Card.Body>
                <Card.Title>AntMan (2019)</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movie-wraper mb-3">
            <Card className="bg-dark text-white movie-img">
              <Image src={avengerImage} alt="Dune" className="images" />
              <Card.Body>
                <Card.Title>Avenger (2022)</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movie-wraper mb-3">
            <Card className="bg-dark text-white movie-img">
              <Image src={batmanImage} alt="Dune" className="images" />
              <Card.Body>
                <Card.Title>Batman (2019)</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movie-wraper mb-3">
            <Card className="bg-dark text-white movie-img">
              <Image src={robinhoodImage} alt="Dune" className="images" />
              <Card.Body>
                <Card.Title>Robin Hood (2021)</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movie-wraper mb-3">
            <Card className="bg-dark text-white movie-img">
              <Image src={spidermanImage} alt="Dune" className="images" />
              <Card.Body>
                <Card.Title>Spiderman (2022)</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movie-wraper mb-3">
            <Card className="bg-dark text-white movie-img">
              <Image src={supermanImage} alt="Dune" className="images" />
              <Card.Body>
                <Card.Title>superman (2022)</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
