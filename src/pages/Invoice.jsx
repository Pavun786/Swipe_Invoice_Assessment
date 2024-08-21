// import React from "react";
// import InvoiceForm from "../components/InvoiceForm";

// const Invoice = () => {
//   return <InvoiceForm />;
// };

// export default Invoice;


// src/pages/Invoice.js

import React, { useState } from "react";
import { Tab, Tabs, Container } from "react-bootstrap";
import InvoiceForm from "../components/InvoiceForm";
import Products from "../components/Products";

const Invoice = () => {
  const [key, setKey] = useState("invoice");

  return (
    <Container>
      <Tabs
        id="invoice-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="invoice" title="Invoice">
          <InvoiceForm />
        </Tab>
        <Tab eventKey="products" title="Products">
          <Products />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Invoice;

