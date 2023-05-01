import Navbar1 from '../Navbar1';
import Popup1 from '../Popup1';
import { Link } from "react-router-dom"; 
import React, { useState } from 'react';
import "../CSS/Userhome.css";
import Sidebar from '../Sidebar';


function CareerICS() {

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
          <p ><span className='fs-5 fonttext'>Career Path for<br></br></span><span className='ribbonh1 fs-2 '>INTERMEDIATE IN COMPUTER SCIENCE</span></p>
        </div>
      </div>

      <div className="d-flex justify-content-between">
      <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/SoftwareEngineer.png") }className="img-fluid" width={"100%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Software Engineering</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <p className='text-truncate p-3 '>            

        Web Designer<br></br>
        Front end Developer<br></br>
        Backend Developer,
        MERN,
        MEAN,
        Full Stack Developer
        Mobile App Developer
        Game designer
        </p>
        <a className="text-decoration-none text-primary px-5 " onClick={togglePopup3}>See More <i class="bi bi-arrow-right"></i></a>
       </div>
     </div>
     <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/ComputerScienceEngineer.png")} className="img-fluid" width={"100%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Computer Science</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <p className='text-truncate p-3'>                
        AI designer/developer<br></br>
        Computer Engineer<br></br>
        Computer Security Analyst,
        Database Developer
        </p>
        <a className="text-decoration-none text-primary px-5  " onClick={togglePopup4}>See More <i class="bi bi-arrow-right"></i></a>

       </div>
     </div>
     <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/CyberSecurityEngineer.jpg")} className="img-fluid" width={"100%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Cyber Security</h5>
        <p className='text-truncate p-3'>
            Penetration Tester<br></br>
            Security engineers<br></br>
            Security Engineer,
            Forensics Analyst

        </p>
        <a className="text-decoration-none text-primary px-5  " onClick={togglePopup5}>See More <i class="bi bi-arrow-right"></i></a>
       
       </div>
     </div>
      </div>


      
      
  </div>

   
  {isOpen1 && <Popup1
      content={<>
        
        <div>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Software Engineering</h5>

            <ol className='fs-5'>
        
                <li>Web Designer</li>
                <li>Front end Developer</li>
                <li>Backend Developer</li>
                <li>MERN</li>
                <li>MEAN</li>
                <li>Full Stack Developer</li>
                <li>Mobile App Developer</li>
                <li>Game designer</li>
            </ol>


        </div>

      </>}
      handleClose={togglePopup3}
    />}

{isOpen2 && <Popup1
      content={<>
        
        <div>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Computer Science</h5>

        <ol className='fs-5'>
        
                <li>AI designer/developer</li>
                <li>Computer Engineer</li>
                <li>Computer Security Analyst</li>
                <li>Database Developer</li>
                <li>Hardware Systems Designer</li>
                <li>Professor/Teacher</li>
                <li>Robotics Specialist</li>
                <li>Systems Designer</li>
            </ol>
        </div>

      </>}
      handleClose={togglePopup4}
    />}

{isOpen3 && <Popup1
      content={<>
        
        <div>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Cyber Security</h5>

            <ol className='fs-5'>
                <li>Penetration Tester</li>
                <li>Security Engineer</li>
                <li>Forensics Analyst</li>
                <li>Information Security Officer</li>
                <li>Risk Analyst</li>
                <li>Incident Response Analyst</li>
                <li>Management and administration</li>
                <li>Security Architect</li>
                <li>IT security administrator</li>
                <li>Ethical Hacker</li>
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

export default CareerICS;
