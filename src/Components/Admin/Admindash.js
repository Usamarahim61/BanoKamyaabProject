import AdminNavbar from './AdminNavbar';
import Popup1 from '../Popup1';
import { Link } from "react-router-dom"; 
import React, { useState } from 'react';
import "../CSS/Userhome.css";

import AdminSidebar from './AdminSidebar';


function Admindash() {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
 
    const togglePopup3 = () => {
      setIsOpen1(!isOpen1);
    }
    const togglePopup4 = () => {
      setIsOpen2(!isOpen2);
    }
    const togglePopup5 = () => {
      setIsOpen3(!isOpen3);
    }
    const togglePopup6 = () => {
      setIsOpen4(!isOpen4);
    }

    const togglePopup7 = () => {
      setIsOpen5(!isOpen5);
    }


    const width = {
        width: "19rem"
       };

  return (
    <>
    <AdminNavbar/>
    <AdminSidebar/>

    <div className="shadow-lg p-5 container mt-4 pt-5">
      <div className='d-flex justify-content-center text-center mb-1 py-3 rounded-3  mx-5'>
        <div className='ribbonhead'> 
          <p >Welcome To <br></br><span className='ribbonh1'>Admin Dashboard</span></p>
        </div>
      </div>

      

      <div class="ribbon123 ">
      <span class="ribbon31">Hello, Admin</span>
    </div>

      <div className="d-flex justify-content-between">
      <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/AdminDegree.png")} className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Manage Degree Programs</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <Link class="btn btn-primary  mb-3"  onClick={togglePopup3}>Manage Degree Program Details <i class="bi bi-chevron-double-right"></i></Link>
       </div>
     </div>
     <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/AdminUniversity.png")} className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Manage Universities</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <Link class="btn btn-primary  mt-4" onClick={togglePopup4}>Manage University Details <i class="bi bi-chevron-double-right"></i></Link>
       </div>
     </div>
     <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/scholarship.png")} className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Manage Scholarships</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <Link class="btn btn-primary  mt-4" onClick={togglePopup5}>Manage Scholarships Details <i class="bi bi-chevron-double-right"></i></Link>
       </div>
     </div>
      </div>
      <div className='d-flex justify-content-center mb-5 mt-4'>
      <div class="card border border-0 shadow-lg mt-4 me-5" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/AdminTest.png")} className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">MDCCT</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a class="btn btn-primary mt-4" onClick={togglePopup6}>Manage Test <i class="bi bi-chevron-double-right"></i></a>
       </div>
     </div>
     <div class="card border border-0 mt-4 ms-5 shadow-lg" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/AdminCareer.png")} className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Manage Career Domains </h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a class="btn btn-primary mb-3" onClick={togglePopup7}>Manage Career Domains <i class="bi bi-chevron-double-right"></i></a>
       </div>
     </div>
      </div>

      
      
  </div>


  {/* <div className='container-fluid bg-dark text-light'>
    <div class="container d-flex justify-content-between py-5">
    <div>
        <h3 className='fw-bold'>
            Contact Us
        </h3>
        <p><strong>Email:</strong> Info@banokamyaab.com</p>
        <p><strong>Phone:</strong> +92 00</p>
    </div>
    <div>
        <h3 className='fw-bold'>
            Follow Us
        </h3>
        <div className='d-flex justify-content-center hover'>
        <a className='bi bi-twitter fs-4 anchor' href='/'></a>
        <a className='bi bi-facebook fs-4 anchor mx-3' href='/'></a>
        <a className='bi bi-instagram fs-4 anchor me-3' href='/'></a>
        <a className='bi bi-linkedin fs-4 anchor' href='/'></a>
        </div>
    </div>
    </div>
    <div class="container text-center text-light border-top pt-3 pb-5">
    <div> © Copyright <strong><span>Bano Kamyaab</span></strong>. All Rights Reserved</div>
  </div>
    </div> */}
   
  {isOpen1 && <Popup1
      content={<>
        
        <p className="fw-bold">Which Degree Programs you want to Manage?</p>
        <div className='text-center d-flex flex-column'>
        <Link className="btn btn-primary" to={"/ManageEngineering"}>Manage Pre-Engineering</Link>
        <Link className="btn btn-primary mt-3" to={"/ManageMedical"}>Manage Pre-Medical</Link>  
        <Link className="btn btn-primary mt-3" to={"/ManageICS"}>Manage ICS</Link>        
        </div>

      </>}
      handleClose={togglePopup3}
    />}

{isOpen2 && <Popup1
      content={<>
        
        <p className="fw-bold">Which Universities you want to Manage?</p>
        <div className='text-center d-flex flex-column'>
        <Link className="btn btn-primary" to={"/ManagePrivateUniversity"}>Manage Private Universities</Link>
        <Link className="btn btn-primary mt-3" to={"/ManageGovtUniversity"}>Manage Govt. Universities</Link>          
        </div>

      </>}
      handleClose={togglePopup4}
    />}

{isOpen3 && <Popup1
      content={<>
        
        <p className="fw-bold">Which Scholarships you want to Manage?</p>
        <div className='text-center  d-flex flex-column'>
        <Link className="btn btn-primary" to={"/ManagePrivateScholar"}>Manage Private Scholarships</Link>
        <Link className="btn btn-primary mt-3" to={"/ManageGovtScholar"}>Manage Govt. Scholarships</Link>          
        </div>

      </>}
      handleClose={togglePopup5}
    />}

{isOpen4 && <Popup1
      content={<>
        
        <p className="fw-bold">Which MDCCT Test you want to Manage?</p>
        <div className='text-center  d-flex flex-column'>
        <Link className="btn btn-primary" to={"/DemographicPage"}>Manage Demographics</Link><br></br>
        <Link className="btn btn-primary" to={"/Emotional"}>Manage Emotional Intelligence</Link><br></br>
        <Link className="btn btn-primary" to={"/Personality"}>Manage Personality</Link><br></br>
        <Link className="btn btn-primary" to={"/MDCCTmenu"}>Manage Subject Competency</Link><br></br>
        <Link className="btn btn-primary" to={"/AdminCreativity"}>Manage Creativity</Link><br></br>
        
        </div>

      </>}
      handleClose={togglePopup6}
    />}

{isOpen5 && <Popup1
      content={<>
        
                <p className="fw-bold text-center">Manage Career Domains?</p>
        <div className='text-center d-flex flex-column'>
        <Link className="btn btn-primary" to={"/ManageEngineeringCareer"}>Manage Pre Engineering</Link>
        <Link className="btn btn-primary mt-3" to={"/ManageMedicalCareer"}>Manage Pre Medical</Link>
        <Link className="btn btn-primary mt-3" to={"/ManageICSCareer"}>Manage ICSl</Link>

         
        </div>

      </>}
      handleClose={togglePopup7}
    />}


    </>
  );
}

export default Admindash;
