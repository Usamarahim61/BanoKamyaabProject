import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar';
import AdminSidebar from '../AdminSidebar';
// import { options } from '../../../../backend/Router/auth';

const UpdatePersonality = () => {

    const { id } = useParams();
    console.log(id);

    const navigate = useNavigate();

    const [questions, setQuestion] = useState({});

    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value);

        setQuestion({...questions, [name]: value });
    }





    const callIndPersonality = useCallback(async () => {

        try {
            const response = await axios.get(`/ViewPersonality/${id.trim()}`);
            const PersonalityData = response.data;
            // const question1=;
            setQuestion(PersonalityData);
            // const {option1,option2,option3,option4}=demographicData.options[0];
            // setOptions({option1,option2,option3,option4});
        } catch (error) {
            console.log(error);
        }
        // fetchDemographic();
    }, [id]);

    useEffect(() => {
        callIndPersonality();
    }, [callIndPersonality]);

    const UpdatePersonality = async (e) => {


        e.preventDefault();
        const mcqData = { question: questions.question};
        console.log(mcqData);
        try {
            const response = await fetch(`/UpdatePersonality/${id.trim()}`, {
                method: 'PATCH',
                headers: { 
                    'Content-Type': 'application/json' },
                body: JSON.stringify(mcqData)
            });
            const data = await response.json();
            console.log(data);

            window.alert("Question Updated Successfull");
            console.log("Question Updated Successfull");
            navigate("/Personality");

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
                        <h1 className="fw-bold fs-1 text-uppercase">Personality</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="ms-5  pb-1  col-md-11 shadow-lg mb-4">
                    <form method='POST' onSubmit={UpdatePersonality}>
                        <div className="p-3">
                            <div className="ribbon786 mb-2">
                                <span className="ribbonadd2">Update Questions</span>
                            </div>

                            <div className="row mt-2">
                                <div className="col-md-12"><label className="labels">Question</label><textarea rows="2" cols="" type="text" name='question' className="form-control" placeholder="Enter Question" value={questions.question} onChange={handleInput}></textarea></div>
                            </div>

                        </div>
                        <div className="my-3 text-center"><button className="btn btn-primary profile-button" type="submit">Update Question</button></div>

                    </form>


                </div>
            </div>
        </>
    )
}

export default UpdatePersonality;
