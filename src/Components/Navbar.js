import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
<nav className="py-2 navbar navbar-expand-lg fixed-top fw-bold mb-5 bg-body-tertiary">
  <div className="container-fluid">
  <div className="col-3">
     <Link className="navbar-brand fw-bold" to="/">
      <img className="img_snav"  src={require("./images/logo.png")} alt="" ></img>
      Bano Kamyaab
      </Link>    
  </div>

         

    <button className="navbar-toggler justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse col-9 justify-content-between" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Degree Programs
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/PreEngineering">Pre-Engineering</Link></li>
            <li><Link className="dropdown-item" to="/PreMedical">Pre-Medical</Link></li>
            <li><Link className="dropdown-item" to="/ICS">ICS</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Universities
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/PrivateUniversity">Private Universities</Link></li>
            <li><Link className="dropdown-item" to="/GovtUniversity">Govt. Universities</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Scholarships
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/PrivateScholarship">Private Scholarships</Link></li>
            <li><Link className="dropdown-item" to="/GovtScholarship">Govt. Scholarships</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/MDCCT">MDCCT</Link>
        </li>
        {/* <div className="d-flex justify-content-end"> */}
     
      {/* </div> */}
      </ul>
      <ul className="navbar-nav">
    <li className="nav-item dropdown">
    {/* <div class=""> */}
    <button type="button" className="me-2 my-2 nav-link text-light btn btn-success dropdown-toggle px-4 py-2 border rounded-5" data-bs-toggle="dropdown">
      Login
    </button>
    <ul className="dropdown-menu">
      <li><Link class="dropdown-item items-center" to="/Login">Student</Link></li>
      <li><Link class="dropdown-item" to="/Admin">Admin</Link></li>
    </ul>
  {/* </div> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-light btn btn-success py-2 px-4 rounded-5  my-2" aria-current="page" to="/Register">Register</Link>
        </li>
      </ul>
    </div>
    {/* <div className="collapse navbar-collapse col-2 d-flex justify-content-end" id="navbarNavDropdown"> */}

    {/* </div> */}
  </div>
</nav>
</>
  );
}

export default Navbar;