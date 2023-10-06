import React, {Fragment,useState} from 'react';
import axios from 'axios';
//import './App.css';
import '../index'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import userServices from '../services/user.services';




function Registration(){


  const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [mobileNo, setMobileNo] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [confirmPassword, setConfirmPassword] = useState(''); // Define confirmPassword state
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [city, setCity] = useState(' ');
    const [GstNo, setGstNo] = useState(' ');
    const [selectedRole, setSelectedRole] = useState('');

    const handleRoleChange = (event) => {
      const role = event.target.value;
      setSelectedRole(role);}
    const handleNameChange = (value) =>{
    
        setFirstName(value);
     }
    
     const handleLastChange =(value) =>{
    
        setLastName(value);
     }
    
     
     const handleemailChange =(value) =>{
        setEmail(value);
     }
    
     const handleMobileNoChange = (value) => {
      const numericValue = value.replace(/\D/g, '');
    
      const limitedValue = numericValue.slice(0, 10);
    
      setMobileNo(limitedValue);
    };
    
    
    
    const handleGstChange = (value) => {
      const alphanumericValue = value;
    
      const limitedValue = alphanumericValue.slice(0, 15);
    
      setGstNo(limitedValue);
    };
    
    const handlePasswordChange = (value) => {
        setPassword(value);
        setPasswordMatchError(value !== confirmPassword);
      }
    
      const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
        setPasswordMatchError(value !== password);
      }
    
    const handleCityChange =(value) =>{
        setCity(value);
    }
    
    // const handleRoleTypeChange = (value) =>{
    //   setRoleType(value);
    // }
    

    const handleSave =()=>{
      console.log('handleSave function executed');  
      
      const data ={
            firstName : firstName,
            lastName : lastName,
            email : email,
            mobNo :mobileNo,
             gstinNo :GstNo,
            city : city,
            roleType :selectedRole,
            password :password,
           
        };
        console.log('Attempting registration...'); 
    
   
        userServices.registration(data).then((result) =>{
      alert("User Added")
       //const id=parseInt(result.data.userId);
       debugger;
     // sessionStorage.setItem('userId',result.data.userId);
      //sessionStorage.setItem('email',result.data.email);
      // console.log('userId');
      // if(result.data.roleType ==="Seller")
      history.push('/Home');
      //else {
         // history.push('/ProductCardCustomer');
      // }
      
      
      
      }).catch((error) =>{
          alert("User Not Added");
      })
      
    }
    
    return (
        <Fragment>
          <div className='app'>
          <div className="container" >
            <h1 style={{ color: 'white' }}>Registration</h1>
            <form className="row g-1">
              <div className="col-md-3">
                <label htmlFor="firstName" className="form-label"><strong style={{ color: 'white' }}>First Name</strong></label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  placeholder="Enter First Name"
                  onChange={(e) => handleNameChange(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="lastName" className="form-label"><strong style={{ color: 'white' }}>Last Name</strong></label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  placeholder="Enter Last Name"
                  onChange={(e) => handleLastChange(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-3">
      <label htmlFor="email" className="form-label">
      <strong style={{ color: 'white' }}>Email</strong>  
      </label>
      <input
        type="email"
        id="email"
        className="form-control"
        placeholder="Enter email"
        onChange={(e) => handleemailChange(e.target.value)}
        required // Add the required attribute here
      />
    </div>
    
    <div className="col-md-3">
            <label htmlFor="mobileNo" className="form-label"><strong style={{ color: 'white' }}>Phone No</strong></label>
            <input
              type="text"
              id="mobileNo"
              className="form-control"
              placeholder="Enter Mobile"
              value={mobileNo}
              onChange={(e) => handleMobileNoChange(e.target.value)}
            />
          </div>
            
              <div className="col-md-3">
                <label htmlFor="password" className="form-label"><strong style={{ color: 'white' }}>Password</strong></label>
                <input
                  type="text"
                  id="password"
                  className="form-control"
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="confirmPassword" className="form-label"><strong style={{ color: 'white' }}>Confirm Password</strong></label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                />
                {passwordMatchError && (
                  <div className="alert alert-danger" role="alert">
                    Passwords do not match.
                  </div>
                )}
              </div>
              <div className="col-md-3">
                <label htmlFor="city" className="form-label"><strong style={{ color: 'white' }}>City</strong></label>
                <input
                  type="text"
                  id="city"
                  className="form-control"
                  placeholder="Enter City Name"
                  onChange={(e) => handleCityChange(e.target.value)}
                />
           
           
              </div>
              <br></br><br></br>
              <div className="col-md-3">
              <br></br>
      <label htmlFor="RoleType"><strong style={{ color: 'white' }}>Select a role</strong>      :</label>
      <select id="RoleType" value={selectedRole} onChange={handleRoleChange}>        
        <option value="Seller">Seller</option>
        <option value="Customer">Customer</option>
      </select>
      </div>



              {/* <div className="col-md-3">
                <label htmlFor="RoleType" className="form-label">RoleType</label>
                <input
                  type='text'
                  id="RoleType"
                  className="form-control"
                  placeholder='Select Proper Role'
                  onChange={(e) => handleRoleTypeChange(e.target.value)}
                />
              </div> */}
             
            
          <div className="col-md-3">
            <label htmlFor="GstNo" className="form-label"><strong style={{ color: 'white' }}>GstNo</strong></label>
            <input
              type="text"
              id="GstNo"

              className="form-control"
              placeholder="Enter GSTNO"
              
              value={GstNo}
              onChange={(e) => handleGstChange(e.target.value)}
            />
          </div>
              <div className="col-12">
                <button className="btn btn-primary" onClick={handleSave}>Register</button>
              </div>
            </form>
          </div></div>
        </Fragment>
      );
      
      
      
    }
    export default Registration ;