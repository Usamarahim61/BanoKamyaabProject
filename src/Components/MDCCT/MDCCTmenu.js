import Navbar1 from '../Navbar1';
import Popup1 from '../Popup1';
import { Link } from "react-router-dom"; 
import React, { useState } from 'react';
import "../CSS/Userhome.css";
import Sidebar from '../Sidebar';


function MDCCTmenu() {

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
    {/* <div className='pt-5 mt-5'>
     <Sidebar/>     
    </div> */}
    <Sidebar/>



    <div className="shadow-lg p-5 container mt-4 pt-5">
      <div className='d-flex justify-content-center text-center mb-3 py-3 rounded-3  mx-5'>
        <div className='ribbonhead'> 
          <p ><span className="fs-3 fw-bold">MDCCT<br></br></span><span className='ribbonh1 fs-3'>(Multi Dimensional Career Counseling Test)</span></p>
        </div>
      </div>
      <div className=' py-3 d-flex justify-content-end bg-light'>
        <Link className='fw-bold text-white btn btn-info px-4 py-3 homefontsize' to="/Review">Review</Link>
        <Link className='fw-bold ms-3 text-white btn btn-info px-4 py-3 homefontsize'>Generate Report</Link>

      </div>

      <div className="d-flex justify-content-between">
      <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/demographic.png") }className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Demographics</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a class="btn btn-primary  my-3 px-5 " onClick={togglePopup3}>Start Test</a>
       </div>
     </div>
     <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/emotional-intelligence.png")} className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Emotional Intelligence</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a class="btn btn-primary  my-3 px-5" onClick={togglePopup4}>Start Test </a>
       </div>
     </div>
     <div class="card border border-0 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/personality.png")} className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Personality</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a class="btn btn-primary  my-3 px-5"onClick={togglePopup5}>Start Test</a>
       </div>
     </div>
      </div>
      <div className='d-flex justify-content-center mb-5 mt-4'>
      <div class="card border border-0 shadow-lg mt-4 me-5" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/subject.png")} className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Subject Competency</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a class="btn btn-primary my-3 px-5" onClick={togglePopup6}>Start Test</a>
       </div>
     </div>
     <div class="card border border-0 mt-4 ms-5 shadow-lg" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/creativity.png")} className="img-fluid" width={"70%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Creativity </h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a class="btn btn-primary my-3 px-5" onClick={togglePopup7}>Start Test</a>
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
        
        <p className="fw-bold">Do you want to start test?</p>
        <div className='text-center d-flex flex-column'>
        <Link className="btn btn-primary" to={"/Section-1"}>Attempt Test</Link>       
        </div>

      </>}
      handleClose={togglePopup3}
    />}

{isOpen2 && <Popup1
      content={<>
        
        <p className="fw-bold">Do you want to start test?</p>
        <div className='text-center d-flex flex-column'>
        <Link className="btn btn-primary" to={"/Section-2"}>Attempt Test</Link>       
        </div>

      </>}
      handleClose={togglePopup4}
    />}

{isOpen3 && <Popup1
      content={<>
        
        <p className="fw-bold">Do you want to start test?</p>
        <div className='text-center d-flex flex-column'>
        <Link className="btn btn-primary" to={"/Section-3"}>Attempt Test</Link>       
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

export default MDCCTmenu;
