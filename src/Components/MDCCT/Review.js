import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Popup from '../Popup';
import Navbar1 from "../Navbar1";
import Sidebar from "../Sidebar";

function Review() {

    const [isOpen1, setIsOpen1] = useState(false);
 
    const togglePopup1 = () => {
      setIsOpen1(!isOpen1);
    }

  return (
    <>
    <Navbar1/>
    <Sidebar/>
    <div className=" mt-5 ">
    <div class="Head">
	    <div class="overlay">
        <h1 className="fw-bold fs-1">REVIEW </h1>
      </div>
    </div>
    </div>
       <div className="container border px-5 pb-1 shadow-lg bg-light">
    <div className="fw-bold fs-5 mt-5 shadow-lg py-3 container d-flex justify-content-between align-items-center">
      <div>
        Section (Demographics)
      </div>
      <div className="fs-1 d-flex col-2">
      <i class="bi bi-check text-success col-6"></i>
      <i class="bi bi-x text-danger col-6"></i>
      </div>
    </div>

    <div className="fw-bold fs-5 mt-5 shadow-lg py-3 container d-flex justify-content-between align-items-center">
      <div>
        Section (Emotional Intelligence)
      </div>
      <div className="fs-1 d-flex col-2">
      <i class="bi bi-check text-success col-6"></i>
      <i class="bi bi-x text-danger col-6"></i>
      </div>
    </div>

    <div className="fw-bold fs-5 mt-5 shadow-lg py-3 container d-flex justify-content-between align-items-center">
      <div>
        Section (Personality)
      </div>
      <div className="fs-1 d-flex col-2">
      <i class="bi bi-check text-success col-6"></i>
      <i class="bi bi-x text-danger col-6"></i>
      </div>
    </div>

    <div className="fw-bold fs-5 mt-5 shadow-lg py-3 container d-flex justify-content-between align-items-center">
      <div>
        Section (Subject Competency)
      </div>
      <div className="fs-1 d-flex col-2">
      <i class="bi bi-check text-success col-6"></i>
      <i class="bi bi-x text-danger col-6"></i>
      </div>
    </div>

    <div className="fw-bold fs-5 mt-5 shadow-lg py-3 container d-flex justify-content-between align-items-center">
      <div>
        Section (Creativity)
      </div>
      <div className="fs-1 d-flex col-2">
      <i class="bi bi-check text-success col-6"></i>
      <i class="bi bi-x text-danger col-6"></i>
      </div>
    </div>

    

    <div className="my-5 d-flex justify-content-between">
            <Link className="btn btn-success px-4 py-2" to="/MDCCTmenu">Go Back</Link>
            {/* <Link className="btn btn-success px-4 py-2" >Finish Attempt</Link> */}
        </div> 
        
    </div>

    {isOpen1 && <Popup
      content={<>
        
        <p className="fw-bold">Do you want to Generate Report?</p>
        <Link className="btn btn-primary" to={"/User"}>Generate Report</Link>
      </>}
      handleClose={togglePopup1}
    />}
    
    </>
    
  );
}

export default Review;