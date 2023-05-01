import React, { useState } from 'react';
import AdminNavbar from '../AdminNavbar';
import AdminSidebar from '../AdminSidebar';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function AddDemographic() {
    // const [question, setQuestion] = useState('');
    // const [option1, setOption1] = useState('');
    // const [option2, setOption2] = useState('');
    // const [option3, setOption3] = useState('');
    // const [option4, setOption4] = useState('');
 const navigate = useNavigate();

    // const [Demographic, setDemographic] = useState({
    //     question: "",
    //     option1: "",
    //     option2: "",
    //     option3: "",
    //     option4: "",

    // });



    // const handleInput = (e) => {

    //     let name = e.target.name;
    //     let value = e.target.value;
    //     console.log(name, value);

    //     setDemographic({ ...Demographic, [name]: value })

    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const mcqData = { question:Demographic.question, options:[Demographic.option1, Demographic.option2, Demographic.option3, Demographic.option4] };
    //     console.log(mcqData);
    //     try {
    //         const response = await fetch('/AddDemographics', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(mcqData)
    //         });
    //         const data = await response.json();
    //         console.log(data);

    //         window.alert("Question Added Successfull");
    //         console.log("Question Added Successfull");
    //         navigate("/DemographicPage");
            
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("/AddDemographics", {
          question,
          options: { option1, option2, option3, option4 },
        });
        setMessage(response.data.message);
        console.log("Added Successfully");
        window.alert("Question added Successfully");
        navigate("/Demographicpage")
      } catch (err) {
        setMessage(err.response.data.message);
      }
    };



// const [question, setQuestion] = useState('');
// const [option1, setOption1] = useState('');
// const [option2, setOption2] = useState('');
// const [option3, setOption3] = useState('');
// const [option4, setOption4] = useState('');

// const handleSubmit = async (event) => {
//   event.preventDefault();

//   try {
//     const response = await fetch('/AddDemographic', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         question,
//         options: {
//           option1,
//           option2,
//           option3,
//           option4,
//         },
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to add demographic');
//     }

//     // Reset form fields
//     setQuestion('');
//     setOption1('');
//     setOption2('');
//     setOption3('');
//     setOption4('');

//     // TODO: Handle success
//   } catch (error) {
//     console.error(error);
//     // TODO: Handle error
//   }
// };

    return (
        <>
            <AdminNavbar />
            <AdminSidebar />


            <div className=" mt-5 ">
                <div className="Head">
                    <div className="overlay">
                        <h1 className="fw-bold fs-1 text-uppercase">Add Demographics Questions</h1>
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

export default AddDemographic;
