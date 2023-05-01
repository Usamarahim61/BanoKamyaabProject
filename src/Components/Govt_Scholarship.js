// import React from "react";
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar";
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
function Govt_Scholarship() {

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
      <Navbar />
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




export default Govt_Scholarship;
