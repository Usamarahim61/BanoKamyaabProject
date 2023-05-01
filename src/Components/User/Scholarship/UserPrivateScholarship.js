// import React from "react";
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Navbar1 from '../../Navbar1';
import Sidebar from '../../Sidebar';
// import Navbar from './Navbar';
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
      <a onClick={toggleReadMore} className="read-or-hide text-primary text-decoration-none">
        {isReadMore ? "...read more" : " show less"}
      </a>
    </p>
  );
}
function UserPrivateScholarship() {

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

      const res = await fetch('/ViewPrivateScholarship', {
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
            <h1 className='pt-4 text-white text-uppercase text-center fw-bold mb-4 mt-5'>Private Scholarships</h1>
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
          <label for="fname">Enter Scholarship Name</label><br></br>
          <input className='searchinput1' type="text" id="fname" name="Private Scholarship" placeholder="Search Scholarship"/>          
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









































              <div className="d-flex justify-content-center mt-5">



                {/* <div className="card" style={width}>
        <img src={require("../../images/Ehsaas.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">EHSAAS UNDERGRADUATE SCHOLARSHIP PROGRAMME</h5>
            <ReadMore className="card-text">It is arguably one of the most famous scholarships in Pakistan for undergraduate students. Launched by the Government of Pakistan under its flagship Ehsaas Social Safety Net Programme, the Ehsaas Undergraduate Scholarship Programme has an annual budget of PKR 6 billion. It aims to help individuals with limited financial resources to complete their bachelor’s degrees in all major disciplines.

               The scholarship programme has also reserved 50% of its quota for female students while 2% has been reserved for students living with physical disabilities. </ReadMore>
        </div>
      </div>
      <div className="card mx-5" style={width}>
        <img src={require("../../images/Scotland.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">SCOTLAND PAKISTAN SCHOLARSHIPS FOR YOUNG WOMEN AND GIRLS</h5>
            <ReadMore className="card-text">If you are looking for scholarships for higher education in Pakistan that provide assistance to young women and girls, you don’t have to search any further. Funded by the Government of Scotland and administered by the British Council, this programme offers both bachelor’s and master’s scholarships in Pakistan.

The Scotland Pakistan Scholarships for Young Women and Girls offers awards to students studying the following disciplines:

Education
Sustainable Energy
Food Security and Agriculture
Health Sciences (except Medical Sciences)</ReadMore>
        </div>
      </div>
      <div className="card" style={width}>
        <img src={require("../../images/USAID.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">USAID-FUNDED MERIT AND NEEDS-BASED SCHOLARSHIP PROGRAMME</h5>
            <ReadMore className="card-text">​Launched by the United States Agency for International Development (USAID) in 2004, the USAID-funded Merit and Needs-Based Scholarship Programme provides funding to academically qualified students who cannot continue their studies due to financial restraints. The HEC serves as the nominating body for these fully funded scholarships for students in Pakistan

The USAID is currently offering bachelor’s and master’s scholarships in Pakistan. Moreover, one can apply for this programme at 31 partner universities in multiple fields. </ReadMore>
        </div>
      </div> */}


              </div>

              {/* <div className="d-flex justify-content-center mt-5">
      <div className="card" style={width}>
        <img src={require("../../images/OGDCL.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">OGDCL NEED-BASED SCHOLARSHIPS PROGRAM THROUGH HEC</h5>
            <ReadMore className="card-text">The HEC has also partnered with the Oil and Gas Development Company Limited (OGDCL) to offer engineering scholarships in Pakistan, among others, to underprivileged students. The OGDCL provides academically qualified students with fully funded scholarships in fields that are important to the country’s economic development.</ReadMore>
        </div>
      </div>
      <div className="card mx-5" style={width}>
        <img src={require("../../images/pbm.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">PAKISTAN BAIT-UL-MAL SCHOLARSHIP FOR DESERVING STUDENTS</h5>
            <ReadMore className="card-text">Those seeking scholarships for intermediate students in Pakistan can also apply at Pakistan Bait-ul-Mal for financial assistance. The semi-autonomous welfare organisation established through a 1992 Act of the Government of Pakistan offers funds for underprivileged students enrolled in public sector colleges and universities. The programme allows students to complete their degrees free of cost.

The Bait-ul-Mal Scholarship for Deserving Students awards scholarships to needy students in Pakistan on both semester and annual basis. If a student clears his or her exams successfully, their scholarship will remain applicable for the next academic cycle as well. However, in case of failure in any subject, the student will not be eligible to avail the scholarship.</ReadMore>
        </div>
      </div>
      <div className="card" style={width}>
        <img src={require("../../images/Logo-01.png")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Scholarship Name</h5>
            <ReadMore className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</ReadMore>
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




export default UserPrivateScholarship;
// export default myFunction;