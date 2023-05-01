// import './App.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function AdminSidebar() {
   
  return (
    <>
    <div className="offcanvas offcanvas-start overflow-auto" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <h4 className="offcanvas-title" id="offcanvasScrollingLabel">     
    <Link className="navbar-brand fw-bold" to="/">
      <img className="img_snav"  src={require("../images/logo.png")} alt="logo" ></img>
      Bano Kamyaab
      </Link> </h4>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className='d-flex pt-2 flex-wrap'>
      {/* <div class="offcanvas-body  shadow ms-3">
        <Link to="/UserProfile" className=' text-decoration-none d-flex flex-column align-items-center '>
          <i class="bi bi-people-fill fs-1 "></i>
        <p className="mb-0">Profile</p>
        </Link>
      </div>   */}
      <div className="offcanvas-body  shadow mx-3">
        <Link to="/AdminDash" className=' text-decoration-none d-flex flex-column align-items-center'>
          <i className="bi bi-person-fill fs-1"></i>
        <p className="mb-0">Dashboard</p>
        </Link>
      </div>   
  </div>

  <div className='d-flex pt-3 flex-wrap'>
      <div className="offcanvas-body  shadow ms-3 col-5">
        <Link to="/AddDegree" className=' text-decoration-none d-flex flex-column align-items-center '>

        <img src={require("../images/degreeIcon.png")} className="img-fluid " width={"40%"}></img>
        <p className="text-center mb-0">Manage <br></br> Degree Programs</p>
        </Link>
      </div>
      <div className="offcanvas-body  shadow mx-3 col-5">
        <Link to="/AddCareer" className=' text-decoration-none d-flex flex-column align-items-center '>

        <img src={require("../images/careerIcon.png")} className="img-fluid " width={"40%"}></img>
        <p className="mb-0" >Manage Career Path</p>
        </Link>
      </div>
      
  </div>
  <div className="d-flex mt-3 flex-wrap">   
      <div className="offcanvas-body  shadow col-5">
        <Link  className=' text-decoration-none d-flex flex-column align-items-center '>
        <img src={require("../images/universityIcon.png")} className="img-fluid " width={"40%"}></img>
         
        <p className="mb-0" >Manage Universities</p>
        </Link>
      </div> 
      <div className="offcanvas-body  shadow col-5">
        <Link to="/AddScholarship" className=' text-decoration-none d-flex flex-column align-items-center '>

        <img src={require("../images/scholarshipIcon.png")} className="img-fluid " width={"40%"}></img>
        <p className="mb-0" >Manage Scholarship</p>
        </Link>
      </div>
      <div className="offcanvas-body  shadow ms-3">
        <Link to="" className=' text-decoration-none d-flex flex-column align-items-center '>
          <i className="bi bi-clipboard-check-fill fs-1"></i>
        <p className="mb-0" >Manage MDCCT Test</p>
        </Link>
      </div>
      </div> 

</div>
    </>
  );
}

export default AdminSidebar;
