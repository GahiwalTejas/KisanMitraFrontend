import React from 'react';
import '../AboutUs.css'; // Import your custom CSS file

const AboutUs = () => {
    return (
        <div>
            <div className="card mb-3 text-center my-card">
                <div className="card-body">
                    <h5 className="card-title" style={{ color: 'lightyellow' }}>About Us</h5>
                    <p className="card-text" style={{ color: 'lightyellow' }}>E-Commerce Platform for Small Scale Vendors is a web-based application which intends to create a supportive environment for local vendors. It is a small step towards the 'Make in India' initiative. The main inspiration behind this project is Open Network Digital Commerce (ONDC) program run by the Indian Government. There are three modules User, Admin, Seller In which Admin can control all services and also able to maintain the user records, Seller can add / update / delete the products. This application provides user-friendly, secure, faster and better communication.The platform displays and provides various numbers of products to purchase for end users.</p>
                </div>
            </div>
            <div className="card text-center my-card">
                <div className="card-body">
                    <h3 style={{ color: 'lightyellow' }}>Mr. Tejas Gahiwal</h3>
                    <p className="card-text" style={{ color: 'lightyellow' }}>PRN-230340820027</p>
                    <p className="card-text" style={{ color: 'lightyellow' }}>PG-DAC CDAC March-2023</p>
                </div>
            </div>
            <div className="card text-center my-card">
                <div className="card-body">
                    <h1 className="card-title text-primary" style={{ color: 'lightyellow' }}>Meet Our Team</h1>
                    <h3 style={{ color: 'lightyellow' }}>Mr. Vinit Ingale</h3>
                    <p className="card-text" style={{ color: 'lightyellow' }}>PRN-230340820031</p>
                    <p className="card-text" style={{ color: 'lightyellow' }}>PG-DAC CDAC March-2023</p>
                </div>
            </div>
           
            <div className="card text-center my-card">
                <div className="card-body">
                    <h3 style={{ color: 'lightyellow' }}>Mr. Alif Shaikh</h3>
                    <p className="card-text" style={{ color: 'lightyellow' }}>PRN-230340820087</p>
                    <p className="card-text" style={{ color: 'lightyellow' }}>PG-DAC CDAC March-2023</p>
                </div>
            </div>
            <div className="card text-center my-card">
                <div className="card-body">
                    <h1 className="card-title text-primary" style={{ color: 'lightyellow' }}>Under Guidance of</h1>
                    <h3 style={{ color: 'lightyellow' }}>Mr. Rahul Sansuddi</h3>
                    <p className="card-text" style={{ color: 'lightyellow' }}>Project Guide</p>
                    <p className="card-text" style={{ color: 'lightyellow' }}>SUNBEAM INSTITUTE OF INFORMATION TECHNOLOGY, KARAD</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;