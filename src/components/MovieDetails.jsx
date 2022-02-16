import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  const params = useParams();
  const id = params.movieId;

  const [singleMovieDetail, setSingleMovieDetail] = useState(null);

  const fetchMovieDetails = () => {
    const OMDB_URL = "https://www.omdbapi.com/?apikey=24ad60e9";

    fetch(OMDB_URL + id)
      .then((resp) => resp.json())
      .then((data) => console.log("this is the data" + data));
  };

  useEffect(() => fetchMovieDetails, []);
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
