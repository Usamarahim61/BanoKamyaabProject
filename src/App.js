// import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from "./Components/Login";
import Register from "./Components/Register";
// import Pre_Engineering from "./Components/Pre_Engineering";
import ForgotPassword from "./Components/ForgotPassword";
import PreEngineering from "./Components/Pre_Engineering";
import MDCCT from "./Components/MDCCT";
import Section1 from "./Components/MDCCT/Section1";
import Section2 from "./Components/MDCCT/Section2";
import Section3 from "./Components/MDCCT/Section3";
import PreMedical from "./Components/Pre_Medical";
import ICS from "./Components/ICS";
import Private_Scholarship from "./Components/Private_Scholarship";
import Govt_Scholarship from "./Components/Govt_Scholarship";
import Private_University from "./Components/Private_University";
import Govt_University from "./Components/Govt_University";
import Section4 from "./Components/MDCCT/Section4";
import Review from "./Components/MDCCT/Review";
import Navbar1 from "./Components/Navbar1";
import UserMainPage from "./Components/User";
import User from "./Components/User";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
import MDCCTmenu from "./Components/MDCCT/MDCCTmenu";
import Creativity from "./Components/MDCCT/Creativity";
import Countdown from "./Components/MDCCT/Counter";
import Profile from "./Components/User/Profile";
import Adminlogin from "./Components/Admin/AdminLogin";
import Admindash from "./Components/Admin/Admindash";
import AdminNavbar from "./Components/Admin/AdminNavbar";
import DemoQuestion from "./Components/Admin/Demographic/DemoQuestions";
import Demopage from "./Components/Admin/Demographic/Demopage";
import Emotional from "./Components/Admin/Emotional/Emotional";
import Personality from "./Components/Admin/Personality/Personality";
import CreativityAdmin from "./Components/Admin/Creativity/CreativityAdmin";
import ManageICS from "./Components/Admin/Degree/ManageICS";
import ManageEngineering from "./Components/Admin/Degree/ManageEngineering";
import ManageMedical from "./Components/Admin/Degree/ManageMedical";
import ManagePrivateUniversity from "./Components/Admin/University/ManagePrivateUni";
import ManageGovtUniversity from "./Components/Admin/University/ManageGovtUni";
import ManagePrivateScholarship from "./Components/Admin/Scholarship/ManagePrivateScholar";
import ManageGovtScholarship from "./Components/Admin/Scholarship/ManageGovtScholarship";
import CareerPath from "./Components/User/Careerpath";
import CareerEngineering from "./Components/User/CareerEngineering";
import CareerMedical from "./Components/User/CareerMedical";
import CareerICS from "./Components/User/CareerICS";
import ManageEngineerCareer from "./Components/Admin/CareerPath/ManageEngineerCareer";
import ManageMedicalCareer from "./Components/Admin/CareerPath/ManageMedicalCareer";
import ManageICSCareer from "./Components/Admin/CareerPath/ManageICSCareer";
import UserPrivateUni from "./Components/User/Universities/UserPrivateUni";
import UserGovtUni from "./Components/User/Universities/UserGovtUni";
import UserPreEngineering from "./Components/User/Degree/UserPreEngineering";
import UserPreMedical from "./Components/User/Degree/UserPreMedical";
import UserICS from "./Components/User/Degree/UserICS";
import UserPrivateScholarship from "./Components/User/Scholarship/UserPrivateScholarship";
import UserGovtScholarship from "./Components/User/Scholarship/UserGovtScholarship";
import ErrorPage from "./Components/ErrorPage";
import Profile1 from "./Components/User/Profile1";
import UpdatePrivateUni from "./Components/Admin/University/UpdatePrivateUni";
import AddPrivateUni from "./Components/Admin/University/AddPrivateUni";
import AddGovtUni from "./Components/Admin/University/AddGovtUniversity";
import UpdateGovtUni from "./Components/Admin/University/UpdateGovtUniversity";
import AddPrivateScholarship from "./Components/Admin/Scholarship/AddPrivateScholarship";
import UpdatePrivateScholarship from "./Components/Admin/Scholarship/UpdatePrivateScholarship";
import AddGovtScholarship from "./Components/Admin/Scholarship/AddGovtScholarship";
import UpdateGovtScholarship from "./Components/Admin/Scholarship/UpdateGovtScholarship";
import Logout from "./Components/Logout";
import AddEngineering from "./Components/Admin/Degree/AddEngineering";
import AddICS from "./Components/Admin/Degree/AddICS";
import AddMedical from "./Components/Admin/Degree/AddMedical";
import UpdateEngineering from "./Components/Admin/Degree/UpdateEngineering";
import UpdateICS from "./Components/Admin/Degree/UpdateICS";
import UpdateMedical from "./Components/Admin/Degree/UpdateMedical";
import AddDemographic from "./Components/Admin/Demographic/AddDemographic";
import UpdateDemographic from "./Components/Admin/Demographic/UpdateDemographic";
import AddEmotional from "./Components/Admin/Emotional/AddEmotional";
import UpdateEmotional from "./Components/Admin/Emotional/UpdateEmotional";
import AddPersonality from "./Components/Admin/Personality/AddPersonality";
import UpdatePersonality from "./Components/Admin/Personality/UpdatePersonality";
import AddCreativity from "./Components/Admin/Creativity/AddCreativity";
import UpdateCreativity from "./Components/Admin/Creativity/UpdateCreativity";


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/ForgotPassword' element={<ForgotPassword/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/PreEngineering' element={<PreEngineering/>}></Route>
      <Route path='/MDCCT' element={<MDCCT/>}></Route>
      <Route path='/Section-1' element={<Section1/>}></Route>
      <Route path='/Section-2' element={<Section2/>}></Route>
      <Route path='/Section-3' element={<Section3/>}></Route>
      <Route path='/Section-4' element={<Section4/>}></Route>
      <Route path='/Review' element={<Review/>}></Route>
      <Route path='/PreMedical' element={<PreMedical/>}></Route>
      <Route path='/ICS' element={<ICS/>}></Route>
      <Route path='/PrivateScholarship' element={<Private_Scholarship/>}></Route>
      <Route path='/GovtScholarship' element={<Govt_Scholarship/>}></Route>
      <Route path='/PrivateUniversity' element={<Private_University/>}></Route>
      <Route path='/GovtUniversity' element={<Govt_University/>}></Route>
      <Route path='/Navbar1' element={<Navbar1/>}></Route>
      <Route path='/User' element={<User/>}></Route>
      <Route path="/MDCCTmenu" element={<MDCCTmenu/>}></Route>
      <Route path="/Creativity" element={<Creativity/>}></Route>
      <Route path="/Countdown" element={<Countdown/>}></Route>
      <Route path="/EditProfile" element={<Profile/>}></Route>
      <Route path="/UserProfile" element={<Profile1/>}></Route>
      {/* <Route path="/ChangePassword" element={<ChangePassword/>}></Route> */}
      <Route path="/Admin" element={<Adminlogin/>}></Route>
      <Route path="/Admindash" element={<Admindash/>}></Route>
      <Route path="/AdminNavbar" element={<AdminNavbar/>}></Route>

      <Route path="/DemoQuestion" element={<DemoQuestion/>}></Route>
      <Route path="/DemographicPage" element={<Demopage/>}></Route>
      <Route path="/AddDemographic" element={<AddDemographic/>}></Route>
      <Route path="/UpdateDemographic/:id" element={<UpdateDemographic/>}></Route>



      <Route path="/Emotional" element={<Emotional/>}></Route>
      <Route path="/AddEmotional" element={<AddEmotional/>}></Route>
      <Route path="/UpdateEmotional/:id" element={<UpdateEmotional/>}></Route>

      <Route path="/Personality" element={<Personality/>}></Route>
      <Route path="/AddPersonality" element={<AddPersonality/>}></Route>
      <Route path="/UpdatePersonality/:id" element={<UpdatePersonality/>}></Route>
      

      <Route path="/AdminCreativity" element={<CreativityAdmin/>}></Route>
      <Route path="/AddCreativity" element={<AddCreativity/>}></Route>
      <Route path="/UpdateCreativity/:id" element={<UpdateCreativity/>}></Route>

      <Route path="/ManageICS" element={<ManageICS/>}></Route>
      <Route path="/AddICSDegree" element={<AddICS/>}></Route>
      <Route path="/UpdateICSDegree/:id" element={<UpdateICS/>}></Route>



      <Route path="/ManageEngineering" element={<ManageEngineering/>}></Route>
      <Route path="/AddEngineerDegree" element={<AddEngineering/>}></Route>
      <Route path="/UpdateEngineerDegree/:id" element={<UpdateEngineering/>}></Route>


      <Route path="/ManageMedical" element={<ManageMedical/>}></Route>
      <Route path="/AddMedicalDegree" element={<AddMedical/>}></Route>
      <Route path="/UpdateMedicalDegree/:id" element={<UpdateMedical/>}></Route>

      

      <Route path="/ManagePrivateUniversity" element={<ManagePrivateUniversity/>}></Route>
      <Route path="/ManageGovtUniversity" element={<ManageGovtUniversity/>}></Route>
      <Route path="/AddPrivateUniversity" element={<AddPrivateUni/>}></Route>
      <Route path="/AddGovtUniversity" element={<AddGovtUni/>}></Route>

      <Route path="/UpdatePrivateUni/:id" element={<UpdatePrivateUni/>}></Route>
      <Route path="/UpdateGovtUni/:id" element={<UpdateGovtUni/>}></Route>
      {/* <Route path="/ManageGovtUniversity" element={<ManageGovtUniversity/>}></Route> */}
      <Route path="/ManagePrivateScholar" element={<ManagePrivateScholarship/>}></Route>
      <Route path="/ManageGovtScholar" element={<ManageGovtScholarship/>}></Route>
      <Route path="/AddPrivateScholarship" element={<AddPrivateScholarship/>}></Route>
      <Route path="/AddGovtScholarship" element={<AddGovtScholarship/>}></Route>

      <Route path="/UpdatePrivateScholarship/:id" element={<UpdatePrivateScholarship/>}></Route>
      <Route path="/UpdateGovtScholarship/:id" element={<UpdateGovtScholarship/>}></Route>
      <Route path="/CareerPath" element={<CareerPath/>}></Route>
      <Route path="/CareerEngineering" element={<CareerEngineering/>}></Route>
      <Route path="/CareerMedical" element={<CareerMedical/>}></Route>
      <Route path="/CareerICS" element={<CareerICS/>}></Route>
      <Route path="/ManageEngineeringCareer" element={<ManageEngineerCareer/>}></Route>
      <Route path="/ManageMedicalCareer" element={<ManageMedicalCareer/>}></Route>
      <Route path="/ManageICSCareer" element={<ManageICSCareer/>}></Route>
      <Route path="/UserPrivateUni" element={<UserPrivateUni/>}></Route>
      <Route path="/UserGovtUni" element={<UserGovtUni/>}></Route>
      <Route path="/UserPreEngineering" element={<UserPreEngineering/>}></Route>
      <Route path="/UserPreMedical" element={<UserPreMedical/>}></Route>
      <Route path="/UserICS" element={<UserICS/>}></Route>
      <Route path="/UserPrivateScholarship" element={<UserPrivateScholarship/>}></Route>
      <Route path="/UserGovtScholarship" element={<UserGovtScholarship/>}></Route>



      <Route path="/logout" element={<Logout/>}></Route>
      <Route path="*"  element={<ErrorPage/>}></Route>

      










    </Routes>

    </>
    
  );
}

export default App;
