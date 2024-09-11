// Headline.jsx
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import "./Headline.css";

function Headline({ article }) {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={article.image} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.description}</Card.Text>
        <Button
          variant="primary"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Headline;
