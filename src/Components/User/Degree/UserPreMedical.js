// import React from "react";
// import { Link } from "react-router-dom";
import React,{useState} from 'react';
import Navbar1 from '../../Navbar1';
import Sidebar from '../../Sidebar';
// import Navbar from './Navbar';




const ReadMore = ({ children }) => {
  let text = children;

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 50) : text}
      <a onClick={toggleReadMore} className="read-or-hide text-primary text-decoration-none">
        {isReadMore ? "...read more" : " show less"}
      </a>
    </p>
  );
}
function UserPreMedical()

  {

  const width = {
   width: "18rem"
  };
  return (
    <>
    <Navbar1/>
    <Sidebar/>
    <div className="py-5">
      <div className="container-fluid">
      <div className='py-5 b_g parent bg-success'>
        <h1 className='pt-4 text-center text-white text-uppercase fw-bold mb-4 mt-5'>Pre-Medical</h1>
        </div>
        <div className='container shadow-lg p-5 child bg-white rounded-3'>
        <div className='mt-3 content' data-aos="fade-up"  data-aos-duration="2000">
          <h1 className='ribbon'> Introduction</h1>
           <p className='lh-lg homefontsize pt-4'>Students enter the Faculty of Sciences after completing their matriculation. FSc pre-medical is a two-year program that enables students to gain basic knowledge of sciences and medical fields. It is a stepping stone for students’ professional careers. Students can only opt for pre-medical in FSc if they have completed their matriculation in Biology. Therefore, students without any science or biology background are not eligible to apply for FSc pre-medical.</p>
      </div>

      
      <div className=' pb-5'>
      <div className='d-flex align-items-center justify-content-center pt-5 px-1 '>
        <div className='me-5'>
          <label for="fname">Enter Degree</label><br></br>
          <input className='searchinput1' type="text" id="fname" name="degree" placeholder="Degree"/>          
        </div>
        <div className='d-flex align-items-center'>
         <a className='btn btn-success py-2 px-5 rounded-5'>Search</a>          
        </div>

      </div>


      <div className="d-flex justify-content-center mt-5">
      <div className="card" style={width}>
        <img src={require("../../images/Mbbs.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold ">Bachelor of Medicine and Bachelor of Surgery (MBBS)</h5>
            <ReadMore className="card-text">MBBS is a five-year degree program that equips students with professional knowledge of medicine. Practical and theoretical learning is a part of MBBS. Students can practice medicine upon the completion of their MBBS. Students are required to complete a one-year house job to qualify as a doctor after completing MBBS. House job is essential to train them for real-life situations. Students are offered an insight into the practical world of medicine during their house job period.</ReadMore>
        </div>
      </div>
      <div className="card mx-5" style={width}>
        <img src={require("../../images/pharmD.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Doctor of Pharmacy (D. Pharmacy)</h5>
            <ReadMore className="card-text">Recognized by the Pakistan Medical and Dental Council, Pharmaceutical Council of Pakistan, and Higher Education Commission, D. Pharmacy is a five-year undergraduate program. There are ten semesters in D. Pharmacy, which guide students about pharmaceuticals. Students are eligible for a Pharmacy license after completing D. Pharmacy. You can also apply for the position of clinical pharmacist upon degree completion.</ReadMore>
        </div>
      </div>
      <div className="card" style={width}>
        <img src={require("../../images/physicalTherapy.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Doctor of Physical Therapy (DPT)</h5>
            <ReadMore className="card-text">Five-year degree program in medicine is DPT. Students learn about the movement of the human body and aim to improve physical independence</ReadMore>
        </div>
      </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
      <div className="card" style={width}>
        <img src={require("../../images/dental.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Bachelor of Dental Surgery (BDS)</h5>
            <ReadMore className="card-text">Oral health determines a person’s overall health. Students learn about the diagnosis and treatment of oral health issues in BDS. Preventative measures are also studied. A four-year undergraduate degree enables students to treat patients with oral illnesses. One year of training is mandatory after the completion of BDS.</ReadMore>
        </div>
      </div>
      <div className="card mx-5" style={width}>
        <img src={require("../../images/DVM.png")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Doctor of Veterinary Medicine (DVM)</h5>
            <ReadMore className="card-text">DVM is a degree program that enables students to improve the lives of animals. It focuses on animals’ syndromes, functioning, and treatments. DVM training sessions expose students to on-site practices. Upon completing your degree, you can get employed in the Livestock and Dairy Development Department.</ReadMore>
        </div>
      </div>
      <div className="card" style={width}>
        <img src={require("../../images/MLT.png")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Medical Laboratory Technology</h5>
            <ReadMore className="card-text">It is a fusion of medicine and laboratory technology. It is an essential medical field that focuses on detecting, analyzing, and treating illnesses in living organisms.</ReadMore>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
  </div>


    </>
  );
}




export default UserPreMedical;
// export default myFunction;