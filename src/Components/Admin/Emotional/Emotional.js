import React,{ useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import AdminSidebar from "../AdminSidebar";
// import { quiz } from '../../../Components/';
// import { quiz } from "./displayquestion";
import "../../CSS/Demographic.css"
// import AdminPopup from "../AdminPopup";

function Emotional() {

  const [DisplayEmotional, setDisplayEmotional] = useState([]);
  const navigate = useNavigate();

  
  const callEmotional = async () => {
    try {

      const res = await fetch('/DisplayEmotional', {
        method: "GET",
        headers: {
          // Accept:"application/json",
          "Content-Type": "application/json"
        },
        // credentials:"include"
      });

      const data = await res.json();
      console.log(data);

      setDisplayEmotional(data);


      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {

      console.log(err);

    }
  }

  useEffect(() => {
    callEmotional();
  }, []);


    const DeleteEmotional = async (id) => {

        const res2 = await fetch(`/DeleteEmotional/${id}`, {
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
          alert("Question Deleted Successfully");
    
        callEmotional();
        //   navigate("/Demographicpage")
        }
      }


  return (
    <>
    <AdminNavbar/>
    <AdminSidebar/>
    <div className=" mt-5 ">
    <div class="Head">
	    <div class="overlay">
        <h1 className="fw-bold fs-1">MANAGE Emotional Intelligence</h1>
      </div>
    </div>
    </div>
    <div className="container mt-5 py-5 shadow-lg ">
        <div>
            <div className="d-flex justify-content-end mb-5">
                <Link className="btn btn-success py-2" to={"/AddEmotional"}><i class="bi bi-plus fs-6"></i> Add Questions</Link>

            </div>
            <ol>
                {
                    DisplayEmotional.map((q,id)=>(
                <li key={id} className="d-flex border rounded-2 justify-content-between shadow-sm mt-3 px-4 py-2">
                    
                    <div className="col-9">

                      <p>{q.question}</p>                        
                    </div>

                    <div className="d-flex justify-content-end col-1">
                        <Link to={`/UpdateEmotional/${q._id}`} ><i class="bi bi-pencil-square fs-5 "></i></Link>
                        <Link className="ms-4" onClick={() => DeleteEmotional(q._id)}><i class="bi bi-trash fs-5" ></i></Link>
                    </div>

                </li>                            
                        )
                    )

                }

            </ol>
        </div>

    </div>



    </>
  );
}

export default Emotional;