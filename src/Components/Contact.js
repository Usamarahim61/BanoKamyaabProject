// import './App.css';
import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
    <p>This is my Contact Page</p>
    <Link to='/'>Home Page</Link>
    <Link to='/Contact'>Contact US</Link>
    </>
  );
}

export default Contact;
