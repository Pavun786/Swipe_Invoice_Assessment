import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";
import { Form, Button } from "react-bootstrap";




const ProductForm = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    itemId:"" , // Generate ID when component mounts
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemQuantity: "",
  });

  useEffect(() => {
    setProduct(prevProduct => ({
      ...prevProduct,
      // Update ID on component mount or reset
    }));
  }, []);

  // Function to generate a 2-digit ID
//   const generateId = () => {
//     return Math.floor(10 + Math.random() * 90); // Generate a number between 10 and 99
//   };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...product,
    };
    dispatch(addProduct(newProduct));
    setProduct({
      itemId:"", // Generate a new ID for the next form
      itemName: "",
      itemDescription: "",
      itemPrice: "",
      itemQuantity: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formProductId">
        <Form.Label>Item ID</Form.Label>
        <Form.Control
          type="text"
          name="itemId"
          value={product.itemId}
          onChange={handleChange}
          placeholder="Item ID"
          required
        
        />
      </Form.Group>
      <Form.Group controlId="formProductName">
        <Form.Label>Item Name</Form.Label>
        <Form.Control
          type="text"
          name="itemName"
          value={product.itemName}
          onChange={handleChange}
          placeholder="Enter item name"
          required
        />
      </Form.Group>
      <Form.Group controlId="formProductDescription">
        <Form.Label>Item Description</Form.Label>
        <Form.Control
          type="text"
          name="itemDescription"
          value={product.itemDescription}
          onChange={handleChange}
          placeholder="Enter item description"
          required
        />
      </Form.Group>
      <Form.Group controlId="formProductPrice">
        <Form.Label>Item Price</Form.Label>
        <Form.Control
          type="number"
          name="itemPrice"
          value={product.itemPrice}
          onChange={handleChange}
          placeholder="Enter item price"
          required
        />
      </Form.Group>
      <Form.Group controlId="formProductQuantity">
        <Form.Label>Item Quantity</Form.Label>
        <Form.Control
          type="number"
          name="itemQuantity"
          value={product.itemQuantity}
          onChange={handleChange}
          placeholder="Enter item quantity"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Product
      </Button>
    </Form>
  );
};

export default ProductForm;
