import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../CSS/Profile.css"
import Navbar1 from "../Navbar1";
import Sidebar from "../Sidebar";

function Profile() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {

      setIsShown(current => !current);
  

    };
  return (
    <>
    <Navbar1/>
    <Sidebar/>
    <div class="container rounded bg-white mt-5 mb-5">
        <form method ="GET" encType='multipart/form-data'>
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">Username</span><span class="text-black-50">user@mail.com</span>
            <input type="file" accept=".jpg , .jpeg , .png" class="form-control" value=""/>
            </div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-12"><label class="labels">Name</label><input type="text" class="form-control" placeholder="Name" value=""/></div>
                    
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value=""/></div>
                    <div class="col-md-12"><label class="labels">Date of Birth</label><input type="date" class="form-control" placeholder="DOB" value=""/></div>
                    {/* <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" value=""/></div>
                    <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div>
                    <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div>
                    <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div>
                    <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div> */}
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="Email id" value=""/></div>
                    {/* <div class="col-md-12"><label class="labels">Password</label><input type="text" class="form-control" placeholder="Password" value=""/></div> */}
                    <div class="col-md-12"><label class="labels">Gender</label><input type="text" class="form-control" placeholder="Gender" value=""/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">City</label><input type="text" class="form-control" placeholder="City" value=""/></div>
                    {/* <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"/></div> */}
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5 mt-5 ms-5">
                <h4>Want to change Password?</h4>
                <Link className="mt-5 fs-6 text-decoration-none text-primary" to="" onClick={handleClick}>Change Password</Link>
                
                {isShown && (
                   <div>
                   <div class="col-md-12"><label class="labels">Enter Current Password</label><input type="text" class="form-control" placeholder="Current Password" value=""/></div>
                   <div class="col-md-12"><label class="labels">Enter New Password</label><input type="text" class="form-control" placeholder="New Password" value=""/></div>
                   <div className="mt-3"><a className="btn btn-success profile-button">Update</a></div>
                   </div>
               )}

                {/* <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value=""/></div> */}
                {/* <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br></br>
                <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""/></div> <br></br>
                <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""/></div>
             */}
             </div>
        </div>
    </div>
    </form>
</div>

    </>
  );
}

export default Profile;