// import React from "react";
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Navbar1 from '../../Navbar1';
import Sidebar from '../../Sidebar';
import ReactPaginate from 'react-paginate';



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
function UserGovtUni() {

  const width = {
    width: "18rem"
  };


  const [universitydata, setUniversitydata] = useState([{
    name: "",
    description: "",
    url: "",
    photo: "",
    field: "",
    city: "",
  }]);

  const [Searchuniversity, setSearchUniversity] = useState({
    field: "",
    city: "",
  });


  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);

    setSearchUniversity({ ...Searchuniversity, [name]: value });

  }




  const callUniversity = async () => {
    try {

      const res = await fetch('/ViewGovtUniversity', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },

      });

      const data = await res.json();
      console.log(data);

      setUniversitydata(data);


      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {

      console.log(err);

    }
  }

  useEffect(() => {
    callUniversity();

  }, []);




  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const universitiesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const picurl = 'http://localhost:4000/public/uploads/';

  // Filter universities based on search criteria
  useEffect(() => {
    const filtered = universitydata.filter(element =>
      (!Searchuniversity.field || element.field.toLowerCase() === Searchuniversity.field.toLowerCase()) &&
      (!Searchuniversity.city || element.city.toLowerCase() === Searchuniversity.city.toLowerCase())
    );
    setFilteredUniversities(filtered);
  }, [universitydata, Searchuniversity]);




  return (
    <>
      <Navbar1 />
      <Sidebar />
      <div className="py-5">
        <div className="container-fluid">
          <div className='py-5 b_g parent bg-success'>
            <h1 className='pt-4 text-white text-uppercase text-center fw-bold mb-4 mt-5'>Government Universities</h1>
          </div>

          <div className='container shadow-lg p-5 child bg-white rounded-3'>
            <div className='mt-3 content' data-aos="fade-up" data-aos-duration="2000">
              <h1 className='ribbon'> Introduction</h1>
              <p className='lh-lg homefontsize mt-4'>A public university is a university which is mainly funded by public means through a national government. Tuition is much cheaper than that of a private university. It is subject to government rules and regulations. Elementary school, secondary, and higher education are the three levels of education in Pakistan and the government colleges provide education to the fun session with students of almost all the levels. In Pakistan, government college are preferred as the quality of education in such colleges is great. In addition, the fees that these colleges charge from the students is very less. The students can access quality education by paying very minimal fees. There are many Universities, and colleges in Pakistan, students from all over the world come to study in these Universities.</p>
            </div>

            <div className=' pb-5'>
              <form method='post'>
                <div className='d-flex justify-content-center pt-5 px-1 '>
                  <div>
                    <label htmlfor="fname">Enter City</label><br></br>
                    <input className='searchinput' type="text" id="fname" name="city" placeholder="City" onChange={handleInput} />
                  </div>
                  <div className='ms-5'>
                    <label htmlFor="fname">Enter Field</label><br></br>
                    <input className='searchinput' type="text" id="fname" name="field" placeholder="Field" onChange={handleInput} />
                  </div>
                  {/* <div className='d-flex align-items-center'>
                    <a className='btn btn-success px-5 rounded-5' onSubmit={callUniversity}>Search</a>
                  </div> */}
                </div>
              </form>

              <form method='GET' encType='multipart/form-data'>

                <div className="d-flex flex-wrap justify-content-center my-5">




                  {
                    filteredUniversities
                      .slice(currentPage * universitiesPerPage, (currentPage + 1) * universitiesPerPage)
                      .map(element => (
                        <>
                          <div className="card mt-3 mx-3" style={width}>
                            <div className='cropped'>
                              <img src={picurl + element.photo} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                              <h5 className="card-title fw-bold">{element.name}</h5>
                              <ReadMore className="card-text">{element.description}</ReadMore>
                              <a className='text-decoration-none text-primary fw-bold' href={element.url}>Visit University <i className="bi bi-arrow-right"></i></a>
                            </div>
                          </div>
                        </>
                      ))





                  }
                  {/* {displayedUniversities} */}




                </div>
                {
                  <ReactPaginate
                    pageCount={Math.ceil(filteredUniversities.length / universitiesPerPage)}
                    marginPagesDisplayed={2}
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

              {/* <div className="d-flex justify-content-center mt-5">
                <div className="card" style={width}>
                  <img src={require("../../images/FatimaUni.png")} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Fatima Jinnah Medical University</h5>
                    <ReadMore className="card-text">Fatima Jinnah Medical University early known as Balak Ram Medical College. It trains and educate the female students of Pakistan and provide the healthcare facilities to the people of Pakistan.  It is established in 1948. It also associates with the Sir Ganga Ram Hospital that are established in 1921 and the Pakistan Medical and Dental Council.</ReadMore>
                  </div>
                </div>
                <div className="card mx-5" style={width}>
                  <img src={require("../../images/VertUni.jpg")} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">University of Veterinary and Animal Sciences</h5>
                    <ReadMore className="card-text">University of Veterinary and Animal Sciences is also the government university that is commonly known as Lahore Veterinary College. It is established in 1882 and it is also considered in the oldest institution of Veterinary Science.

                      The chancellor of the university is the governor of Punjab. Early it was affiliated with Agriculture university and after it become the distinct entity. It also offers Undergraduate, Postgraduate and doctoral programs.</ReadMore>
                  </div>
                </div>
                <div className="card" style={width}>
                  <img src={require("../../images/Arid.jpg")} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Pir Mehr Ali Shah Arid Agriculture University</h5>
                    <ReadMore className="card-text">Pir Mehr Ali Shah Arid Agriculture University Rawalpindi (PMAS-AAUR) is an agricultural college that was established by the government of Punjab in the 1970s.  The college became a university in 1994. Among the services that PMAS-AAUR provides to its local community are technology transfer, outreach farm services, visits to the farming community to help solve their issues and problems, demonstrations at farm fields.  The F.T. department also provides food related services, an annual farmer day and a pet clinic, run free of cost by the Faculty of Veterinary and Animal Science.  PMAS-AAUR has also signed a number of of MOUs and collaborates with both national and international partners.</ReadMore>
                  </div>
                </div>

              </div> */}
            </div>












          </div>
        </div>
      </div>


    </>
  );
}




export default UserGovtUni;
// export default myFunction;