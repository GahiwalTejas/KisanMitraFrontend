import React from 'react';
import { Table } from 'react-bootstrap';

const ProductTable = ({ products }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Volume</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.productId}>
            <td>{product.productId}</td>
            <td>{product.productName}</td>
            <td>{product.quantity}</td>
            <td>{product.volume}</td>
            <td>{product.brand}</td>
            <td>{product.price}</td>
            <td>
              <img src={product.image} alt={product.productName} width="50" height="50" />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductTable;
