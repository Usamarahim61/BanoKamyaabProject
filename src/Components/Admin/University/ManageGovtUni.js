import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import AdminSidebar from "../AdminSidebar";
// import AdminPopup from "../AdminPopup";
import "../../CSS/Demographic.css"

function ManageGovtUniversity() {

  const navigate = useNavigate();

  // const [University, setUniversity] = useState({
  //   name: "",
  //   description: "",
  //   url: "",
  //   field: "",
  //   city: "",
  //   type:"",

  // });
  // const [Records, setRecords]=useState();
  // const handleInput = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   console.log(name, value);

  //   setUniversity({ ...University, [name]: value });

  // }


  // const PostData = async (e) => {
  //   e.preventDefault();

  //   const { name, description, url, field, city } = University;

  //   const res = await fetch("/AddUniversity", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name: name, description: description, url: url, field: field, city: city
  //     })
  //   });

  //   const data = await res.json();
  //   if (data.status === 422 || !data) {
  //     window.alert("Failed to Add");
  //     console.log("Failed to Add");
  //   }
  //   else {
  //     window.alert("University Added Successfull");
  //     console.log("University Added Successfull");
  //     navigate("/ManagePrivateUniversity");
  //     // <div class="alert alert-warning alert-dismissible fade show" role="alert">
  //     //   <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  //     //   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  //     // </div>

  //     // 
  //   }
  // }

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

      const res = await fetch('/ViewGovtUniversity', {
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
      navigate(0)
    }
  }

  return (
    <>
      <AdminNavbar />
      <AdminSidebar />

      <div className=" mt-5 ">
        <div class="Head">
          <div class="overlay">
            <h1 className="fw-bold fs-1 text-uppercase">Manage Govt. Universities</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5 py-5 shadow-lg ">

        <div className="d-flex justify-content-end mb-5">
          <Link className="btn btn-success py-2" to={"/AddGovtUniversity"}><i class="bi bi-plus fs-6"></i> Add University</Link>

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
            // const picurl = `http://localhost:4000/public/uploads`;

            return (

              <><li className="d-flex border rounded-2 shadow-sm mt-3 px-4 py-2">
                <table>
                  <tr className="col-9">
                    <th className="col-1">{id + 1} . </th>
                    {/* &nbstd; &nbstd; */}
                    <td className="col-3">{element.name}</td>
                    <td className="col-2">{element.field}</td>
                    <td className="col-2">{element.city}</td>
                    <td className=" col-1"><Link to={`/UpdateGovtUni/${element._id}`}><i class="bi bi-pencil-square fs-5 " ></i></Link>
                      <Link className="ms-4" onClick={() => DeleteUniversity(element._id)}><i class="bi bi-trash fs-5"></i></Link></td>
                  </tr>

                </table>
              </li>
              </>
            )

          })
        }





      </div>


    </>
  );
}

export default ManageGovtUniversity;