import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import "../CSS/Profile.css"
import Navbar1 from "../Navbar1";
import Sidebar from "../Sidebar";

function Profile1() {
    const [isShown, setIsShown] = useState(false);
    const navigate = useNavigate();

    const handleClick = event => {

        setIsShown(current => !current);


    };

    const [userdata, setUserdata] = useState({
        photo: "",
        fname: "",
        lname:"",
        email: "",
        password: "",
        DOB: "",
        city: "",
        gender: "",
        mobile: Number,

    });


    const handlephoto = (e) => {


        setUserdata({ ...userdata, photo: e.target.files[0] });
        console.log(e.target.files[0]);

        // setSelectedFile(e.target.files[0]);


    }

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value);

        setUserdata({ ...userdata, [name]: value });

    }


    const Postdata = async (e) => { 
        e.preventDefault();


        const formData = new FormData();
        formData.append('photo', userdata.photo);
        formData.append('name', userdata.fname);
        formData.append('name', userdata.lname);
        formData.append('email', userdata.email);
        formData.append('mobile', userdata.mobile);
        formData.append('gender', userdata.gender);
        formData.append('DOB', userdata.DOB);
        // formData.append('type', userdata.type);

        axios.patch(`/UpdateProfile`, formData)
            .then((response) => {
                console.log(response);
                window.alert("Profile Updated Successfull");
                console.log("Profile Updated Successfull");
                  navigate(0);
            })
            .catch((error) => {
                console.error(error);
                window.alert("Failed to Update");
                console.log("Failed to Update");
            });



    }

    const callProfile = async () => {
        try {
            const res = await fetch('/UserProfile', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);

            setUserdata(data);


            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {

            console.log(err);
            navigate("/Login");

        }
    }

    useEffect(() => {
        callProfile();
    }, []);

const picurl="http://localhost:4000/public/uploads/"


    return (
        <>
            <Navbar1 />
            <Sidebar />
            <div className="container rounded bg-white mt-5 mb-5">

                <div className="d-flex flex-wrap">
                    {/* <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src={userdata.photo} alt="UserPhoto" /><span className="font-weight-bold">{userdata.name}</span><span className="text-black-50">{userdata.email}</span>
                                <input name="photo" id="photo" type="file" accept=".jpg , .jpeg , .png" className="form-control" onClick={handlephoto} />
                            </div>
                        </div> */}
                    <div className=" col-md-9">
                        <form className=" d-flex flex-wrap" method="POST" encType="multipart/form-data">
                            <div className="col-md-4 border-right">
                                <div className="d-flex flex-column align-items-center text-center p-3 py-5 ">{userdata.photo?<img className="rounded-circle mt-5" width="180px" height={"180px"} src={picurl+userdata.photo} alt="UserPhoto" />:<img className="rounded-circle mt-5 " width="180px" height="180px" src={"https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"} alt="UserPhoto" />}<span className="font-weight-bold">{userdata.fname}</span><span className="text-black-50">{userdata.email}</span>
                                    <input name="photo" id="photo" type="file" accept=".jpg , .jpeg , .png" className="form-control" onChange={handlephoto} />
                                </div>
                            </div>
                            <div className=" col-md-8 border-right p-3 pt-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Profile Settings</h4>
                                    {/* <Link to="/EditProfile" className="btn btn-success">Edit Profile</Link> */}
                                </div>
                                <div className="row ">
                                    <div className="col-md-6"><label className="labels">First Name</label><input name="fname" id="fname" type="text" className="form-control" placeholder="First Name" value={userdata.fname} onChange={handleInput}/></div>
                                    <div className="col-md-6"><label className="labels">Last Name</label><input name="lname" id="lname" type="text" className="form-control" placeholder="Last Name" value={userdata.lname} onChange={handleInput}/></div>

                                </div>
                                <div className="row ">
                                    <div className="col-md-12"><label className="labels">Mobile Number</label><input name="mobile" type="text" className="form-control" placeholder="enter phone number" value={userdata.mobile} onChange={handleInput}></input></div>
                                    <div className="col-md-12"><label className="labels">Date of Birth</label><input name="DOB" type="date" className="form-control" placeholder="DOB" value={userdata.DOB} onChange={handleInput}></input></div>
                                    {/* <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" value="">dfds</input></div>
                    <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" placeholder="enter address line 2" value="">dfds</input></div>
                    <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="enter address line 2" value="">dfds</input></div>
                    <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="enter address line 2" value="">dfds</input></div>
                    <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" placeholder="enter address line 2" value="">dfds</input></div> */}
                                    <div className="col-md-12"><label className="labels">Email ID</label><input name="email" type="email" className="form-control" placeholder="Email id" value={userdata.email} onChange={handleInput}></input></div>
                                    {/* <div className="col-md-12"><label className="labels">Password</label><input type="text" className="form-control" placeholder="Password" value="">dfds</input></div> */}
                                    <div className="col-md-12"><label className="labels">Gender</label><input name="gender" type="text" className="form-control" placeholder="Gender" value={userdata.gender} onChange={handleInput}></input></div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12"><label className="labels">City</label><input name="city" type="text" className="form-control" placeholder="City" value={userdata.city} onChange={handleInput}></input></div>
                                    {/* <div className="col-md-6"><label className="labels">State/Region</label><p type="text" className="form-control" value="" placeholder="state"/></div> */}
                                </div>
                                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit" onClick={Postdata}>Save Profile</button></div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3 py-5 mt-5 ms-5">
                            <h4>Want to change Password?</h4>
                            <Link className="mt-5 fs-6 text-decoration-none text-primary" to="" onClick={handleClick}>Change Password</Link>

                            {isShown && (
                                <div>
                                    <form>
                                        <div className="col-md-12"><label className="labels">Enter Current Password</label><input type="text" className="form-control" placeholder="Current Password" value="" onClick={handleInput}>dfds</input></div>
                                        <div className="col-md-12"><label className="labels">Enter New Password</label><input type="text" className="form-control" placeholder="New Password" value="" onClick={handleInput}>dfds</input></div>
                                        <div className="mt-3"><Link className="btn btn-success profile-button">Update</Link></div>
                                    </form>
                                </div>
                            )}

                            {/* <div className="col-md-12"><label className="labels">Mobile Number</label><p type="text" className="form-control" placeholder="enter phone number" value="">dfds</p></div> */}
                            {/* <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br></br>
                <div className="col-md-12"><label className="labels">Experience in Designing</label><p type="text" className="form-control" placeholder="experience" value="">dfds</p></div> <br></br>
                <div className="col-md-12"><label className="labels">Additional Details</label><p type="text" className="form-control" placeholder="additional details" value="">dfds</p></div>
             */}
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Profile1;