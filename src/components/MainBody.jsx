import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddProductModal from "./AddProductModal";
import SingleProduct from "./SingleProduct";

const MainBody = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3001/products`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <AddProductModal fetchProducts={fetchProducts} />
      <Row>
        {products.map((product) => (
          <Col xs={4} className="mb-4">
            <SingleProduct key={product.id} product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainBody;
