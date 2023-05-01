import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/section.css";
import Navbar1 from "../Navbar1";
import Sidebar from "../Sidebar";

function Section1() {



  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {

    setIsShown(current => !current);


  };

  const navigate = useNavigate();

  const handleInput = (e) => {
    const  name = e.target.name;
    const value = e.target.value;
console.log(name,value)
    setQuestion([{...Question,[name]:value}]);
  };

  const [Question, setQuestion] = useState([
  ]);
  const [option, setOptions] = useState("")

  const callDemographic = async () => {
    try {

      const res = await fetch('/DisplayDemographic', {
        method: "GET",
        headers: {
          // Accept:"application/json",
          "Content-Type": "application/json"
        },
        // credentials:"include"
      });

      const data = await res.json();
      console.log(data);

      setQuestion(data);
      // const { option1, option2, option3, option4 } = data.options[0];
      // setOptions({ option1, option2, option3, option4 });



      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {

      console.log(err);

    }
  }

  useEffect(() => {
    callDemographic();
  }, []);

  const handleSubmit = async (e) => {


    e.preventDefault();
    const mcqData = {question: Question, option:option};
    console.log(mcqData);
    try {
        const response = await fetch(`/AddDemoTest`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json' },
            body: JSON.stringify(mcqData)
        });
        const data = await response.json();
        console.log(data);

        window.alert("Question Submitted Successfull");
        console.log("Question Submitted Successfull");
        navigate("/MDCCTmenu");

    } catch (err) {
        console.error(err);
    }
};


  return (
    <>
      <Navbar1 />
      <Sidebar />

      <div className=" mt-5 ">
        <div className="Head">
          <div className="overlay">
            <h1 className="fw-bold fs-1">DEMOGRAPHICS</h1>
          </div>
        </div>
      </div>
      <div className="unselectable container px-5 pb-1 border shadow-lg  bg-light">

        <form className="mt-5" onSubmit={handleSubmit}>
          <ol>
            { Array.isArray(Question)
        ?
              Question.map((q, id) => (


                <li key={q._id} className="mt-5">
                  <div className="col-12 d-flex align-items-end">
                    <p className="mb-0 homefontsize fw-bold" >{q.question}</p>
                    <input hidden  name={q.id} value={q.question} onChange={(e) => {
              const newQuestions = [...Question];
              newQuestions[id].question = e.target.value;
              setQuestion(newQuestions);
              console.log(newQuestions);
            }}></input>
                  </div>
                  <div className="col-12 d-flex">

                    <table>

                      {
                        q.options.map((options) => (
                          // <tr key={options} className="col-12 ps-5">
                          <tbody>
                            <td className="col-2">
                              <label >
                                <input className=" option-input radio" type="radio" name={q._id} value={options.option1} onChange={() => {
                            const newQuestions = [...option];
                            newQuestions[id].selectedOption = options.option1;
                            setOptions(newQuestions);
                            console.log(newQuestions);
                          }}
                          checked={q.selectedOption === options.option1}/> {options.option1}
                              </label>
                            </td>

                            <td className="col-2">
                              <label >
                                <input className=" option-input radio" type="radio" name={q._id} value={options.option2} onChange={() => {
                            const newQuestions = [...option];
                            newQuestions[id].selectedOption = options.option2;
                            setOptions(newQuestions);
                            console.log(newQuestions);
                          }}
                          checked={q.selectedOption === options.option2}/>{options.option2}
                              </label>
                            </td>
                            
                            {options.option3 &&
                              <td className="col-2">

                                <label >
                                  <input className=" option-input radio" type="radio" name={q._id} value={options.option3} onChange={() => {
                              const newQuestions = [...option];
                              newQuestions[id].selectedOption = options.option3;
                              setOptions(newQuestions);
                              console.log(newQuestions);
                            }}
                            checked={q.selectedOption === options.option3}/>{options.option3}
                                </label>
                              </td>
                            }
                            {options.option4 &&
                              <td className="col-2">
                                <label >
                                  <input className=" option-input radio" type="radio" name={q._id} value={options.option4} onChange={() => {
                              const newQuestions = [...option];
                              newQuestions[id].selectedOption = options.option4;
                              setOptions(newQuestions);
                              console.log(newQuestions);
                            }}
                            checked={q.selectedOption === options.option4} />{options.option4}
                                </label>
                              </td>
                            }
</tbody>
                          // </tr>
                        ))


                      }



                    </table>
                  </div>
                </li>
              )):null
            }

          </ol>



         


          <div className="my-5 d-flex justify-content-end">
            <button type="submit" className="homefontsize fw-bold btn btn-success px-5 py-2">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Section1;
