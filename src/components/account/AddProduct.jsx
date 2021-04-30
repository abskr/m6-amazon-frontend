import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import AddProductModal from "./AddProductModal";

const AddProduct = () => {
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
    </Container>
  );
};

export default AddProduct;