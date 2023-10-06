// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import { useHistory } from 'react-router-dom';

// function Fertilizer() {
//   const [products, setProducts] = useState([]);

 
//         const response = axios.get('http://localhost:52150/api/ProductCategories/1');
//         console.log("after url and before data");

        
//         setProducts(response.data);
//     console.log("after data")  ;
    
  

 


//   return (
//     <div>
//       <h1>Fertilizer Products</h1>
//       <Row xs={1} md={2} lg={3} className="col-md-12">
//         {products.map((item) => (
//           <Col key={item.productId}>
//             <Card style={{ height: '600px', backgroundColor: '#f0f0f0' }}>
//               <Card.Img
//                 variant="top"
//                 src={item.image}
//                 alt={`${item.productName} Image`}
//                 style={{ height: '350px' }}
//               />
//               <Card.Body>
//                 <Card.Title>{item.productName}</Card.Title>
//                 <Card.Text>
//                   Price: {item.price}
//                   <br />
//                   Qty: {item.qty}
//                   <br />
//                   Volume: {item.volume}
//                   <br />
//                   Brand: {item.brand}
//                 </Card.Text>
//                 <div className="d-flex justify-content-between align-items-center">
                 
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       <br />
      
//     </div>
//   );
// }

// export default Fertilizer;







import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import pesticideServices from '../services/pesticide.services';


function Pesticides() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchFertilizerProducts() {
      try {
        const response = await pesticideServices.getAll('/ProductCategories/3');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching Pesticides products:', error);
      }
    }

    fetchFertilizerProducts();
  }, []);

  return (
    <div>
    <marquee>
  <h1 style={{ color: 'white' }}><strong>Pesticides Products</strong></h1>
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

export default Pesticides;




