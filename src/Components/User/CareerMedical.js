import Navbar1 from '../Navbar1';
import Popup1 from '../Popup1';
import { Link } from "react-router-dom"; 
import React, { useState } from 'react';
import "../CSS/Userhome.css";
import Sidebar from '../Sidebar';


function CareerMedical() {

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
          <p ><span className='fs-3 fonttext'>Career Path for<br></br></span><span className='ribbonh1 fs-1 '>Pre-Medical</span></p>
        </div>
      </div>

      <div className="d-flex justify-content-between">
      <div class="card border border-2 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/pharmD.jpg") }className="img-fluid" width={"100%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Doctor of Pharmacy (D. Pharmacy)</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <p className='text-truncate p-3'>            

        Drug testing laboratories<br></br>
        Hospital pharmacists at government hospitals<br></br>
        Drug inspectors
        Lecturer in government colleges or universities
        </p>
        <a className="text-decoration-none text-primary px-5 " onClick={togglePopup3}>See More <i class="bi bi-arrow-right"></i></a>
       </div>
     </div>
     <div class="card border border-2 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/physicalTherapy.jpg")} className="img-fluid" width={"100%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold"> Doctor of Physical Therapy (DPT)</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <p className='text-truncate p-3 pb-4'>                
        Hospitals,
Outpatient clinics<br></br>
Sports training and fitness centers<br></br>
Inpatient rehabilitation facilities
        </p>
        <a className="text-decoration-none text-primary px-5  " onClick={togglePopup4}>See More <i class="bi bi-arrow-right"></i></a>

       </div>
     </div>
     <div class="card border border-2 shadow-lg mt-4" style={width}>
        <div class="card-body p-0 text-center">
        <img src={require("../images/dental.jpg")} className="img-fluid" width={"100%"}></img>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Bachelor of Dental Surgery (BDS)</h5>
        <p className='text-truncate p-3 pb-2'>
        General Dentist<br></br>
        Orthodontist<br></br>
        Pediatric Dentist,
        Periodontist
        Oral and Maxillofacial Surgeon
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
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Doctor of Pharmacy (D. Pharmacy)</h5>

        <ol className='fs-5'>
            <li>Drug testing laboratories</li>
            <li>Hospital pharmacists at government hospitals</li>
            <li>Drug inspectors</li>
            <li>Lecturer in government colleges or universities</li>
            <li>Own retail pharmacies</li>
            <li>Home health care</li>
            <li>Pharmaceutical companies</li>
            <li>Hospital pharmacists at personal health cares</li>
            <li>Forensic pharmacists</li>
            {/* <li>Distribution setups</li> */}
            </ol>
           


        </div>

      </>}
      handleClose={togglePopup3}
    />}

{isOpen2 && <Popup1
      content={<>
        
        <div>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Doctor of Physical Therapy (DPT)</h5>

        <ol className='fs-5'>

<li>Hospitals</li>
<li>Outpatient clinics</li>
<li>Sports training and fitness centers</li>
<li>Inpatient rehabilitation facilities</li>
<li>Nursing and extended care facilities</li>
<li>Patient homes</li>
<li>Schools and education centers</li>
{/* <li><a href="https://www.usa.edu/blog/virtual-physical-therapy/">Virtually</a></li> */}

            </ol>
        </div>

      </>}
      handleClose={togglePopup4}
    />}

{isOpen3 && <Popup1
      content={<>
        
        <div>
        <h5 class="card-title text-center my-2 fs-3 fw-bold">Bachelor of Dental Surgery (BDS)</h5>

            <ol className='fs-5'>
                <li>General Dentist</li>
                <li>Orthodontist</li>
                <li>Pediatric Dentist</li>
                <li>Periodontist</li>
                <li>Oral and Maxillofacial Surgeon</li>
                <li>Public Health Dentist</li>
                <li>Endodontist</li>
                <li>Oral Pathologist</li>
                <li>Oral Medicine and Radiology</li>
                <li>Dental Laboratory Technician</li>
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

export default CareerMedical;
