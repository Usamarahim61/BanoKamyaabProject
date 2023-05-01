// import './App.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Sidebar() {
   
  return (
    <>
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title" id="offcanvasScrollingLabel">     
    <Link className="navbar-brand fw-bold" to="/">
      <img className="img_snav"  src={require("./images/logo.png")} alt="logo" ></img>
      Bano Kamyaab
      </Link> </h4>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className='d-flex pt-5 flex-wrap'>
      <div class="offcanvas-body  shadow ms-3">
        <Link to="/UserProfile" className=' text-decoration-none d-flex flex-column align-items-center '>
          <i class="bi bi-people-fill fs-1 "></i>
        <p clasName="fs-3">Profile</p>
        </Link>
      </div>  
      <div class="offcanvas-body  shadow mx-3">
        <Link to="/User" className=' text-decoration-none d-flex flex-column align-items-center'>
          <i class="bi bi-person-fill fs-1"></i>
        <p clasName="fs-4">Dashboard</p>
        </Link>
      </div>   
  </div>

  <div className='d-flex pt-5 flex-wrap'>
      <div class="offcanvas-body  shadow ms-3">
        <Link to="/MDCCTmenu" className=' text-decoration-none d-flex flex-column align-items-center '>
          {/* <i class="bi bi-people-fill fs-1 "></i> */}
          {/* <img src={require("./images/exam.png")} className="" width={"70px"}></img> */}
          <i class="bi bi-clipboard-check-fill fs-1"></i>
        <p clasName="fs-3">MDCCT</p>
        </Link>
      </div>    

      <div class="offcanvas-body  shadow ms-3">
        <Link to="/CareerPath" className=' text-decoration-none d-flex flex-column align-items-center '>
          {/* <i class="bi bi-people-fill fs-1 "></i> */}
          {/* <img src={require("./images/exam.png")} className="" width={"70px"}></img> */}
          <i class="bi bi-clipboard-check-fill fs-1"></i>
        <p clasName="fs-3">Career Path</p>
        </Link>
      </div> 
  </div>

</div>
    </>
  );
}

export default Sidebar;
