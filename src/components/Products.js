// src/components/Products.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductList, updateProduct, removeProduct } from "../redux/productsSlice";
import { Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductList);

  const handleProductChange = (id, field, value) => {
    const updatedProduct = products.find((product) => product.itemId === id);
    if (updatedProduct) {
      const updatedFields = { [field]: value };
      dispatch(updateProduct({ id, updates: updatedFields }));
    }
  };

  return (
    <div>
      <Link to="/products/create">
        <Button variant="primary" className="mb-3">
          Add New Product
        </Button>
      </Link>
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.itemId}>
              <td>{product.itemId}</td>
              <td>
                <Form.Control
                  type="text"
                  value={product.itemName}
                  onChange={(e) => handleProductChange(product.itemId, 'itemName', e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  value={product.itemDescription}
                  onChange={(e) => handleProductChange(product.itemId, 'itemDescription', e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  value={product.itemPrice}
                  onChange={(e) => handleProductChange(product.itemId, 'itemPrice', e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  value={product.itemQuantity}
                  onChange={(e) => handleProductChange(product.itemId, 'itemQuantity', e.target.value)}
                />
              </td>
              <td>
                <Button variant="danger" onClick={() => dispatch(removeProduct(product.itemId))}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
