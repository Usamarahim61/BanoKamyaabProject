
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
      <a onClick={toggleReadMore} className="read-or-hide text-primary text-decoration-none">
        {isReadMore ? "...read more" : " show less"}
      </a>
    </p>
  );
}

function UserPrivateUni() {

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

      const res = await fetch('/ViewPrivateUniversity', {
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

  const [displayedUniversities, setDisplayedUniversities] = useState();





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
            <h1 className='pt-4 text-white text-uppercase text-center fw-bold mb-4 mt-5'>Private Universities</h1>
          </div>

          <div className='container shadow-lg p-5 child bg-white rounded-3'>
            <div className='mt-3 content' data-aos="fade-up" data-aos-duration="2000">
              <h1 className='ribbon'> Introduction</h1>
              <p className='lh-lg homefontsize pt-4'>Private universities and private colleges are institutions of higher education, not operated, owned, or institutionally funded by governments. They may (and often do) receive from governments tax breaks, public student loans, and grants. Depending on their location, private universities may be subject to government regulation. Private universities may be contrasted with public universities and national universities. Many private universities are nonprofit organizations.</p>
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

            </div>
          </div>
        </div>
      </div>


    </>
  );
}




export default UserPrivateUni;
