import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded section">
      <Link to={`../product/${product._id}`}>
        <Card.Img src={`/${product.image[0]}`} variant="top"></Card.Img>
      </Link>

      <Card.Body>
        <Link to={`../product/${product._id}`}>
          <Card.Title as="div">
            <strong>{`${product.name}`}</strong>
          </Card.Title>
        </Link>
        <Card.Text>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          ></Rating>
        </Card.Text>
        <Card.Text as="h3">&#8377;{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
