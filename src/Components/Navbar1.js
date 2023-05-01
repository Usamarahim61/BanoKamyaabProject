import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./CSS/Sidebar.scss";
import "./CSS/navbaruser.css";
// import Sidebar from "./Sidebar";

function Navbar1() {

  const navbar12={
    fontsize:"30px",
    cursor:"pointer"
  };

  const navigate = useNavigate();

  const [userdata, setUserdata] = useState({
    photo: "",
    fname: "",

});

const callProfile = async () => {
  try {
      const res = await fetch('/UserProfile', {
          method: "GET",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
          },
          credentials: "include"
      });

      const data = await res.json();
      console.log(data);

      setUserdata(data);


      if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
      }
  } catch (err) {

      console.log(err);
      navigate("/Login");

  }
}

const logout =()=>{

  
  
}

useEffect(() => {
  callProfile();
}, []);

const picurl="http://localhost:4000/public/uploads/"

  return (
    <>


<nav className="py-2 navbar navbar-expand-lg fixed-top fw-bold mb-5 bg-body-tertiary">

  <div className="container-fluid d-flex justify-content-between">
  <div className=" d-flex align-items-center col-4">
     <Link className="navbar-brand fw-bold" to="/">
      <img className="img_snav"  src={require("./images/logo.png")} alt="" ></img>
      Bano Kamyaab
      </Link> 
      <Link  data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-list fs-2"></i></Link>
 
           
  </div>

         

    <button className="navbar-toggler justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse col-8 justify-content-end text-center" id="navbarNavDropdown">
      <ul className="navbar-nav">

        <li className="nav-item text-center d-flex justify-content-center align-items-center my-2">
          <Link  className="fs-5 me-4 m-0 text-center text-decoration-none text-dark " aria-current="page" to="/UserProfile">
          {userdata.photo?<img src={picurl+userdata.photo} alt="User" className="avatar me-2"/>:<img className="avatar me-2"  src={"https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"} alt="Pic" />}
          {userdata.fname}
          </Link>
        </li>

        <li className="nav-item my-2">
          <Link className="nav-link btn btn-success px-4 rounded-5 text-light" aria-current="page" to="/logout">Log Out</Link>
        </li>
        {/* <div className="d-flex justify-content-end"> */}
     
      {/* </div> */}
      </ul>
    </div>
    {/* <div className="collapse navbar-collapse col-2 d-flex justify-content-end" id="navbarNavDropdown"> */}

    {/* </div> */}
  </div>
</nav>

</>
  );
}

export default Navbar1;