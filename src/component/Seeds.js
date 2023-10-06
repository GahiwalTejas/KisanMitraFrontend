

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import seedsServices from '../services/seeds.services';

function Seeds() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchFertilizerProducts() {
      try {
        const response = await seedsServices.getAllSeeds('/ProductCategories/4');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching fertilizer products:', error);
      }
    }

    fetchFertilizerProducts();
  }, []);

  return (
    <div>
      <marquee>
  <h1 style={{ color: 'white' }}>Seeds Products</h1>
</marquee>
      <Row xs={1} md={2} lg={3} className="col-md-12">
        {products.map((item) => (
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
                  {/* Additional buttons or content can go here */}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
    </div>
  );
}

export default Seeds;




