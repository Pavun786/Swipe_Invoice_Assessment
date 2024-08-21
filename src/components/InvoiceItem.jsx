// src/components/InvoiceItem.js

import React from "react";
import { useSelector } from "react-redux";
import { selectProductList } from "../redux/productsSlice";
import { Table, Button, Form } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";

const InvoiceItem = (props) => {
  const { onItemizedItemEdit, currency, onRowDel, items, onRowAdd } = props;
  const products = useSelector(selectProductList);

  const handleProductChange = (e, itemId ,item) => {
    const selectedProductId = e.target.value;
    console.log(e.target.value)
    console.log(itemId)
    console.log(item)
    const selectedProduct = products.find(product => product.itemId === selectedProductId);
    console.log(selectedProduct)
    if (selectedProduct) {
      onItemizedItemEdit({
        target: {
         
          itemId: selectedProduct.itemId,
          itemName: selectedProduct.itemName,
          itemDescription: selectedProduct.itemDescription,
          itemPrice: selectedProduct.itemPrice,
          itemQuantity: selectedProduct.itemQuantity,
        }
      }, itemId);
    }
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemRow
              key={item.itemId}
              item={item}
              onDelEvent={onRowDel}
              onItemizedItemEdit={onItemizedItemEdit}
              currency={currency}
              products={products}
              onProductChange={(e) => handleProductChange(e, item.itemId ,item)}
            />
          ))}
        </tbody>
      </Table>
      <Button className="fw-bold" onClick={onRowAdd}>
        Add Item
      </Button>
    </div>
  );
};

const ItemRow = (props) => {
  const { item, onDelEvent, onItemizedItemEdit, currency, products, onProductChange } = props;

  console.log(item)

  const onDelEventHandler = () => {
    onDelEvent(item);
  };

  return (
    <tr>
      <td style={{ width: "100%" }}>
        <Form.Control
          as="select"
          value={item.itemId}
          onChange={onProductChange}
          aria-label="Select product"
        >
          <option value="">Select a product</option>
          {products.map(product => (
            <option key={product.itemId} value={product.itemId}>
              {product.itemName}
            </option>
          ))}
        </Form.Control>
        <Form.Control
          type="text"
          name="itemDescription"
          value={item.itemDescription}
          onChange={(e) => onItemizedItemEdit({ target: { name: "itemDescription", value: e.target.value, id: item.itemId } })}
          placeholder="Item description"
          className="mt-2"
        />
      </td>
      <td style={{ minWidth: "70px" }}>
        <Form.Control
          type="number"
          name="itemQuantity"
          min="1"
          step="2"
          value={item.itemQuantity}
          onChange={(e) => onItemizedItemEdit({ target: { name: "itemQuantity", value: parseInt(e.target.value), id: item.itemId } })}
          className="mt-2"
        />
      </td>
      <td style={{ minWidth: "130px" }}>
        <Form.Control
          type="number"
          name="itemPrice"
          min="1"
          step="0.01"
          value={item.itemPrice}
          onChange={(e) => onItemizedItemEdit({ target: { name: "itemPrice", value: e.target.value, id: item.itemId } })}
          placeholder={currency}
          className="text-end mt-2"
        />
      </td>
      <td className="text-center" style={{ minWidth: "50px" }}>
        <BiTrash
          onClick={onDelEventHandler}
          style={{ height: "33px", width: "33px", padding: "7.5px" }}
          className="text-white mt-1 btn btn-danger"
        />
      </td>
    </tr>
  );
};

export default InvoiceItem;
