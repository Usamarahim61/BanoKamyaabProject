// import axios from 'axios'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AdminNavbar from '../AdminNavbar'
import AdminSidebar from '../AdminSidebar'

const AddGovtUni = () => {

  const navigate = useNavigate();


  const [University, setUniversity] = useState({
    name: "",
    description: "",
    url: "",
    field: "",
    city: "",
    photo: '',
    type:"Govt",

  });
  // const [Records, setRecords]=useState();

  const handlephoto = (e) => {


    setUniversity({ ...University, photo: e.target.files[0] });
    console.log(University.photo);

      // setSelectedFile(e.target.files[0]);


  }
  const handleInput = (e) => {
    // let file = e.target.files[12];
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);

    setUniversity({ ...University, [name]: value });

  }


  const PostData =  (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', University.photo);
    formData.append('name', University.name);
    formData.append('description', University.description);
    formData.append('url', University.url);
    formData.append('field', University.field);
    formData.append('city', University.city);
    formData.append('type', University.type);
    // const {photo, name, description, url, field, city, type } = University;

    // const res = await fetch("AddUniversity", {
    //   method: "POST",
    //   body: formData,
    //   headers: {
    //     "Content-Type": "application/json"

    //   },
    //   // body: file,
    //   // body: JSON.stringify({
    //   //   photo:photo,name: name, description: description, url: url, field: field, city: city, type: type
    //   // })
    // });
    axios.post('/AddUniversity', formData)
      .then((response) => {
        console.log(response);
        window.alert("University Added Successfull");
        console.log("University Added Successfull");
        navigate("/ManageGovtUniversity");
      })
      .catch((error) => {
        console.error(error);
        window.alert("Failed to Add");
        console.log("Failed to Add");
      });

    // const data = await res.json();
    // if (data.status === 422 || !data) {
    //   window.alert("Failed to Add");
    //   console.log("Failed to Add");
    // }
    // else {
    //   window.alert("University Added Successfull");
    //   console.log("University Added Successfull");
    //   navigate("/ManagePrivateUniversity");



    // }
  }
  return (
    <>
      <AdminNavbar />
      <AdminSidebar />

      <div className=" mt-5 ">
        <div className="Head">
          <div className="overlay">
            <h1 className="fw-bold fs-1 text-uppercase">Government Universities</h1>
          </div>
        </div>
      </div>

      <div>
        <div className="ms-5  pb-1  col-md-11 shadow-lg mb-4">
          <form method="POST" onSubmit={PostData} encType="multipart/form-data">
            <div className="p-3">
              <div className="ribbon786 mb-2">
                <span className="ribbonadd2">Add University</span>
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
                <div className="col-md-6"><label className="labels">University Name</label><input name="name" id="name" type="text" className="form-control" placeholder="Enter University Name" value={University.name} onChange={handleInput} required /></div>
                <div className="col-md-6"><label className="labels">Provide Link</label><input name="url" id="url" type="text" className="form-control" placeholder="Enter URL" value={University.url} onChange={handleInput} required /></div>

              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Description</label><textarea name="description" id="description" type="text" className="form-control" placeholder="Description" value={University.description} onChange={handleInput} required /></div>
                <div className="col-md-6 mt-3"><label className="labels">Field</label><input name="field" type="text" id="field" className="form-control" placeholder="Enter Field" value={University.field} onChange={handleInput} required/></div>
                <div className="col-md-6 mt-3"><label className="labels">City</label><input name="city" id="city" type="text" className="form-control" placeholder="City" value={University.city} onChange={handleInput} required/></div>
                <div className="col-md-6 mt-3"><label className="labels">Type</label><input name="type" id="type" type="text" className="form-control" placeholder="Type" value={University.type="Govt"} onChange={handleInput} required/></div>

              </div>

            </div>

            <div className="my-3 text-center"><button className="btn btn-primary profile-button" type="Submit" >Add University</button></div>


          </form>


        </div>
      </div>
    </>
  )
}

export default AddGovtUni
