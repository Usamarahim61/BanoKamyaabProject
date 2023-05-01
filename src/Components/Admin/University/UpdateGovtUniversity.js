import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar';
import AdminSidebar from '../AdminSidebar';




const UpdateGovtUni = () => {

    const {id} = useParams("");
  console.log(id);

  const navigate = useNavigate();
  // const [ViewUniversitydata, setViewUniversitydata] = useState([]);
  // console.log(ViewUniversitydata);

  const [Induniversitydata, setInduniversitydata] = useState([{
    name: "",
    description: "",
    url: "",
    field:"",
    city:"",
    photo:"",
  }]);

  const handlephoto = (e) => {


    setInduniversitydata({...Induniversitydata, photo:e.target.files[0] });
    console.log(e.target.files[0]);

      // setSelectedFile(e.target.files[0]);


  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);

    setInduniversitydata({ ...Induniversitydata, [name]: value });

  }


  const callIndUniversity = useCallback(async () => {
    try {
      const response = await axios.get(`/ViewUniversitydata/${id}`);
      const universityData = response.data;
      setInduniversitydata(universityData);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  // const callIndUniversity = async () => {
  //   // try {

  //   //   const res = await fetch(`/ViewUniversitydata/${id}`, {
  //   //     method: "GET",
  //   //     headers: {
  //   //       // Accept:"application/json",
  //   //       "Content-Type": "application/json"
  //   //     },
  //   //     // credentials:"include"
  //   //   });

  //   //   const data = await res.json();
  //   //   console.log(data);

  //   //   setInduniversitydata(data);


  //   //   if (!res.status === 200) {
  //   //     const error = new Error(res.error);
  //   //     throw error;
  //   //   }
  //   // } catch (err) {

  //   //   console.log(err);

  //   // }

    
  // }

  useEffect(() => {
    callIndUniversity();
  }, [callIndUniversity]);


  const UpdateUniversity = async (e)=>{
    e.preventDefault();

    // const {name,description,url,field,city} = Induniversitydata;
    // const res2= await fetch(`/UpdateUniversitydata/${id}`,{
    //     method: "PATCH",
    //     headers: {
      
    //       "Content-Type": "application/json"
    //     },
    //     body:JSON.stringify({name,description,url,field,city})
    // });
    // const data2 =await res2.json();

    // if(res2.status === 422 || !data2){
    //     alert("Fill the data");
    // }else{
    //     alert("University Updated Successfully");
    //     navigate("/ManagePrivateUniversity")
    // }

    const formData = new FormData();
    formData.append('photo', Induniversitydata.photo);
    formData.append('name', Induniversitydata.name);
    formData.append('description', Induniversitydata.description);
    formData.append('url', Induniversitydata.url);
    formData.append('field', Induniversitydata.field);
    formData.append('city', Induniversitydata.city);
    formData.append('type', Induniversitydata.type);

    axios.patch(`/UpdateUniversitydata/${id.trim()}`, formData)
    .then((response) => {
      console.log(response);
      window.alert("University Updated Successfull");
      console.log("University Updated Successfull");
      navigate("/ManageGovtUniversity");
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
          <h1 className="fw-bold fs-1 text-uppercase">Government Universities</h1>
        </div>
      </div>
    </div>
    <div>
      <div class="ms-5  pb-1  col-md-11 shadow-lg mb-4">
            <form method='POST' onSubmit={UpdateUniversity} encType='multipart/form-data'>
              <div class="p-3">
                <div class="ribbon786 mb-2">
                  <span class="ribbonadd2">Update University</span>
                </div>

                <div class="d-flex flex-column mb-3">
                  <label class="labels" >Add Photo</label>
                  <input accept='.jpeg, .jpg, .png' type="file" name='photo' onChange={handlephoto}></input>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6"><label class="labels">University Name</label><input name='name' id='name' type="text" class="form-control" placeholder="Enter University Name" onChange={handleInput} value={Induniversitydata.name} required/></div>
                  <div class="col-md-6"><label class="labels">Provide Link</label><input name='url' id='url'  type="text" class="form-control" placeholder="Enter URL" onChange={handleInput} value={Induniversitydata.url} required/></div>

                </div>
                <div class="row mt-3">
                  <div class="col-md-12"><label class="labels">Description</label><textarea name='description' id='description'  type="text" class="form-control" placeholder="Description" onChange={handleInput}  value={Induniversitydata.description} required/></div>
                  <div class="col-md-6 mt-3"><label class="labels">Field</label><input name='field' id='field'  type="text" class="form-control" placeholder="Enter Field" onChange={handleInput} value={Induniversitydata.field} required /></div>
                  <div class="col-md-6 mt-3"><label class="labels">City</label><input name='city' id='city'  type="text" class="form-control" placeholder="City" onChange={handleInput} value={Induniversitydata.city} required /></div>

                </div>

              </div>

              <div class="my-3 text-center"><button class="btn btn-primary profile-button" type="submit" >Update University</button></div>

            </form>


          </div>
    </div>
    </>
  )
}

export default UpdateGovtUni
