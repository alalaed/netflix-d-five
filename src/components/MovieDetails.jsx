import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";

const MovieDetails = () => {
  const params = useParams();

  const [singleMovieDetail, setSingleMovieDetail] = useState(null);
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
