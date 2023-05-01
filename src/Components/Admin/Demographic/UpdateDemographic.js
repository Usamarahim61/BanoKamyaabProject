import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar';
import AdminSidebar from '../AdminSidebar';
// import { options } from '../../../../backend/Router/auth';

const UpdateDemographic = () => {

    const { id } = useParams();
    console.log(id);

    const navigate = useNavigate();

    const [questions, setQuestion] = useState({});
    const [options,setOptions]=useState({
            option1: "",
            option2: "",
            option3: "",
            option4: "",
    });
    // const [question, setQuestion] = useState('');
    // const [option1, setOption1] = useState('');
    // const [option2, setOption2] = useState('');
    // const [option3, setOption3] = useState('');
    // const [option4, setOption4] = useState('');


    // const handleInput = (e, id) => {
    //     const { name, value } = e.target;
    //     if (name.startsWith('option')) {
    //       const index = parseInt(name.split('-')[1]);
    //       setIndDemographicdata((prevState) => {
    //         const options = [...prevState.options];
    //         options[index] = value;
    //         return {
    //           ...prevState,
    //           options
    //         };
    //       });
    //     } else {
    //       setIndDemographicdata((prevState) => ({
    //         ...prevState,
    //         [name]: value
    //       }));
    //     }
    //   };


    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value);

        setQuestion({...questions, [name]: value });
        
        setOptions({...options, [name]:value})
    }

    // const handleInput = (e) => {
    //     const { name, value } = e.target;
    //     if (name === "option1" || name === "option2" || name === "option3" || name === "option4" ) {
    //         const index = e.target.getAttribute("data-index");
    //         const updatedArray = [...IndDemographicdata.options];
    //         updatedArray[0][index] = value;
    //         setIndDemographicdata({ ...IndDemographicdata, options: updatedArray });
    //     } else {
    //         setIndDemographicdata({ ...IndDemographicdata, [name]: value });
    //     }
    // };



    const callIndDemographic = useCallback(async () => {
        //     const { data } = await axios.get(`/ViewDemographic/${id}`);
        //   setQuestion(data.question);
        //   setOption1(data.options[0].option1);
        //   setOption2(data.options[0].option2);
        //   setOption3(data.options[0].option3);
        //   setOption4(data.options[0].option4);
        try {
            const response = await axios.get(`/ViewDemographic/${id.trim()}`);
            const demographicData = response.data;
            // const question1=;
            setQuestion(demographicData);
            const {option1,option2,option3,option4}=demographicData.options[0];
            setOptions({option1,option2,option3,option4});
        } catch (error) {
            console.log(error);
        }
        // fetchDemographic();
    }, [id]);

    useEffect(() => {
        callIndDemographic();
    }, [callIndDemographic]);

    const UpdateDemographic = async (e) => {


        e.preventDefault();
        const mcqData = { question: questions.question, options: [options] };
        console.log(mcqData);
        try {
            const response = await fetch(`/UpdateDemographic/${id.trim()}`, {
                method: 'PATCH',
                headers: { 
                    'Content-Type': 'application/json' },
                body: JSON.stringify(mcqData)
            });
            const data = await response.json();
            console.log(data);

            window.alert("Question Updated Successfull");
            console.log("Question Updated Successfull");
            navigate("/DemographicPage");

        } catch (err) {
            console.error(err);
        }
    };


    return (
        <>
            <AdminNavbar />
            <AdminSidebar />

            <div className=" mt-5 ">
                <div className="Head">
                    <div className="overlay">
                        <h1 className="fw-bold fs-1 text-uppercase">Demographic</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="ms-5  pb-1  col-md-11 shadow-lg mb-4">
                    <form method='POST' onSubmit={UpdateDemographic}>
                        <div className="p-3">
                            <div className="ribbon786 mb-2">
                                <span className="ribbonadd2">Update Questions</span>
                            </div>

                            <div className="row mt-2">
                                <div className="col-md-12"><label className="labels">Question</label><textarea rows="2" cols="" type="text" name='question' className="form-control" placeholder="Enter Question" value={questions.question} onChange={handleInput}></textarea></div>
                            </div>

                            <div className="row mt-3">
                                {/* {
                                    IndDemographicdata.options.map((q, id) => (
                                        <div className="col-md-6 mt-3">
                                            <label className="labels">Enter Option {id + 1}</label>
                                            <input type="text" name={`option${id + 1}`} className="form-control" placeholder={`Enter Option ${id + 1}`} value={ q } onChange={handleInput} />
                                        </div>
                                    ))
                                } */}

                                <div className="col-md-6 mt-3">
                                    <label className="labels">Enter Option</label>
                                    <input type="text" name="option1" id="option1" className="form-control" placeholder={`Enter Option 1`} value={options.option1} onChange={handleInput} />
                                    <input type="text" name="option2" className="form-control" placeholder={`Enter Option 2`} value={options.option2}  onChange={handleInput} />
                                    <input type="text" name="option3" className="form-control" placeholder={`Enter Option 3`} value={options.option3} onChange={handleInput} />
                                    <input type="text" name="option4" className="form-control" placeholder={`Enter Option 4`} value={options.option4} onChange={handleInput} />


                                </div>
                            </div>
                        </div>
                        <div className="my-3 text-center"><button className="btn btn-primary profile-button" type="submit">Update Question</button></div>

                    </form>


                </div>
            </div>
        </>
    )
}

export default UpdateDemographic;
