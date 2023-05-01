import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import AdminSidebar from "../AdminSidebar";
import AdminPopup from "../AdminPopup";
import "../../CSS/Demographic.css"

function ManagePrivateUniversity() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const togglePopup1 = () => {
    setIsOpen1(!isOpen1);
  }


  const [University, setUniversity] = useState({
    name: "",
    description: "",
    url: "",
    field: "",
    city: ""

  });
  // const [Records, setRecords]=useState();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);

    setUniversity({ ...University, [name]: value });

  }


  const PostData = async (e) => {
    e.preventDefault();

    const { name, description, url, field, city } = University;

    const res = await fetch("/AddUniversity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name, description: description, url: url, field: field, city: city
      })
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Failed to Add");
      console.log("Failed to Add");
    }
    else {
      window.alert("University Added Successfull");
      console.log("University Added Successfull");
      navigate("/ManagePrivateUniversity");
      // <div class="alert alert-warning alert-dismissible fade show" role="alert">
      //   <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      //   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      // </div>

      // 
    }
  }

  // GET DATA


  const [universitydata, setUniversitydata] = useState([{
    name: "",
    description: "",
    url: "",
    field: "",
    city: "",
  }]);

  const callUniversity = async () => {
    try {

      const res = await fetch('/ViewPrivateUniversity', {
        method: "GET",
        headers: {
          // Accept:"application/json",
          "Content-Type": "application/json"
        },
        // credentials:"include"
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


  // VIEW DATA INDIVIDUAL

  // const {id} = useParams("");
  // console.log(id);

  // const [Induniversitydata, setInduniversitydata] = useState([{
  //   name: "",
  //   description: "",
  //   url: "",
  // }]);

  // const callIndUniversity = async () => {
  //   try {

  //     const res = await fetch('/ViewUniversitydata/:id', {
  //       method: "GET",
  //       headers: {
  //         // Accept:"application/json",
  //         "Content-Type": "application/json"
  //       },
  //       // credentials:"include"
  //     });

  //     const data = await res.json();
  //     console.log(data);

  //     setInduniversitydata(data);


  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (err) {

  //     console.log(err);

  //   }
  // }

  // useEffect(() => {
  //   callIndUniversity();
  // }, []);

  // DELETE UNIVERSITY

  const DeleteUniversity = async (id) => {

    const res2 = await fetch(`/deleteUniversitydata/${id}`, {
      method: "DELETE",
      headers: {
        // Accept:"application/json",
        "Content-Type": "application/json"
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error")
    }
    else {
      alert("University Deleted Successfully");

      callUniversity();
      navigate("/ManagePrivateUniversity")
    }
  }



  return (
    <>
      <AdminNavbar />
      <AdminSidebar />

      <div className=" mt-5 ">
        <div class="Head">
          <div class="overlay">
            <h1 className="fw-bold fs-1 text-uppercase">Manage Private Universities</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5 py-5 shadow-lg ">

        <div className="d-flex justify-content-end mb-5">
          <Link className="btn btn-success py-2" to={"/AddPrivateUniversity"}><i class="bi bi-plus fs-6"></i> Add University</Link>

        </div>
        <div className="d-flex shadow-sm mt-3 px-4 py-2">
          <table>
            <tr className="col-9">
              <th className="col-1">No</th>
              <th className="col-3">University Name</th>
              <th className="col-2">Field</th>
              <th className="col-2">City</th>
              <th className="col-1"></th>

            </tr>
          </table>
        </div>

        {
          

          universitydata.map((element, id) => {
            const picurl = `http://localhost:4000/public/uploads`;
            
              return (

                <><li className="d-flex border rounded-2 shadow-sm mt-3 px-4 py-2">
                  <table>
                    <tr className="col-9">
                      <th className="col-1">{id + 1} . </th>
                      {/* &nbstd; &nbstd; */}
                      <td className="col-3">{element.name}</td>
                      <td className="col-2">{element.field}</td>
                      <td className="col-2">{element.city}</td>
                      <td className=" col-1"><Link to={`/UpdatePrivateUni/${element._id}`}><i class="bi bi-pencil-square fs-5 " ></i></Link>
                        <Link className="ms-4" onClick={() => DeleteUniversity(element._id)}><i class="bi bi-trash fs-5"></i></Link></td>
                    </tr>

                  </table>

                  {/* <div className=" col-1">
                  <Link to={`/UpdatePrivateUni/${element._id}`}><i class="bi bi-pencil-square fs-5 " ></i></Link>
                  <Link className="ms-4" onClick={() => DeleteUniversity(element._id)}><i class="bi bi-trash fs-5"></i></Link>
                </div> */}
                </li>
                </>
              )
            
          })
        }


        {/* <li className="d-flex border rounded-2 justify-content-between shadow-sm mt-3 px-4 py-2">
                    
                    <div className="col-9">

                      <p>Riphah International University</p>                        
                    </div>

                    <div className="d-flex justify-content-end col-1">
                        <Link onClick={togglePopup}><i class="bi bi-pencil-square fs-5 "></i></Link>
                        <Link className="ms-4"><i class="bi bi-trash fs-5"></i></Link>
                    </div>

                </li>                            

                <li className="d-flex border rounded-2 justify-content-between shadow-sm mt-3 px-4 py-2">
                    
                    <div className="col-9">

                      <p>University of Management and Technology</p>                        
                    </div>

                    <div className="d-flex justify-content-end col-1">
                        <Link onClick={togglePopup}><i class="bi bi-pencil-square fs-5 "></i></Link>
                        <Link className="ms-4"><i class="bi bi-trash fs-5"></i></Link>
                    </div>

                </li>

                <li className="d-flex border rounded-2 justify-content-between shadow-sm mt-3 px-4 py-2">
                    
                    <div className="col-9">

                      <p>National University of Computer and Emerging Sciences</p>                        
                    </div>

                    <div className="d-flex justify-content-end col-1">
                        <Link onClick={togglePopup}><i class="bi bi-pencil-square fs-5 "></i></Link>
                        <Link className="ms-4"><i class="bi bi-trash fs-5"></i></Link>
                    </div>

                </li>

                <li className="d-flex border rounded-2 justify-content-between shadow-sm mt-3 px-4 py-2">
                    
                    <div className="col-9">

                      <p>University of Lahore</p>                        
                    </div>

                    <div className="d-flex justify-content-end col-1">
                        <Link onClick={togglePopup}><i class="bi bi-pencil-square fs-5 "></i></Link>
                        <Link className="ms-4"><i class="bi bi-trash fs-5"></i></Link>
                    </div>

                </li>
                <li className="d-flex border rounded-2 justify-content-between shadow-sm mt-3 px-4 py-2">
                    
                    <div className="col-9">

                      <p>Aga Khan Medical University</p>                        
                    </div>

                    <div className="d-flex justify-content-end col-1">
                        <Link onClick={togglePopup}><i class="bi bi-pencil-square fs-5 "></i></Link>
                        <Link className="ms-4"><i class="bi bi-trash fs-5"></i></Link>
                    </div>

                </li>

                <li className="d-flex border rounded-2 justify-content-between shadow-sm mt-3 px-4 py-2">
                    
                    <div className="col-9">

                      <p>Shifa College of Medicine</p>                        
                    </div>

                    <div className="d-flex justify-content-end col-1">
                        <Link onClick={togglePopup}><i class="bi bi-pencil-square fs-5 "></i></Link>
                        <Link className="ms-4"><i class="bi bi-trash fs-5"></i></Link>
                    </div>

                </li> */}
        {/* </ol> */}


      </div>

      {isOpen && <AdminPopup
        content={<>

          <div class="ms-5  pb-1  col-md-11 shadow-lg">
            <form>
              <div class="p-3">
                <div class="ribbon786 mb-2">
                  <span class="ribbonadd2">Update University</span>
                </div>

                <div class="d-flex flex-column mb-3">
                  <label class="labels">Add Photo</label>
                  <input type="file"></input>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6"><label class="labels">University Name</label><input type="text" class="form-control" placeholder="Enter University Name" value="" /></div>
                  <div class="col-md-6"><label class="labels">Provide Link</label><input type="text" class="form-control" placeholder="Enter URL" value="" /></div>

                </div>
                <div class="row mt-3">
                  <div class="col-md-12"><label class="labels">Description</label><textarea type="text" class="form-control" placeholder="Description" value="" /></div>
                  <div class="col-md-6 mt-3"><label class="labels">Field</label><input type="text" class="form-control" placeholder="Enter Field" value="" /></div>
                  <div class="col-md-6 mt-3"><label class="labels">City</label><input type="text" class="form-control" placeholder="City" required /></div>

                </div>

              </div>

              <div class="my-3 text-center"><button class="btn btn-primary profile-button" type="submit">Update University</button></div>

            </form>


          </div>

        </>}
        handleClose={togglePopup}
      />}

      {isOpen1 && <AdminPopup
        content={<>

          <div class="ms-5 mt-3 pb-1  col-md-10 shadow-lg">
            <form method="POST">
              <div class="p-3">
                <div class="ribbon786 mb-2">
                  <span class="ribbonadd2">Add University</span>
                </div>
                <div class="d-flex flex-column mb-3">
                  <label class="labels">Add Photo</label>
                  <input type="file"></input>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6"><label class="labels">University Name</label><input name="name" id="name" type="text" class="form-control" placeholder="Enter University Name" value={University.name} onChange={handleInput} /></div>
                  <div class="col-md-6"><label class="labels">Provide Link</label><input name="url" id="url" type="text" class="form-control" placeholder="Enter URL" value={University.url} onChange={handleInput} /></div>

                </div>
                <div class="row mt-3">
                  <div class="col-md-12"><label class="labels">Description</label><textarea name="description" id="description" type="text" class="form-control" placeholder="Description" value={University.description} onChange={handleInput} /></div>
                  <div class="col-md-6 mt-3"><label class="labels">Field</label><input name="field" type="text" id="field" class="form-control" placeholder="Enter Field" value={University.field} onChange={handleInput} /></div>
                  <div class="col-md-6 mt-3"><label class="labels">City</label><input name="city" id="city" type="text" class="form-control" placeholder="City" value={University.city} onChange={handleInput} required /></div>

                </div>

              </div>

              <div class="my-3 text-center"><Link class="btn btn-primary profile-button" type="submit" onClick={PostData}>Add University</Link></div>


            </form>


          </div>

        </>}
        handleClose={togglePopup1}
      />}
    </>
  );
}

export default ManagePrivateUniversity;