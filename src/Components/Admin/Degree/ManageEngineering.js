import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import AdminSidebar from "../AdminSidebar";
import AdminPopup from "../AdminPopup";
import "../../CSS/Demographic.css"
import "../../CSS/AdminRibbon.css"

function ManageEngineering() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    const togglePopup1 = () => {
        setIsOpen1(!isOpen1);
      }
const navigate =useNavigate();
      
// GET DATA

const [Degreedata, setDegreedata] = useState([{
  name: "",
  description: "",
}]);

const callDegree = async () => {
  try {

    const res = await fetch('/ViewEngineeringDegree', {
      method: "GET",
      headers: {
        // Accept:"application/json",
        "Content-Type": "application/json"
      },
      // credentials:"include"
    });

    const data = await res.json();
    console.log(data);

    setDegreedata(data);


    if (!res.status === 200) {
      const error = new Error(res.error);
      throw error;
    }
  } catch (err) {

    console.log(err);

  }
}

useEffect(() => {
  callDegree();
}, []);


// DELETE UNIVERSITY

const DeleteDegree = async (id) => {

  const res2 = await fetch(`/deleteDegreedata/${id}`, {
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
    alert("Degree Deleted Successfully");

    callDegree();
    navigate(0)
  }
}








  return (
    
     <>
    <AdminNavbar/>
    <AdminSidebar/>

    <div className=" mt-5 ">
        <div class="Head">
          <div class="overlay">
            <h1 className="fw-bold fs-1 text-uppercase">Manage Engineering Degree</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5 py-5 shadow-lg ">

        <div className="d-flex justify-content-end mb-5">
          <Link className="btn btn-success py-2" to={"/AddEngineerDegree"}><i class="bi bi-plus fs-6"></i> Add Degree</Link>

        </div>
        <div className="d-flex shadow-sm mt-3 px-4 py-2">
          <table>
            <tr className="col-9">
              <th className="col-2">No</th>
              <th className="col-4">Degree Name</th>
              <th className="col-2"></th>

            </tr>
          </table>
        </div>

        {
          

          Degreedata.map((element, id) => {
            const picurl = `http://localhost:4000/public/uploads`;
            
              return (

                <><li className="d-flex border rounded-2 shadow-sm mt-3 px-4 py-2">
                  <table>
                    <tr className="col-9">
                      <th className="col-2">{id + 1} . </th>
                      {/* &nbstd; &nbstd; */}
                      <td className="col-4">{element.name}</td>
                      {/* <td className="col-2">{element.field}</td> */}
                      {/* <td className="col-2">{element.city}</td> */}
                      <td className=" col-2 text-end"><Link to={`/UpdateEngineerDegree/${element._id}`} className="mx-4"><i class="bi bi-pencil-square fs-5 " ></i></Link>
                        <Link className="ms-4" onClick={() => DeleteDegree(element._id)}><i class="bi bi-trash fs-5"></i></Link></td>
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

export default ManageEngineering;