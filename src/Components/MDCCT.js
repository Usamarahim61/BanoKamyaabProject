import { Link } from "react-router-dom"; 
import React, { useState } from 'react';
import Popup from './Popup';
import Navbar from "./Navbar";

function MDCCT() {
    // const [isOpen, setIsOpen] = useState(false);
 
    // const togglePopup = () => {
    //   setIsOpen(!isOpen);
    // }

  
      
  return (
    <>
    <Navbar/>
    <div className="container-fluid homefontsize">
    <div className='py-5 b_g parent bg-success pt-5 mt-5'>
    <h1 className="text-center text-white mt-5 "><strong>MDCCT<br></br>(Multi Dimensional Career Counseling Test)</strong></h1>
      </div>

        <div className=" d-flex justify-content-between">
        <div className="col-6 ps-5 pt-5 mt-5">
        <div>
           <h2 className="fw-bold">Introduction</h2>         
        </div>
        <div>
        <p className="lh-lg ">The Multidimensional Career Counseling Test is a comprehensive psychometric inventory developed to help students discover and match to different careers based on assessment results on five broad dimensions: Demographics, interest, personality, aptitude, and socio- emotional Test.</p>
        </div>
        </div>
        <div className="col-5">
          <img src={require("./images/mdcct.jpg")} className='img-fluid'></img>
        </div>
        </div>
    </div>


    <div className="d-flex container-fluid homefontsize">
        <div className="container mt-1 pt-5 m-5">
        <div>
           <h2 className="fw-bold">What is it used for?</h2>         
        </div>
        <div>
        <p className="lh-lg">90% of Pakistan students never get career counselling or guidance. They select their University Degree and Future Career without any guidance. Students should be selecting their school and college subjects and University degree based on their Aptitude. MCCT helps students understand this Aptitude and suggest them suitable education fields according to it. Our test is based on AI and 100% objective. We are not fortune tellers but we help you take an informed decision about your future so you create your own fortune.</p>
        </div>
        </div>
        {/* <div className="col-6">
          <img src={require("./images/MDCCT(sec).jpg")} className="img-fluid" width={"70%"}></img>

        </div> */}
    </div>

    <div className="container-fluid homefontsize">
        <div className="container mt-5 pt-5 m-5">
        <div>
           <h2 className="fw-bold">What sections are there?</h2>         
        </div>
        <div>
        <p className="lh-lg">
        Bano Kamyaab conduct MDCCT for the analysis of career slection. MDCCT contains different sention that analyzes the student's capabilities from different aspects. Th sections included in MDCCT are:
  <ul>
    <li>
      Demographics 
    </li>
    <li>
      Emotional Intelligence
    </li>
    <li>
      Personality
    </li>
    <li>
      Subject Competency
    </li>
    <li>
      Creativity
    </li>
  
  </ul>
MDCCT contains all the necessary details to assist student in understanding all the aspects of his/her aptitude profile.
        </p>
        </div>
        </div>
    </div>

    {/* <div className="m-5 text-end">
        <button className="btn btn-primary p-2" onClick={togglePopup}>Attempt Aptitude Test</button>
    </div>
    {isOpen && <Popup
      content={<>
        
        <p className="fw-bold">Do you want to Attempt Test?</p>
        <a className="btn btn-primary" href={"/Section-1"}>Attempt Aptitude Test</a>
      </>}
      handleClose={togglePopup}
    />} */}
    </>
  );
}

export default MDCCT;
