// import React from "react";
// import { Link } from "react-router-dom";
import React,{useState} from 'react';
import Navbar1 from '../../Navbar1';
import Sidebar from '../../Sidebar';
// import Navbar from "./Navbar";




const ReadMore = ({ children }) => {
  let text = children;

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 50) : text}
      <a onClick={toggleReadMore} className="read-or-hide text-primary text-decoration-none" >
        {isReadMore ? "...read more" : " show less"}
      </a>
    </p>
  );
}
function UserICS()

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
        <h1 className='pt-4 text-white text-uppercase text-center fw-bold mb-4 mt-5'>Intermediate in Computer Science (ICS)</h1>
      </div>

      <div className='container shadow-lg p-5 child bg-white rounded-3'>
        <div className='mt-3 content' data-aos="fade-up"  data-aos-duration="2000">
          <h1 className='ribbon'> Introduction</h1>
          <p className='lh-lg homefontsize pt-4'>ICS stands for Intermediate of Computer Sciences. it is an interdisciplinary program about science and computer. It is a general education program in Computer Science and Software Development.
          It is evident that the modern business world evolves around new technologies and the computer is the finest of the inventions. The computer plays a vital role in any type of workspace. It has become the utmost priority of all workers all over the world. Having the basic knowledge about computer applications not only helps to enhance your problem solving, analytical and critical thinking but also adds to your aptitude and makes you capable of building a well-established future.
          Different educational institutes have introduced some expedient computer courses for those who do not be able to get higher education due to less money or any responsibility. However, people manage to get education till 12th class. After completing 12 years of education, people can avail of the opportunity to polish their skills with professional knowledge.</p>
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
        <img src={require("../../images/Software.png")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Software Engineering</h5>
            <ReadMore className="card-text">A Bachelor of Software Engineering is an undergraduate academic degree (Bachelor's Degree) awarded for completing a program of study in the field of software development for computers in information technology.

                "Software Engineering is the systematic development and application of techniques which lead to the creation of correct and reliable computer software</ReadMore>
        </div>
      </div>
      <div className="card mx-5" style={width}>
        <img src={require("../../images/Comphard.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Computer Hardware Engineering</h5>
            <ReadMore className="card-text">Computer engineering is a discipline that embodies the science and technology of design, construction, implementation, and maintenance of software and hardware components of modern computing systems and computer-controlled equipment. Computer Engineering is a fast emerging and an exhilarating field offering diverse career paths in both software development and hardware engineering. Computer Engineers apply engineering techniques and computer science concepts to develop reliable, cost-effective hardware and software solutions catering to the challenging demands of industries ranging from health care to environmental sciences.</ReadMore>
        </div>
      </div>
      <div className="card" style={width}>
        <img src={require("../../images/Cybersecurity.png")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Cyber security</h5>
            <ReadMore className="card-text">A Bachelor in Cyber Security program teaches students to identify computer system vulnerabilities, recognize digital exploitation and prevent or repair damage. Graduates are prepared to avert cyber attacks and implement security measures in a wide range of settings that involve computer systems and sensitive data.</ReadMore>
        </div>
      </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
      <div className="card" style={width}>
        <img src={require("../../images/CompScience.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Computer Science</h5>
            <ReadMore className="card-text">Computer Science is the study of computers and computational systems. Unlike electrical and computer engineers, computer scientists deal mostly with software and software systems; this includes their theory, design, development, and application.

              Principal areas of study within Computer Science include artificial intelligence, computer systems and networks, security, database systems, human computer interaction, vision and graphics, numerical analysis, programming languages, software engineering, bioinformatics and theory of computing.</ReadMore>
        </div>
      </div>
      <div className="card mx-5" style={width}>
        <img src={require("../../images/SNA.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Systems & Network Administration</h5>
            <ReadMore className="card-text">Network and Systems Administration program provides students with a solid, hands-on skill set of computer, networking, and internetworking systems technology principles and desktop support. Students gain an understanding of the interaction between microcomputer software and hardware, network and internetworking operating systems software and hardware, local area network administration and management, the use of troubleshooting techniques, troubleshooting hardware and software tools, as well as interpersonal/customer service skills.</ReadMore>
        </div>
      </div>
      <div className="card" style={width}>
        <img src={require("../../images/AI.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Artificial Intelligence (AI)</h5>
            <ReadMore className="card-text">Artificial Intelligence (AI) degrees teach students how to use advanced Mathematics, Computer Science, and Engineering to create systems and machines (e.g. robots, drones) capable of solving problems that normally require natural intelligence. Future graduates develop their coding, critical thinking and analysis skills. Some of the most popular AI jobs are AI specialist, machine learning engineer, robotics engineer, computational linguist, etc.</ReadMore>
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




export default UserICS;
// export default myFunction;