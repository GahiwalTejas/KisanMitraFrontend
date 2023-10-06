import React, { useState } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'transparent', // Change the background color to transparent

};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  cursor: 'pointer',
};

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: 'darkorange' }}>Contact Us</h1>
      {submitted ? (
        <div style={{ color: 'darkorange' }}>
          <p>Thank you for your submission!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" style={{ color: 'darkorange' }}>Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label htmlFor="email" style={{ color: 'darkorange' }}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label htmlFor="message" style={{ color: 'darkorange' }}>Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ ...inputStyle, height: '120px' }}
              required
            />
          </div>
       <center><button type="submit" style={buttonStyle}>Submit</button></center>
        </form>
      )}
    </div>
  );
}

export default ContactUs;