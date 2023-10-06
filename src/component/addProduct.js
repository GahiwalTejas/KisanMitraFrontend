import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import productServices from '../services/product.services';

function AddProduct() {
  const history = useHistory();
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(0);
const[qty,setQty]=useState(0);
const[brand,setBrand]=useState('');
const[volume,setVolume]=useState(0.0);
const[description,setDescription]=useState('');
const[image,setImage]=useState('');
const [SubCategory, setSubCategory] = useState(0);
  // ... similar state variables for other fields
  const handleProductSubCatChange = (event) => {
    const SubCategory = event.target.value;
    setSubCategory(SubCategory);}

    const handleLogout = () => {
      // Perform logout logic here
      // For demonstration purposes, simulate logout
      sessionStorage.clear();
      alert('Logged out');
  
      // Redirect to the login page
      history.push('/login');
    };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      productName,
      price,
      qty,
      volume,
      brand,
      description,
      image,
      prodSubCatId :SubCategory,
      userId :sessionStorage.getItem('userId')
      // ... other fields
    };
    
      console.log("Product adeed To cart");
    try {
      const response = await productServices.createProduct(newProduct).then((response)=>{
    alert(response.data)
    console.log('Product created:', response.data);
    history.push('/ProductCard');

      }); // Adjust the endpoint URL as needed
      
      // Optionally, you can redirect to a different page after successful creation
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="container">
      <h2>Create Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="qty">
          <Form.Label>Qty</Form.Label>
          <Form.Control type="number" value={qty} onChange={(e) => setQty(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="volume">
          <Form.Label>Volume</Form.Label>
          <Form.Control type="number" value={volume} onChange={(e) => setVolume(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>image Link</Form.Label>
          <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </Form.Group>
        <div className="col-md-3">
      <label htmlFor="SubCategory">Select a SubCategory:</label>
      <select id="SubCategory" value={SubCategory} onChange={handleProductSubCatChange}>        
        <option value="4">Bio-Fertilizer</option>
        <option value="8">Chemical-Fertilizer</option>
        <option value="9">Fields Crops</option>
        <option value="10">Vegetable Crop Seeds</option>
        <option value="11">Insecticides</option>
        <option value="12">Bactericides</option>
        <option value="13">Fungicides</option>
     
      </select>
      </div>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>
        {/* ... other form fields */}
        <Button variant="primary" type="submit">
          Create
        </Button>
        <button className="btn btn-danger logout-button"   onClick={handleLogout}>Logout</button>
      </Form>
    </div>
  );
}

export default AddProduct;
