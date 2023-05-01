 import './CSS/Home.css';
 import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";





function Home() {
   
  return (
    <>
    <Navbar/>
    <div className='container-fluid homehead pt-5' >
        
        <div className='d-flex py-5'>
        <div className='col-6 pt-5 mt-5 ps-5 ms-2'>
            <h1 data-aos="zoom-in-right" data-aos-duration="2000" className='fw-bold'>Bring Yourself<br></br> Toward Success with <br></br><br></br><span className='home1'>Bano Kamyaab </span></h1>
        </div>
        <div className='col-6' data-aos="zoom-in-up"  data-aos-duration="2000">
            <img src={require("./images/Home1.png")} className="img-fluid"></img>
        </div>            
        </div>



    </div>
    <div className="container-fluid">
        <div className="mt-5 pt-5 m-5">
        <div>
            <p className='text-center fs-5 fw-bold'>WELCOME TO</p>
           <h1 className='fw-bold text-center'>Bano Kamyaab</h1>         
        </div>
        <div className='py-4 lh-lg homefontsize' data-aos="zoom-in"  data-aos-duration="1500">
        <p>Bano Kamyaab is a web-based solution that provides an information platform for students to opt
for the future career. Bano Kamyaab provides students with the psychological aptitude tests.
Students of Pakistan go through many problems after intermediate education. They don’t even
know where to proceed further and what career domain to choose. Bano Kamyaab will resolve
this issue for them. Students would be able to see the career details on the web portal and also
interpret what domain could be best to their best of interest and skill set. Furthermore, Student
would specifically attempt a MDCCT (Multi-Dimensional Career Counseling Test) to get a
proper analysis of what domain could be profitable for them in future. After attempting the
Aptitude test, student can generate a report which would contain a complete mapping of their
answers/ responses with different career domains predicted by the AI module. Based on the
predicted career domains, student can look for the details of the universities to apply for
admission. Also the details about scholarships would also be available and student can apply for
it.<br></br><br></br>
Other than the students, parents and teachers could also benefit through this solution. They can
view the details of the different degrees to guide student about it. Also they can view the details
about scholarships and universities.</p>
        </div>
        </div>
    </div>
    <div className="container d-flex mt-5 pt-5">
    <div className='col-5'>
            <img src={require("./images/Approach2.jpeg")} className="img-fluid" alt=''  data-aos-duration="2000"  data-aos="zoom-in-right"></img>
        </div>
        <div className="lh-lg col-7 d-flex flex-column justify-content-center ps-5">
        <div>
           <h1 className='fw-bold'>Our Mission</h1>         
        </div>
        <div>
        <p className='homefontsize'  data-aos="fade-up"  data-aos-duration="2000">Bano Kamyaab aims to spread awareness regarding selection of a right career. The world is progressing very fast and students are unaware of multiple dimensions associated with a particular career. This issue leads to a very big issue in future and that is getting fed up immediately.
            If a student persue a career according to the interests and skills, he/she would probably enjoy working whatever the circumstances are. 
            Bano Kamyaab brought a solution of knowing what career is best for the student and what degree program would be suitable to persue that career.</p>
        </div>
        </div>

    </div>

    <div className="container  d-flex mt-5 pt-5">
        <div className="lh-lg col-7 d-flex flex-column justify-content-center">
        <div>
           <h1 className='fw-bold'>Our Services</h1>         
        </div>
        <div>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</p> */}
            <p className='homefontsize'>
            <ul>
                <li>
                    Degree Programs Searching
                </li>
                <li>
                    Universities Searching
                </li>
                <li>
                    Scholarships Hunting
                </li>
                <li>
                    Aptitude Test Attempt
                    <ul>
                        <li>
                            Creativity Analysis
                        </li>
                        <li>
                            IQ Analysis
                        </li>
                        <li>
                            Emotional Intelligence Analysis
                        </li>
                        <li>
                            Personality Analysis
                        </li>
                        <li>
                            Subject Competence Analysis
                        </li>
                        
                    </ul>
                </li>

            </ul>
            </p>
        </div>
        </div>
        <div className='col-5'>
        <img src={require("./images/services.png")} className="img-fluid" alt=''  data-aos-duration="2000" data-aos="zoom-in-left"></img>
        </div>
    </div>

    <div className='my-5' data-aos="fade-up"  data-aos-duration="2000">
        <h1 className='text-center fw-bold mb-4' >How Does it Works?</h1>
        <p className='text-center fs-5 fw-bold text-secondary mb-5'>Our aptitude test can be taken via our systematic procedure.</p>
    <div className='container d-flex justify-content-between' >
        <div className='d-flex flex-column col-2 text-center'>
        <i class="bi bi-person-check-fill homeiconsize text-success"></i>
        <p className='fw-bold'>Register and Complete Your Profile</p>
        </div>

        <div className='d-flex flex-column col-2 text-center'>
        <i class="bi bi-laptop homeiconsize text-success"></i>
        <p className='fw-bold'>Take the Multidimensional Career Counselling Test (MDCCT)</p>
        </div>

        <div className='d-flex flex-column col-2 text-center'>
        <i class="bi bi-clock-history homeiconsize text-success"></i>
        <p className='fw-bold'>Instantly Get Your Career Assessment Report (CAR)</p>
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
   


    </>
  );
}

export default Home;
