import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import AddProductModal from "./AddProductModal";
import ProductsTable from "./ProductsTable.jsx";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://m6-amazon-backend.herokuapp.com/products/`);
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
      <ProductsTable/>
    </Container>
  );
};

export default ManageProducts;