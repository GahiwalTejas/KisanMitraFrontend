import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import sellerServices from '../services/seller.services';

function ProductDetails() {
  const [products, setProducts] = useState('');

  useEffect(() => {
    const productId = sessionStorage.getItem('productId');

      
    
    async function fetchProducts() {
      try {
        const response = await sellerServices.GetProductByUserId('productId'); // Replace with your API endpoint
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);
  const history = useHistory();





  const handleDelete = (productId) => {
    // Delete user by userId

    sellerServices.removeProductByUserId('productId')
      .then(response => {
        // Update products after successful deletion
       // alert(response.data);
        setProducts(products.filter(products => products.productId !== productId));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };





  const handleLogout = () => {
    // Perform logout logic here
    // For demonstration purposes, simulate logout
    sessionStorage.clear();
    alert('Logged out');

    // Redirect to the login page
    history.push('/login');
  };


  return (
    <div>
      <h1>Product Management</h1>
      <Row xs={1} md={2} lg={3} className="col-md-12">
        {products.map((item) => (
          <Col key={item.productId}>
            <Card style={{ height: '600px' }}>
              <Card.Img
                variant="top"
                src={item.image}
                alt={`${item.productName} Image`}
                style={{ height: '350px' }} // Set a fixed image height
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
                  <br />
                  Description: {item.description}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button variant="primary" href={`/edit/${item.productId}`}>
                    Edit
                  </Button>
                  <div>
                
                   
                    <Button variant="danger"  onClick={() => handleDelete(item.productId)}>
                      Delete
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row><br></br>

      <button className="btn btn-danger logout-button"   onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ProductDetails;
