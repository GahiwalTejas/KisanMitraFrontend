
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useLocation } from "react-router-dom";

function Search() {
    const location = useLocation([]);
  const data = location.state;
debugger



  return (
    <div><h1>Search Product :</h1>
     <Row xs={1} md={2} lg={3} className="col-md-12">
        {data.searchme.map((item) => (
          <Col key={item.productId}>
            <Card style={{ height: '600px', backgroundColor: '#f0f0f0' }}>
              <Card.Img
                variant="top"
                src={item.image}
                alt={`${item.productName} Image`}
                style={{ height: '350px' }}
              />
              <Card.Body>
                <Card.Title>{item.productName}</Card.Title>
                <Card.Text>
                  Price: {item.price}
                  <br />
                  Qty: {item.qty}
                  <br />
                  Volume: {item.volume}
                  <br />
                  Brand: {item.brand}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Search;




