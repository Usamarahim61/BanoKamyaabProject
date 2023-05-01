// import React from "react";
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Navbar1 from '../../Navbar1';
import Sidebar from '../../Sidebar';
// import Navbar from "./Navbar";
import ReactPaginate from 'react-paginate';

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
function UserGovtScholarship() {

  const width = {
    width: "18rem"
  };

  const [scholarshipdata, setScholarshipdata] = useState([{
    name: "",
    description: "",
    url: "",
    photo: "",
    city: "",
  }]);

  const [Searchscholarship, setSearchScholarship] = useState({
    field: "",
    city: "",
  });


  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);

    setSearchScholarship({ ...Searchscholarship, [name]: value });

  }




  const callScholarship = async () => {
    try {

      const res = await fetch('/ViewGovtScholarship', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },

      });

      const data = await res.json();
      console.log(data);

      setScholarshipdata(data);


      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {

      console.log(err);

    }
  }

  useEffect(() => {
    callScholarship();

  }, []);




  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const scholarshipPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const picurl = 'http://localhost:4000/public/uploads/';

  // Filter scholarship based on search criteria
  useEffect(() => {
    const filtered = scholarshipdata.filter(element =>
      (!Searchscholarship.field || element.field.toLowerCase() === Searchscholarship.field.toLowerCase()) &&
      (!Searchscholarship.city || element.city.toLowerCase() === Searchscholarship.city.toLowerCase())
    );
    setFilteredScholarships(filtered);
  }, [scholarshipdata, Searchscholarship]);





  return (
    <>
      <Navbar1 />
      <Sidebar />
      <div className="py-5">
        <div className="container-fluid">
          <div className='py-5 b_g parent bg-success'>
            <h1 className='pt-4 text-white text-uppercase text-center fw-bold mb-4 mt-5'>Government Scholarships</h1>
          </div>

          <div className='container shadow-lg p-5 child bg-white rounded-3'>
            <div className='mt-3 content' data-aos="fade-up" data-aos-duration="2000">
              <h1 className='ribbon'> Introduction</h1>
              <p className='lh-lg homefontsize pt-4'>A scholarship is financial support awarded to a student, based on academic achievement or other criteria that may include financial need, for the purpose of schooling. There are various types of scholarships – the two most common being merit-based and need-based. The donor or department funding the scholarship sets the criteria for recipient selection, and the grantor specifically defines how the money is to be applied. The funds are used to defray the costs of tuition, books, room, board and other expenses directly tied to a student’s educational cost through the university.

                Scholarships are typically awarded using a variety of factors, including - but not limited to, academic achievement, departmental and community involvement, employment experience, areas of study, and financial need.</p>

            </div>

            <div className=' pb-5'>
              <div className='d-flex align-items-center justify-content-center pt-5 px-1 '>
                {/* <div className='me-5'>
          <label for="fname">Enter Degree</label><br></br>
          <input className='searchinput1' type="text" id="fname" name="Govt Scholarship" placeholder="Search Scholarship"/>          
        </div>
        <div className='d-flex align-items-center'>
         <a className='btn btn-success py-2 px-5 rounded-5'>Search</a>          
        </div> */}

              </div>


              {/* 
      <div className="d-flex justify-content-center mt-5">
      <div className="card" style={width}>
        <img src={require("../../images/HashooFoundation.png")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Hashoo Foundation</h5>
            <ReadMore className="card-text">Hashoo Foundation (HF) is a knowledge-based, and impact-oriented organization aimed at empowering communities by leveraging knowledge as capital for their socio-economic uplift.

               We engage in development initiatives across Pakistan with a focus on improving the socio-economic conditions of vulnerable communities from both urban and rural areas. HF aspires to extend its development work in collaboration with strategic partners for the achievement of the global Sustainable Development Goals (SDGs).</ReadMore>
        </div>
      </div>
      <div className="card mx-5" style={width}>
        <img src={require("../../images/YLPScholar.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">NGO YLP (Youngs leaders Programme)</h5>
            <ReadMore className="card-text">YLP is an NGO having local and overseas sponsors working to promote education in Pakistan by providing generous scholarships to students. pursue a bachelor’s degree in any Pakistani university. YLP Scholarship is for talented people who wish to be potential future leaders across a wide range of fields including engineering, medical, business, politics, the media, civil society, religion, and academia.
              The YLP program will provide selected students from all of Pakistan the financial help they need in gaining education. Scholarships provided by YLP will be on the basis of academic merit and financial need. The amount of scholarships provided will vary from year to year depending on our financial capability. However, we aim to provide full or partial scholarships to as many students as we can. We will also provide accommodation expenses if needed.</ReadMore>
        </div>
      </div>
      <div className="card" style={width}>
        <img src={require("../../images/FoujiFoundation.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Fouji Foundation Scholarships</h5>
            <ReadMore className="card-text">Fauji Foundation (also known as Fauji Group), is amongst the largest business conglomerate in Pakistan which "Earns To Serve" the interests of ex-servicemen.

It is basically a Charitable Trust founded in 1954 for the welfare of the ex-servicemen and their dependents.
It is incorporated under the Charitable Endowments Act 1890.
The history of Fauji Foundation dates back to 1945, when a Post War Services Reconstruction Fund (PWSRF) was established for Indian War Veterans who served the British Crown during WW-II. At the time of partition (1947) when Pakistan came into being, the balance fund was transferred to Pakistan in the proportion of its post WW-II veterans. Till 1953, the fund remained in the custody of the civilian Government, when in 1954 it was transferred to the Army.</ReadMore>
        </div>
      </div>
      </div> */}





              {/* <div className="d-flex justify-content-center mt-5">
      <div className="card" style={width}>
        <img src={require("../../images/HECScholar.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">HEC NEED-BASED SCHOLARSHIPS</h5>
            <ReadMore className="card-text">The HEC Need-Based Scholarships in Pakistan are meant for qualified students who are struggling to pursue higher studies due to limited financial resources. It provides academically qualified students with financial assistance, enabling them to complete their degrees in all disciplines at as many as 94 campuses of selected public sector Pakistani universities.

Considered one of the most popular HEC scholarships for Pakistani students, it also offers partial scholarships for students already enrolled at selected universities or institutes. </ReadMore>
        </div>
      </div>
      <div className="card mx-5" style={width}>
        <img src={require("../../images/NBPScholar.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Student Loan Scheme</h5>
            <ReadMore className="card-text">
Brief About Student Loan Scheme  

Pursuant to the announcement made by the Federal Finance Minister in his 2001-2002-budget speech, a STUDENTS LOAN SCHEME (SLS) for Education was launched by the Government of Pakistan in collaboration with major commercial banks of Pakistan (NBP, HBL, UBL, MCB and ABL). Under the Scheme, financial assistance is provided by way of Interest Free Loans to the meritorious students who have financial constraints for pursuing their studies in Scientific, Technical and Professional education within Pakistan.

The Scheme is being administered by a high powered committee comprising Deputy Governor, State Bank of Pakistan, Presidents of the commercial banks and representative of Ministry of Finance, Government of Pakistan.</ReadMore>
        </div>
      </div>
      <div className="card" style={width}>
        <img src={require("../../images/Peef.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">PEEF Scholarship</h5>
            <ReadMore className="card-text">PEEF is a proactive scholarship scheme which provides Scholarships at the doorstep of talented students of Punjab and other provinces, AJK, FATA, Gilgit Baltistan and ICT.</ReadMore>
        </div>
      </div>
      
      </div> */}

              <form method='GET' encType='multipart/form-data'>

                <div className="d-flex flex-wrap justify-content-center my-5">




                  {
                    filteredScholarships
                      .slice(currentPage * scholarshipPerPage, (currentPage + 1) * scholarshipPerPage)
                      .map(element => (
                        <>
                          <div className="card mt-3 mx-3" style={width}>
                            <div className='cropped'>
                              <img src={picurl + element.photo} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                              <h5 className="card-title fw-bold">{element.name}</h5>
                              <ReadMore className="card-text">{element.description}</ReadMore>
                              <a className='text-decoration-none text-primary fw-bold' href={element.url}>Visit Scholarship <i className="bi bi-arrow-right"></i></a>
                            </div>
                          </div>
                        </>
                      ))





                  }
                  {/* {displayedUniversities} */}




                </div>
                {
                  <ReactPaginate
                    pageCount={Math.ceil(filteredScholarships.length / scholarshipPerPage)}
                    marginPagesDisplayed={5}
                    pageRangeDisplayed={5}
                    onPageChange={({ selected }) => setCurrentPage(selected)}
                    containerClassName="pagination justify-content-center"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    activeClassName="active"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    previousLabel={<i className="bi bi-chevron-left"></i>}
                    nextLabel={<i className="bi bi-chevron-right"></i>}
                  />
                }
              </form>




            </div>
          </div>
        </div>
      </div>


    </>
  );
}




export default UserGovtScholarship;
// export default myFunction;