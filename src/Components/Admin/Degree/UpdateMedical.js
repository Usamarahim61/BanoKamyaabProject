import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar';
import AdminSidebar from '../AdminSidebar';

function UpdateMedical() {

    const {id} = useParams("");
  console.log(id);

  const navigate = useNavigate();
  // const [ViewUniversitydata, setViewUniversitydata] = useState([]);
  // console.log(ViewUniversitydata);

  const [Inddegreedata, setInddegreedata] = useState([{
    name: "",
    description: "",
    photo:"",
  }]);

  const handlephoto = (e) => {


    setInddegreedata({...Inddegreedata, photo:e.target.files[0] });
    console.log(e.target.files[0]);

      // setSelectedFile(e.target.files[0]);


  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);

    setInddegreedata({ ...Inddegreedata, [name]: value });

  }


  const callIndDegree = useCallback(async () => {
    try {
      const response = await axios.get(`/ViewDegreedata/${id}`);
      const degreeData = response.data;
      setInddegreedata(degreeData);
    } catch (error) {
      console.log(error);
    }
  }, [id]);


  useEffect(() => {
    callIndDegree();
  }, [callIndDegree]);


  const UpdateDegree = async (e)=>{
    e.preventDefault();


    const formData = new FormData();
    formData.append('photo', Inddegreedata.photo);
    formData.append('name', Inddegreedata.name);
    formData.append('description', Inddegreedata.description);
    formData.append('type', Inddegreedata.type);

    axios.patch(`/UpdateDegreedata/${id.trim()}`, formData)
    .then((response) => {
      console.log(response);
      window.alert("Degree Updated Successfull");
      console.log("Degree Updated Successfull");
      navigate("/ManageMedical");
    })
    .catch((error) => {
      console.error(error);
      window.alert("Failed to Update");
      console.log("Failed to Update");
    });


  }
    

  return (
<>
    <AdminNavbar/>
    <AdminSidebar/>

    <div className=" mt-5 ">
      <div class="Head">
        <div class="overlay">
          <h1 className="fw-bold fs-1 text-uppercase">Medical Degree</h1>
        </div>
      </div>
    </div>
    <div>
      <div class="ms-5  pb-1  col-md-11 shadow-lg mb-4">
            <form method='POST' onSubmit={UpdateDegree} encType='multipart/form-data'>
              <div class="p-3">
                <div class="ribbon786 mb-2">
                  <span class="ribbonadd2">Update Degree</span>
                </div>

                <div class="d-flex flex-column mb-3">
                  <label class="labels" >Add Photo</label>
                  <input accept='.jpeg, .jpg, .png' type="file" name='photo' onChange={handlephoto}></input>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6"><label class="labels">Degree Name</label><input name='name' id='name' type="text" class="form-control" placeholder="Enter Degree Name" onChange={handleInput} value={Inddegreedata.name} required/></div>
                  {/* <div class="col-md-6"><label class="labels">Provide Link</label><input name='url' id='url'  type="text" class="form-control" placeholder="Enter URL" onChange={handleInput} value={Indscholarshipdata.url} required/></div> */}

                </div>
                <div class="row mt-3">
                  <div class="col-md-12"><label class="labels">Description</label><textarea name='description' id='description'  type="text" class="form-control" placeholder="Description" onChange={handleInput}  value={Inddegreedata.description} required/></div>
                  {/* <div class="col-md-6 mt-3"><label class="labels">Field</label><input name='field' id='field'  type="text" class="form-control" placeholder="Enter Field" onChange={handleInput} value={Indscholarshipdata.field} required /></div> */}
                  {/* <div class="col-md-6 mt-3"><label class="labels">City</label><input name='city' id='city'  type="text" class="form-control" placeholder="City" onChange={handleInput} value={Indscholarshipdata.city} required /></div> */}

                </div>
              </div>
              <div class="my-3 text-center"><button class="btn btn-primary profile-button" type="submit">Update Degree</button></div>

            </form>


          </div>
    </div>
    </>
  )
}

export default UpdateMedical
