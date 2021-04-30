import React from "react";
import { Button, Card } from "react-bootstrap";
import AddProductModal from "./AddProductModal";

const SingleProduct = ({ product }) => {
  return (
    <Card>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Card.Text>{product.category}</Card.Text>

        <Button variant="success">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
