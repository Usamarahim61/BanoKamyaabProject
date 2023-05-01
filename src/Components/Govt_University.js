// import React from "react";
// import { Link } from "react-router-dom";
import React,{useState} from 'react';
import Navbar from "./Navbar";




const ReadMore = ({ children }) => {
  let text = children;

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <a onClick={toggleReadMore} className="read-or-hide text-primary text-decoration-none" >
        {isReadMore ? "...read more" : " show less"}
      </a>
    </p>
  );
}
function Govt_University()

  {

  const width = {
   width: "18rem"
  };
  return (
    <>
    <Navbar/>
    <div  className="py-5">
      <div className="container-fluid">
      <div className='py-5 b_g parent bg-success'>
        <h1 className='pt-4 text-white text-uppercase text-center fw-bold mb-4 mt-5'>Government Universities</h1>
      </div>

      <div className='container shadow-lg p-5 child bg-white rounded-3'>
        <div className='mt-3 content' data-aos="fade-up"  data-aos-duration="2000">
          <h1 className='ribbon'> Introduction</h1>
          <p className='lh-lg homefontsize mt-4'>A public university is a university which is mainly funded by public means through a national government. Tuition is much cheaper than that of a private university. It is subject to government rules and regulations. Elementary school, secondary, and higher education are the three levels of education in Pakistan and the government colleges provide education to the fun session with students of almost all the levels. In Pakistan, government college are preferred as the quality of education in such colleges is great. In addition, the fees that these colleges charge from the students is very less. The students can access quality education by paying very minimal fees. There are many Universities, and colleges in Pakistan, students from all over the world come to study in these Universities.</p>
        </div>

        <div className=' pb-5'>
        <div className='d-flex justify-content-around pt-5 px-1 '>
        <div>
          <label for="fname">Enter City</label><br></br>
          <input className='searchinput' type="text" id="fname" name="city" placeholder="City"/>          
        </div>
        <div>
          <label for="fname">Enter Field</label><br></br>
          <input className='searchinput' type="text" id="fname" name="field" placeholder="Field"/>          
        </div>
        <div className='d-flex align-items-center'>
         <a className='btn btn-success px-5 py-2 rounded-5'>Search</a>          
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
      <div className="card" style={width}>
        <img src={require("./images/GCU.png")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Government College University</h5>
            <ReadMore className="card-text">Government College University is also known as GC university. This university is considered in the best university in the list of government universities in Lahore. It was established in 1861 as College but after 2002 it was ranked as University. It is also considered in the top 10 largest university in Pakistan in term of no of students because it has other campuses.
              It educated the students both in bachelors and master and also affiliated with Higher Education Commission, PEC and PBC. The chancellor of university is the Governor of Punjab.</ReadMore>
        </div>
      </div>
      <div className="card mx-5" style={width}>
        <img src={require("./images/UniPunjab.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">University of the Punjab</h5>
            <ReadMore className="card-text">The University of Punjab is commonly known as Punjab University. This University is established in later 19 centuries. The big title that goes to Punjab University is the oldest university of Pakistan. There are 80+ departments and research centers.

                 This university is also affiliated with Higher Education Commission (HEC), Engineering Council and PBC. There is also the facility of hostels for both boys and girls. Out of 28 hostels there are 17 hostels that are reserved for boys and 11 hostels are reserved for women.</ReadMore>
        </div>
      </div>
      <div className="card" style={width}>
        <img src={require("./images/UIT.png")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Information Technology University</h5>
            <ReadMore className="card-text">ITU is considered in one of the best gov. university. It was established in 2012 that was headed by Umar Saif (Pakistani Scientist and CEO of AutoSurvery). It is located in the Arfa Software Technology Park and also has the Pakistan’s largest startup incubator. It has affiliation with HEC and PEC.</ReadMore>
        </div>
      </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
      <div className="card" style={width}>
        <img src={require("./images/FatimaUni.png")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Fatima Jinnah Medical University</h5>
            <ReadMore className="card-text">Fatima Jinnah Medical University early known as Balak Ram Medical College. It trains and educate the female students of Pakistan and provide the healthcare facilities to the people of Pakistan.  It is established in 1948. It also associates with the Sir Ganga Ram Hospital that are established in 1921 and the Pakistan Medical and Dental Council.</ReadMore>
        </div>
      </div>
      <div className="card mx-5" style={width}>
        <img src={require("./images/VertUni.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">University of Veterinary and Animal Sciences</h5>
            <ReadMore className="card-text">University of Veterinary and Animal Sciences is also the government university that is commonly known as Lahore Veterinary College. It is established in 1882 and it is also considered in the oldest institution of Veterinary Science.

                 The chancellor of the university is the governor of Punjab. Early it was affiliated with Agriculture university and after it become the distinct entity. It also offers Undergraduate, Postgraduate and doctoral programs.</ReadMore>
        </div>
      </div>
      <div className="card" style={width}>
        <img src={require("./images/Arid.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Pir Mehr Ali Shah Arid Agriculture University</h5>
            <ReadMore className="card-text">Pir Mehr Ali Shah Arid Agriculture University Rawalpindi (PMAS-AAUR) is an agricultural college that was established by the government of Punjab in the 1970s.  The college became a university in 1994. Among the services that PMAS-AAUR provides to its local community are technology transfer, outreach farm services, visits to the farming community to help solve their issues and problems, demonstrations at farm fields.  The F.T. department also provides food related services, an annual farmer day and a pet clinic, run free of cost by the Faculty of Veterinary and Animal Science.  PMAS-AAUR has also signed a number of of MOUs and collaborates with both national and international partners.</ReadMore>
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




export default Govt_University;
// export default myFunction;