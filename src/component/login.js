import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import userServices from "../services/user.services";

function Login(){
    const history = useHistory();

const [email,setEmail] = useState('');
const [password,setPassword] =useState('');

const handleEmailChange = (value) =>{
    setEmail(value);
}

const handlePasswordChange = (value) =>{

    setPassword(value);
}


const handleLogin =() =>{
const data ={
    email:email,
    password:password
}

userServices.login(data).then((result) =>{
alert("Login Succesfully");
 //const id=parseInt(result.data.userId);
 debugger;
sessionStorage.setItem('userId',result.data.userId);
sessionStorage.setItem('email',result.data.email);
window.sessionStorage.setItem("isUserLoggedIn", "true");

console.log('userId');
if(result.data.roleType ==="Seller")
history.push('/ProductCard');
else if(result.data.roleType ==="Customer"){
    history.push('/ProductCardCustomer');
}
else if(result.data.roleType ==="Admin"){
    history.push('/admin');   
}



}).catch((error) =>{
    alert("Invalid Credential");
})

}

    return (
    
    <Fragment>
    <div className="app">
               <div className="container" >
         {/* <div className="login-container"> */}
         <div className="col-md-4">
    <label style={{color:'white'}}>Email</label>
        <input type="text" id="email"   className="form-control" onChange={(e) => handleEmailChange(e.target.value)} ></input> <br></br> 
</div>
<div className="col-md-4">
       <label style={{color:'white'}}>Password</label> 
   <input type="text" id="password"  className="form-control" onChange={(e) => handlePasswordChange(e.target.value)}></input>
   </div>

   <div className="col-4">
    <br></br>
<button  className="btn btn-primary" onClick={() => handleLogin()}> Login </button>
</div>
</div>
</div>
    </Fragment>
    );

}
export default Login;