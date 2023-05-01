// import React from "react";
// import { Link } from "react-router-dom";
import React,{useState} from 'react';
// import Navbar from './Navbar';
import "../../CSS/Pre_Engineering.css"
import Navbar1 from '../../Navbar1';
import Sidebar from '../../Sidebar';




const ReadMore = ({ children }) => {
  let text = children;

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <a onClick={toggleReadMore} className="read-or-hide text-primary text-decoration-none">
        {isReadMore ? "...read more" : " show less"}
      </a>
    </p>
  );
}
function UserPreEngineering()

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
            <h1 className='pt-4 text-white text-uppercase text-center fw-bold mb-4 mt-5'>Pre-Engineering</h1>          
        </div>
        <div className='container shadow-lg p-5 child bg-white rounded-3'>
        <div className='mt-3 content' data-aos="fade-up"  data-aos-duration="2000">
          <h1 className='ribbon'> Introduction</h1>
           <p className='lh-lg homefontsize  pt-4'>The FSc Pre-Engineering program is a two-year foundation curriculum for students who want to continue engineering education further.

           FSc Pre-Engineering is a two-year program that begins after matriculation and is often attended by aspirants who studied courses in matriculation and intend to pursue a career as an engineer. At this level, students mostly study disciplines that are required for engineering.

          The goal of the Intermediate of Science (FSc. Pre-Engineering) degree is to expose and educate students in fundamental scientific inquiry. The FSc Pre-Engineering program’s courses are all aimed to prepare students by teaching them the fundamentals of engineering.

           The curriculum teaches fundamental scientific abilities in the domains of physics, chemistry, and mathematics.</p>
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

      <div className="d-flex justify-content-center mt-5" data-aos="fade-up"  data-aos-duration="2000">
      <div className="card" style={width}>
        <img src={require("../../images/mechanic.jpg")} className="card-img-top img-fluid" alt="..."/>
        <div className="card-body border-top">
          <h5 className="card-title fw-bold mb-4">Mechanical Engineering</h5>
            <ReadMore className="card-text">Mechanical engineering is one of the most diverse fields of engineering. Mechanical engineers create, develop, construct, and test products. From components to machines to the human body, they deal with everything that moves.

               Mechanical engineering, in its most basic form, is the application of engineering ideas and problem-solving approaches to any product, from design through manufacture to the marketplace.

              Careers in mechanical engineering focus on developing technology that fulfills human requirements. Almost every product or service in modern life has been influenced by a mechanical engineer to aid humanity in some manner.</ReadMore>
        </div>
      </div>
      <div className="card mx-5" style={width}>
        <img src={require("../../images/electric.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body border-top">
          <h5 className="card-title fw-bold mb-4">Electrical Engineering</h5>
            <ReadMore className="card-text">Electrical engineering is the study and application of physics and mathematics, as well as aspects of electricity, electronics, and electromagnetic, to big and small-scale systems in order to process data and convey energy.

                Electrical engineering graduates work in fields such as energy, construction, manufacturing, transportation, telecommunications, engineering, and computers. Electrical engineers can operate in a variety of settings, including labs, offices, and construction sites, depending on their career level or project phase.</ReadMore>
        </div>
      </div>
      <div className="card" style={width}>
        <img src={require("../../images/civil.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body border-top">
          <h5 className="card-title fw-bold mb-4">Civil Engineering</h5>
            <ReadMore className="card-text">Civil engineering is concerned with the built environment and may be traced back to the first time someone put a roof over their head or spanned a river with a tree trunk to make it simpler to cross.

                Civil engineers are responsible for much more than the design of buildings and bridges.

                 They can be found in the aerospace industry, designing jetliners and space stations; in the automotive industry, perfecting a chassis’ load-carrying capacity and improving the crashworthiness of bumpers and doors; and in the shipbuilding, power, and many other industries where constructed facilities are involved.</ReadMore>
        </div>
      </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
      <div className="card" style={width}>
        <img src={require("../../images/computer.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body border-top">
          <h5 className="card-title fw-bold mb-4">Computer Engineering</h5>
            <ReadMore className="card-text">Computer Engineering is a branch of engineering that creates hardware and firmware for a broad range of applications, including consumer electronics, medical equipment, communication systems, airplanes, and self-driving automobiles.

               Despite the very competitive industry, future computer engineers do not need to be concerned about work prospects. You’ll have a well-paid job that will grow in pay as you gain experience.

                Computer Engineering occupations are also immune from the automation process, which is expected to eliminate many professions in the future.</ReadMore>
        </div>
      </div>
      <div className="card mx-5" style={width}>
        <img src={require("../../images/chemical.png")} className="card-img-top" alt="..."/>
        <div className="card-body border-top">
          <h5 className="card-title fw-bold mb-4">Chemical Engineering</h5>
            <ReadMore className="card-text">Chemical engineering is concerned with the development and manufacture of items using chemical processes. Designing equipment, methods, and procedures for refining raw materials, as well as mixing, compounding, and processing chemicals, falls under this category.

                Chemical engineers transform laboratory procedures into practical applications for commercial product manufacturing, then seek to maintain and enhance those processes.</ReadMore>
        </div>
      </div>
      <div className="card" style={width}>
        <img src={require("../../images/electronic.png")} className="card-img-top" alt="..."/>
        <div className="card-body border-top">
          <h5 className="card-title fw-bold mb-4">Electronics Engineering</h5>
            <ReadMore className="card-text">Electronics engineering is the discipline of electrical engineering dealing with the use of electronic equipment such as integrated circuits and transistors, as well as the usage of the electromagnetic spectrum.

You’ll design, develop, and test components, devices, systems, or equipment that use electricity as a source of power as an electronics engineer. Capacitors, diodes, resistors, and transistors are examples of these components.</ReadMore>
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




export default UserPreEngineering;
// export default myFunction;