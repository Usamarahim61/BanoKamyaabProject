// import './App.css';
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
    
    <p>This is my About Page</p>
    <Link to='/'>Home</Link>
    <Link to='/Contact'>Contact US</Link>
    </>
  );
}

export default About;
