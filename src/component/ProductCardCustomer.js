import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import cartServices from '../services/cart.services';

function ProductCardCustomer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
debugger;
    async function fetchProducts() {
      try {
        console.log("before url");
        const response = await cartServices.getCart('/Products');
        console.log("after url and before data");

        
        setProducts(response.data);
    console.log("after data")  ;
    } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  const history = useHistory();

  const handleAddToCart = (productId) => {
    // Logic to add product to cart
    
      console.log('handleSave function executed');  
      
      const data ={
        userId :sessionStorage.getItem('userId'),
            productId,
            qty : 1,          
        };
        console.log('Attempting Carts'); 
    debugger;
    ;
    cartServices.createCart(data).then((result) =>{
      alert(result.data)
     sessionStorage.setItem('productId',result.data.productId);
     
     
      console.log("Product adeed To cart");
       //const id=parseInt(result.data.userId);

     // sessionStorage.setItem('userId',result.data.userId);
      //sessionStorage.setItem('email',result.data.email);
      // console.log('userId');
      // if(result.data.roleType ==="Seller")
      history.push('/ProductCardCustomer');
      //else {
         // history.push('/ProductCardCustomer');
      // }
      
      
      
      }).catch((error) =>{
          alert(error);
      })
      




  };

  const handleBuyProduct = (productId) => {
    // Logic to initiate purchase
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
      <h1>Products Customer</h1>
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
                  <Button variant="primary" onClick={() => handleAddToCart(item.productId)}>
                    Add to Cart
                  </Button>
                  <Button variant="success" onClick={() => handleBuyProduct(item.productId)}>
                    Buy
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
      <button className="btn btn-danger logout-button"   onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ProductCardCustomer;
   