import React from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
  return (
    <div id="trending">
      <Container className="py-5">
        <h1 className="text-center text-white mb-4">TRENDING MOVIES</h1>
        <Row>
          <Col md={4} className="movie-wraper mb-3">
            <Card className="bg-dark text-white movie-img">
              <Image src={duneImage} alt="Dune" className="images" />
              <Card.Body>
                <Card.Title>Dune (2019)</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movie-wraper mb-3">
            <Card className="bg-dark text-white movie-img">
              <Image src={everythingImage} alt="Dune" className="images" />
              <Card.Body>
                <Card.Title>Everything (2022)</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movie-wraper mb-3">
            <Card className="bg-dark text-white movie-img">
              <Image src={infiniteImage} alt="Dune" className="images" />
              <Card.Body>
                <Card.Title>Infinite (2019)</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movie-wraper mb-3">
            <Card className="bg-dark text-white movie-img">
              <Image src={jokerImage} alt="Dune" className="images" />
              <Card.Body>
                <Card.Title>Joker (2021)</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movie-wraper mb-3">
            <Card className="bg-dark text-white movie-img">
              <Image src={lightyearImage} alt="Dune" className="images" />
              <Card.Body>
                <Card.Title>Lightyear (2022)</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movie-wraper mb-3">
            <Card className="bg-dark text-white movie-img">
              <Image src={morbiusImage} alt="Dune" className="images" />
              <Card.Body>
                <Card.Title>Morbius (2022)</Card.Title>
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

export default Trending;
