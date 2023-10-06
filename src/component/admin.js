


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import adminServices from '../services/admin.services';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  
  const handleLogout = () => {
    // Perform logout logic here
    sessionStorage.clear();
    alert('Logged out');
    history.push('/login');
  };

  const handleDelete = (userId) => {
    // Delete user by userId

    adminServices.removeSeller('userId')
      .then(response => {
        // Update users after successful deletion
        setUsers(users.filter(user => user.userId !== userId));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  useEffect(() => {
    // Fetch users from the database
    adminServices.getSeller('Admin/GetUsers') // Replace with your API endpoint to fetch users
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2 style={{color:'Black'}}>User List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{color:'white'}}>First Name</th>
            <th style={{color:'white'}}>Last Name</th>
            <th style={{color:'white'}}>Email</th>
            <th style={{color:'white'}}>Mobile No</th>
            <th style={{color:'white'}}>GSTIN No</th>
            <th style={{color:'white'}}>City</th>
            <th style={{color:'white'}}>Role Type</th>
            <th style={{color:'white'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.userId}>
              <td style={{color:'white'}}>{user.firstName}</td>
              <td style={{color:'white'}}>{user.lastName}</td>
              <td style={{color:'white'}}>{user.email}</td>
              <td style={{color:'white'}}>{user.mobNo}</td>
              <td style={{color:'white'}}>{user.gstinNo}</td>
              <td style={{color:'white'}}>{user.city}</td>
              <td style={{color:'white'}}>{user.roleType}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(user.userId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Admin;

