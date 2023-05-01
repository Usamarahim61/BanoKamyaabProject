import Navbar1 from './Navbar1';
import Popup1 from './Popup1';
import { Link, useNavigate } from "react-router-dom"; 
import React, { useEffect, useState } from 'react';
import "./CSS/Userhome.css";
import Sidebar from './Sidebar';


function User() {

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
     
     useEffect(() => {
       callProfile();
     }, []);
     
     const picurl="http://localhost:4000/public/uploads/"

  return (
    <>
    <Navbar1/>
    {/* <div className='pt-5 mt-5'>
     <Sidebar/>     
    </div> */}
    <Sidebar/>

    <div className="shadow-lg p-5 container mt-4 pt-5">
      <div className='d-flex justify-content-center text-center mb-2 py-2 rounded-3  mx-5'>
        <div className='ribbonhead'> 
          <p >Welcome To <br></br><span className='ribbonh1'>Dashboard</span></p>
        </div>
      </div>

      

      <div class="ribbon123 ">
      <span class="ribbon31">Hello, {userdata.fname}</span>
    </div>

      <div className="d-flex justify-content-between">
      <div class="card border border-0 shadow-lg mt-4 me-5" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../Components/images/AttemptTest.png")} className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">MDCCT</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a class="btn btn-primary mb-3" onClick={togglePopup6}>Attempt Test <i class="bi bi-chevron-double-right"></i></a>
       </div>
     </div>
    
     <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../Components/images/university.png")} className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Universities</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a class="btn btn-primary  mb-3" onClick={togglePopup4}>View University Details <i class="bi bi-chevron-double-right"></i></a>
       </div>
     </div>
     <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../Components/images/AdminScholarship.png")} className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Scholarships</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a class="btn btn-primary  mb-3"onClick={togglePopup5}>View Scholarships Details <i class="bi bi-chevron-double-right"></i></a>
       </div>
     </div>
      </div>
      <div className='d-flex justify-content-center mb-5 mt-4'>
      <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../Components/images/degree.png")} className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Degree Programs</h5>
        <a class="btn btn-primary  mb-3" onClick={togglePopup3}>View Degree Program Details <i class="bi bi-chevron-double-right"></i></a>
       </div>
     </div>
     <div class="card border border-0 mt-4 ms-5 shadow-lg" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../Components/images/careerpath.png")} className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Career Domains </h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <Link class="btn btn-primary mb-3" to={"/CareerPath"}>View Career Domains <i class="bi bi-chevron-double-right"></i></Link>
       </div>
     </div>
      </div>

      
      
  </div>


  <div className='container-fluid bg-dark text-light'>
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
    </div>
   
  {isOpen1 && <Popup1
      content={<>
        
        <p className="fw-bold">Which Degree Programs you want to View?</p>
        <div className='text-center d-flex flex-column'>
        <Link className="btn btn-primary" to={"/UserPreEngineering"}>Pre-Engineering</Link>
        <Link className="btn btn-primary mt-3" to={"/UserPreMedical"}>Pre-Medical</Link>  
        <Link className="btn btn-primary mt-3" to={"/UserICS"}>ICS</Link>        
        </div>

      </>}
      handleClose={togglePopup3}
    />}

{isOpen2 && <Popup1
      content={<>
        
        <p className="fw-bold">Which Universities you want to View?</p>
        <div className='text-center d-flex flex-column'>
        <Link className="btn btn-primary" to={"/UserPrivateUni"}>Private Universities</Link>
        <Link className="btn btn-primary mt-3" to={"/UserGovtUni"}>Govt. Universities</Link>          
        </div>

      </>}
      handleClose={togglePopup4}
    />}

{isOpen3 && <Popup1
      content={<>
        
        <p className="fw-bold">Which Scholarships you want to View?</p>
        <div className='text-center d-flex flex-column'>
        <Link className="btn btn-primary" to={"/UserPrivateScholarship"}>Private Scholarships</Link>
        <Link className="btn btn-primary mt-3" to={"/UserGovtScholarship"}>Govt. Scholarships</Link>          
        </div>

      </>}
      handleClose={togglePopup5}
    />}

{isOpen4 && <Popup1
      content={<>
        
        <p className="fw-bold">Do you want to Attempt Test?</p>
        <div className='text-center'>
        <Link className="btn btn-primary" to={"/MDCCTmenu"}>Attempt Test</Link>
         
        </div>

      </>}
      handleClose={togglePopup6}
    />}

{isOpen5 && <Popup1
      content={<>
        
        <p className="fw-bold">Do you want to View Career Domains?</p>
        <div className='text-center'>
        <Link className="btn btn-primary" to={"/"}>View Career Domains</Link>
         
        </div>

      </>}
      handleClose={togglePopup7}
    />}


    </>
  );
}

export default User;
