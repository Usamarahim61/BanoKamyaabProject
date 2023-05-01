import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar';
import AdminSidebar from '../AdminSidebar';

function AddMedical() {


    const navigate = useNavigate();

    const [Degree, setDegree] = useState({
      name: "",
      description: "",
      photo: '',
      type: "Medical",
  
    });
    // const [Records, setRecords]=useState();
  
    const handlephoto = (e) => {
  
  
      setDegree({ ...Degree, photo: e.target.files[0] });
      console.log(Degree.photo);
  
        // setSelectedFile(e.target.files[0]);
  
  
    }
    const handleInput = (e) => {
      // let file = e.target.files[12];
      let name = e.target.name;
      let value = e.target.value;
      console.log(name, value);
  
      setDegree({ ...Degree, [name]: value });
  
    }
  
  
    const PostData =  (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('photo', Degree.photo);
      formData.append('name', Degree.name);
      formData.append('description', Degree.description);
      formData.append('type', Degree.type);
  
  
      axios.post('/AddDegree', formData)
        .then((response) => {
          console.log(response);
          window.alert("Degree Added Successfull");
          console.log("Degree Added Successfull");
          navigate("/ManageMedical");
        })
        .catch((error) => {
          console.error(error);
          window.alert("Failed to Add");
          console.log("Failed to Add");
        });
  
 
    }



  return (

    <>
      <AdminNavbar />
      <AdminSidebar />

      <div className=" mt-5 ">
        <div className="Head">
          <div className="overlay">
            <h1 className="fw-bold fs-1 text-uppercase">Medical Degree</h1>
          </div>
        </div>
      </div>

      <div>
        <div className="ms-5  pb-1  col-md-11 shadow-lg mb-4">
          <form method="POST" onSubmit={PostData} encType="multipart/form-data">
            <div className="p-3">
              <div className="ribbon786 mb-2">
                <span className="ribbonadd2">Add Degree</span>
              </div>
              <div className="d-flex flex-column mb-3">
                <label className="labels" htmlFor='photo'>Add Photo</label>
                <input accept='.jpeg, .jpg, .png' type="file" name='photo' id='photo' onChange={handlephoto} required></input>

                <div>
                  {/* <p className="text-warning mb-0">Min size: <span className='text-info'> 1MB</span></p>
                  <p className="text-warning mb-0">Max size: 5MB</p> */}
                </div>
                {/* {isSuccess ? <p className="text-success fw-bold">Validation successful</p> : null}
                <p className="text-danger fw-bold">{errorMsg}</p> */}
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Degree Name</label><input name="name" id="name" type="text" className="form-control" placeholder="Enter Degree Name" value={Degree.name} onChange={handleInput} required/></div>
                {/* <div className="col-md-6"><label className="labels">Provide Link</label><input name="url" id="url" type="text" className="form-control" placeholder="Enter URL" value={Degree.url} onChange={handleInput} required/></div> */}

              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Description</label><textarea rows={4} name="description" id="description" type="text" className="form-control" placeholder="Description" value={Degree.description} onChange={handleInput} required/></div>
                {/* <div className="col-md-6 mt-3"><label className="labels">Field</label><input name="field" type="text" id="field" className="form-control" placeholder="Enter Field" value={Degree.field} onChange={handleInput} /></div> */}
                {/* <div className="col-md-6 mt-3"><label className="labels">City</label><input name="city" id="city" type="text" className="form-control" placeholder="City" value={Degree.city} onChange={handleInput} required/></div> */}
                <div className="col-md-6 mt-3"><label hidden className="labels">Type</label><input hidden name="type" id="type" type="text" className="form-control" placeholder="Tye" value={Degree.type} onChange={handleInput} required/></div>

              </div>

            </div>

            <div className="my-3 text-center"><button className="btn btn-primary profile-button" type="Submit" >Add Degree</button></div>


          </form>


        </div>
      </div>
    </>
  )
}

export default AddMedical
