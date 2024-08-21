// src/pages/ProductCreate.js

import React from "react";
import { Container } from "react-bootstrap";
import ProductForm from "../components/ProductForm";

const ProductCreate = () => {
  return (
    <Container>
      <h2>Create New Product</h2>
      <ProductForm />
    </Container>
  );
};

export default ProductCreate;
