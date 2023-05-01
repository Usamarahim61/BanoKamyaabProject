import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/adminUni.css"
import "../../CSS/Profile.css"

import AdminNavbar from "../AdminNavbar";
import AdminSidebar from "../AdminSidebar";


function DemoQuestion() {

    
  return (
    <>
    <AdminNavbar/>
    <AdminSidebar/>
    <div class="container-fluid rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-end mt-5 text-white fw-bold homefontsize">
            <Link className="text-decoration-none " >
            <div className=" text-center py-3 bg-primary btn-hover rounded-4">
                Add Question
            </div>
            </Link>

            <Link className="text-decoration-none" to="/UpdateDemoQuestion">
            <div className=" text-center py-3 bg-secondary mt-3 btn-hover rounded-4">
                Update Question
            </div>
            </Link>
            <Link className="text-decoration-none" to="/DeleteDemoQuestion">
            <div className="text-center py-3 bg-secondary mt-3 btn-hover rounded-4">
                Delete Question
            </div>
            </Link>
            <div>
                
            </div>
        </div>

        <div class="ms-5 mt-3 col-md-7 border-end shadow-lg">        
        <form  id="adduni">
            <div class="p-3">
            <div class="ribbon786 ">
               <span class="ribbonadd">Add Question</span>
           </div>
                <div class="row mt-2">
                    <div class="col-md-12"><label class="labels">Question</label><textarea rows="2" cols="" type="text" class="form-control" placeholder="Enter Question" value=""></textarea></div>
                    
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Enter Option 1</label><input  type="text" class="form-control" placeholder="Enter Option 1" value=""/></div><br></br>
                    <div class="col-md-6"><label class="labels">Enter Option 2</label><input type="text" class="form-control" placeholder="Enter Option 2" value=""/></div>
                    <div class="col-md-6 mt-3"><label class="labels">Enter Option 3</label><input type="text" class="form-control" placeholder="Enter Option 3" value=""/></div>
                </div>
               
            </div>            

            <div class="my-5 text-center"><button class="btn btn-primary profile-button" type="submit">Add University</button></div>
               
            </form>


        </div>

    </div>
</div>

    </>
  );
}

export default DemoQuestion;