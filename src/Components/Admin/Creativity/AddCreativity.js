import React, { useState } from 'react';
import AdminNavbar from '../AdminNavbar';
import AdminSidebar from '../AdminSidebar';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function AddCreativity() {

 const navigate = useNavigate();

    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("/AddCreativity", {
          question,
          options: { option1, option2, option3, option4 },
        });
        setMessage(response.data.message);
        console.log("Added Successfully");
        window.alert("Question added Successfully");
        navigate("/AdminCreativity")
      } catch (err) {
        setMessage(err.response.data.message);
      }
    };



    return (
        <>
            <AdminNavbar />
            <AdminSidebar />


            <div className=" mt-5 ">
                <div className="Head">
                    <div className="overlay">
                        <h1 className="fw-bold fs-1 text-uppercase">Add Creativity Questions</h1>
                    </div>
                </div>
            </div>


            <div className="ms-5 mt-3 col-md-10 border-end shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="p-3">
                        <div className="ribbon786">
                            <span className="ribbonadd">Add Question</span>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-12"><label className="labels">Question</label><textarea rows="2" cols="" type="text" name='question' className="form-control" placeholder="Enter Question" value={question} onChange={(e) => setQuestion(e.target.value)} required></textarea></div>

                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6"><label className="labels">Enter Option 1</label><input type="text" name='option1' className="form-control" placeholder="Enter Option 1" value={option1} onChange={(e) => setOption1(e.target.value)} required/></div><br></br>
                            <div className="col-md-6"><label className="labels">Enter Option 2</label><input type="text" name='option2' className="form-control" placeholder="Enter Option 2" value={option2} onChange={(e) => setOption2(e.target.value)} required/></div>
                            <div className="col-md-6 mt-3"><label className="labels">Enter Option 3</label><input type="text" name='option3' className="form-control" placeholder="Enter Option 3" value={option3} onChange={(e) => setOption3(e.target.value)} /></div>
                            <div className="col-md-6 mt-3"><label className="labels">Enter Option 4</label><input type="text" name='option4' className="form-control" placeholder="Enter Option 4" value={option4} onChange={(e) => setOption4(e.target.value)} /></div>

                        </div>

                    </div>

                    <div className="my-5 text-center"><button className="btn btn-primary profile-button" type="submit">Add Questions</button></div>

                </form>


            </div>
        </>
    );
}

export default AddCreativity;
