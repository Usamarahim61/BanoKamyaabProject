import Navbar1 from '../Navbar1';
import Popup1 from '../Popup1';
import { Link } from "react-router-dom"; 
import React, { useState } from 'react';
import "../CSS/Userhome.css";
import Sidebar from '../Sidebar';


function CareerEngineering() {

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
    <Navbar1/>

    <Sidebar/>



    <div className="shadow-lg p-5 container mt-4 pt-5">
      <div className='d-flex justify-content-center text-center mb-3 py-3 rounded-3  mx-5'>
        <div className='ribbonhead'> 
          <p ><span className='fs-3 fonttext'>Career Path for<br></br></span><span className='ribbonh1 fs-1 '>Pre-Engineering</span></p>
        </div>
      </div>

      <div className="d-flex justify-content-between">
      <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/MechanicalEng.png") }className="img-fluid" width={"80%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Mechanical Engineering</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <p className='text-truncate p-3'>            

        Auto research engineers<br></br>
        Combustion engineers<br></br>
        Engine designers
        Heating and cooling systems engineers
        Robotic engineers
        Robotics engineers
        Tool and die engineers
        Tool engineers
        </p>
        <a className="text-decoration-none text-primary px-5 " onClick={togglePopup3}>See More <i class="bi bi-arrow-right"></i></a>
       </div>
     </div>
     <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/ElectricalEng.png")} className="img-fluid" width={"80%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Electrical Engineering</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <p className='text-truncate p-3 pb-5'>                
            Computer engineering<br></br>
            Advanced automation and robotic systems,
            Aerospace and space defense systems
            Automotive advanced driver assistance systems
        </p>
        <a className="text-decoration-none text-primary px-5  " onClick={togglePopup4}>See More <i class="bi bi-arrow-right"></i></a>

       </div>
     </div>
     <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/CivilEng.jpg")} className="img-fluid" width={"80%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Civil Engineering</h5>
        <p className='text-truncate p-3'>
            Architectural engineers<br></br>
            Bridge engineers<br></br>
            Construction engineers,
            Facilities engineers
            Geotechnical engineers
        </p>
        <a className="text-decoration-none text-primary px-5  " onClick={togglePopup5}>See More <i class="bi bi-arrow-right"></i></a>
       
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
        
        <div>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Mechanical Engineering</h5>

            <ol className='fs-5'>
                <li>Auto research engineers</li>
                <li>Combustion engineers</li>
                <li>Engine designers</li>
                <li>Heating and cooling systems engineers</li>
                <li>Robotic engineers</li>
                <li>Robotics engineers</li>
                <li>Tool and die engineers</li>
                <li>Tool engineers</li>
            </ol>


        </div>

      </>}
      handleClose={togglePopup3}
    />}

{isOpen2 && <Popup1
      content={<>
        
        <div>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Electrical Engineering</h5>

        <ol className='fs-5'>
                <li>Computer engineering</li>
                <li>Advanced automation and robotic systems</li>
                <li>Aerospace and space defense systems</li>
                <li>Automotive advanced driver assistance systems</li>
                <li>Electronic Communication Devices</li>
                <li>Biomedical engineering</li>
                <li>Engineering management</li>
            </ol>
        </div>

      </>}
      handleClose={togglePopup4}
    />}

{isOpen3 && <Popup1
      content={<>
        
        <div>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Civil Engineering</h5>

            <ol className='fs-5'>
                <li>Architectural engineers</li>
                <li>Bridge engineers</li>
                <li>Construction engineers</li>
                <li>Facilities engineers</li>
                <li>Geotechnical engineers</li>
                <li>Highway engineers</li>
                <li>Hydrographic engineers</li>
                <li>Research hydraulic engineers</li>
                <li>Structural engineers</li>
                <li>Transportation engineers</li>
            </ol>


        </div>

      </>}
      handleClose={togglePopup5}
    />}

{isOpen4 && <Popup1
      content={<>
        
        <p className="fw-bold">Do you want to start test?</p>
        <div className='text-center d-flex flex-column'>
        <Link className="btn btn-primary" to={"/Section-5"}>Attempt Test</Link>       
        </div>

      </>}
      handleClose={togglePopup6}
    />}

{isOpen5 && <Popup1
      content={<>
        
        <p className="fw-bold">Do you want to start test?</p>
        <div className='text-center d-flex flex-column'>
        <a className="btn btn-primary" href="/Creativity">Attempt Test</a>       
        </div>

      </>}
      handleClose={togglePopup7}
    />}


    </>
  );
}

export default CareerEngineering;
