import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import AdminSidebar from "../AdminSidebar";
import AdminPopup from "../AdminPopup";
import "../../CSS/Demographic.css"

function ManagePrivateScholarship() {

  const navigate = useNavigate();



  // GET DATA


  const [Scholarshipdata, setScholarshipdata] = useState([{
    name: "",
    // description: "",
    // url: "",
    // photo: "",
    city: "",
  }]);

  const callScholarship = async () => {
    try {

      const res = await fetch('/ViewPrivateScholarship', {
        method: "GET",
        headers: {
          // Accept:"application/json",
          "Content-Type": "application/json"
        },
        // credentials:"include"
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


  // DELETE UNIVERSITY

  const DeleteScholarship = async (id) => {

    const res2 = await fetch(`/deleteScholarshipdata/${id}`, {
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
      alert("Scholarship Deleted Successfully");

      callScholarship();
      navigate("/ManagePrivateScholar")
    }
  }





  return (
    <>
    <AdminNavbar/>
    <AdminSidebar/>

    <div className=" mt-5 ">
        <div class="Head">
          <div class="overlay">
            <h1 className="fw-bold fs-1 text-uppercase">Manage Private Scholarship</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5 py-5 shadow-lg ">

        <div className="d-flex justify-content-end mb-5">
          <Link className="btn btn-success py-2" to={"/AddPrivateScholarship"}><i class="bi bi-plus fs-6"></i> Add Scholarship</Link>

        </div>
        <div className="d-flex shadow-sm mt-3 px-4 py-2">
          <table>
            <tr className="col-9">
              <th className="col-1">No</th>
              <th className="col-3">Scholarship Name</th>
              <th className="col-2">City</th>
              <th className="col-2"></th>

            </tr>
          </table>
        </div>

        {
          

          Scholarshipdata.map((element, id) => {
            const picurl = `http://localhost:4000/public/uploads`;
            
              return (

                <><li className="d-flex border rounded-2 shadow-sm mt-3 px-4 py-2">
                  <table>
                    <tr className="col-9">
                      <th className="col-1">{id + 1} . </th>
                      {/* &nbstd; &nbstd; */}
                      <td className="col-3">{element.name}</td>
                      {/* <td className="col-2">{element.field}</td> */}
                      <td className="col-2">{element.city}</td>
                      <td className=" col-2 text-end"><Link to={`/UpdatePrivateScholarship/${element._id}`} className="mx-4"><i class="bi bi-pencil-square fs-5 " ></i></Link>
                        <Link className="ms-4" onClick={() => DeleteScholarship(element._id)}><i class="bi bi-trash fs-5"></i></Link></td>
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

export default ManagePrivateScholarship;