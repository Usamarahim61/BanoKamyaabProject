import React from "react";
import { Link } from "react-router-dom";
import Navbar1 from "../Navbar1";
import Sidebar from "../Sidebar";
import "../CSS/Personality.css"

function Section3() {
  return (
    <>

    <Navbar1/>
    <Sidebar/>
   <div className=" mt-5 ">
    {/* <div className="mt-5 pt-5 bg-dark rounded-5 text-white pb-3">
        <h1 className="fw-bold text-center">SECTION :  Personality</h1>
    </div> */}
    <div class="Head">
	    <div class="overlay">
        <h1 className="fw-bold fs-1">PERSONAILTY</h1>
      </div>
    </div>
    </div>

    <div className="container px-5 pb-1 shadow-lg bg-light">
    <div className="container pt-5 ">
    <div class="ribbon123 ">
      <span class="ribbon32">Instruction</span>
    </div>
      <p className="fw-bold fs-5">In the table below, how much you agree with on the scale 1-5, where 1 = Completely Disagree,
        2 = slightly disagree, 3 = neutral, 4 = slightly agree and 5 = Completely Agree.</p>
      <p className="text-center fs-4 fw-bold"> 1 . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . 4 . . . . . . . . . . . . . . . 5</p>
     <div className="d-flex justify-content-between fs-5 fw-bold">
        <p className="text-danger">Completely Disagree</p> 
        <p className="text-success">Completely Agree</p>     
     </div>

    </div>


<div pag></div>
    <div  className="pt-5 mt-5">
      <div className="d-flex">
        <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I am the life of the party.</span></p>
        </div>

        
        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="ImLifeOfParty" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ImLifeOfParty" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ImLifeOfParty" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ImLifeOfParty" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ImLifeOfParty" value="5"/>
              5
          </label>
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I feel little concern for others.</span></p>
        </div>

        <div class='col-6 col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="FeelConernForOther" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FeelConernForOther" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FeelConernForOther" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FeelConernForOther" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FeelConernForOther" value="5"/>
              5
          </label>
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I am always prepared.</span></p>
        </div>

        <div class='col-6 col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="ImAlwaysPrepared" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ImAlwaysPrepared" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ImAlwaysPrepared" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ImAlwaysPrepared" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ImAlwaysPrepared" value="5"/>
              5
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I get stressed out easily.</span></p>
        </div>

        <div class='col-6 col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="GetStressOutEasily" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetStressOutEasily" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetStressOutEasily" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetStressOutEasily" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetStressOutEasily" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I have a rich vocabulary.</span></p>
        </div>
        <div class='col-6 col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="HaveRichVocabulary" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveRichVocabulary" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveRichVocabulary" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveRichVocabulary" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveRichVocabulary" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I don't talk a lot.</span></p>
        </div>

        <div class='col-6 col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="DontTalkAlot" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DontTalkAlot" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DontTalkAlot" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DontTalkAlot" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DontTalkAlot" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I am interested in people.</span></p>
        </div>

        <div class='col-6 col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="InterestedInPeople" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="InterestedInPeople" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="InterestedInPeople" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="InterestedInPeople" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="InterestedInPeople" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I leave my belongings around.</span></p>
        </div>

        <div class='col-6 col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="LeaveMyBelongingAround" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="LeaveMyBelongingAround" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="LeaveMyBelongingAround" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="LeaveMyBelongingAround" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="LeaveMyBelongingAround" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I am relaxed most of the time. </span></p>
        </div>

        <div class='col-6 col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="RelaxedMostOfTime" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="RelaxedMostOfTime" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="RelaxedMostOfTime" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="RelaxedMostOfTime" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="RelaxedMostOfTime" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I have difficulty understanding abstract ideas </span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="DifficultUnderstandingIdeas" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DifficultUnderstandingIdeas" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DifficultUnderstandingIdeas" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DifficultUnderstandingIdeas" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DifficultUnderstandingIdeas" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I feel comfortable around people. </span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="ComfortableAroundPeople" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ComfortableAroundPeople" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ComfortableAroundPeople" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ComfortableAroundPeople" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ComfortableAroundPeople" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I insult people. </span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="InsultPeople" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="InsultPeople" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="InsultPeople" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="InsultPeople" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="InsultPeople" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I pay attention to details.  </span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="PayAttentionToDetail" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="PayAttentionToDetail" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="PayAttentionToDetail" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="PayAttentionToDetail" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="PayAttentionToDetail" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I worry about things.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="WorryAboutThings" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="WorryAboutThings" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="WorryAboutThings" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="WorryAboutThings" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="WorryAboutThings" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I have a vivid imagination.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="HaveVividImagination" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveVividImagination" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveVividImagination" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveVividImagination" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveVividImagination" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I keep in the background</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="KeepInBackground" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="KeepInBackground" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="KeepInBackground" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="KeepInBackground" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="KeepInBackground" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I sympathize with others' feelings. </span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="SympathizeWithOtherFeelings" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="SympathizeWithOtherFeelings" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="SympathizeWithOtherFeelings" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="SympathizeWithOtherFeelings" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="SympathizeWithOtherFeelings" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I make a mess of things. </span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="MakeMessOfThings" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="MakeMessOfThings" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="MakeMessOfThings" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="MakeMessOfThings" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="MakeMessOfThings" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I seldom feel blue.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="SeldomFeelBlue" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="SeldomFeelBlue" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="SeldomFeelBlue" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="SeldomFeelBlue" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="SeldomFeelBlue" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I am not interested in abstract ideas.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInAbstractIdeas" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInAbstractIdeas" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInAbstractIdeas" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInAbstractIdeas" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInAbstractIdeas" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I start conversations.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="StartConversation" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="StartConversation" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="StartConversation" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="StartConversation" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="StartConversation" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I am not interested in other people's problems.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInPeopleProblems" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInPeopleProblems" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInPeopleProblems" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInPeopleProblems" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInPeopleProblems" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I get chores done right away</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="GetChoresDone" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetChoresDone" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetChoresDone" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetChoresDone" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetChoresDone" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I am easily disturbed.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="EasilyDisturb" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="EasilyDisturb" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="EasilyDisturb" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="EasilyDisturb" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="EasilyDisturb" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I have excellent ideas.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="HaveExcellentIdeas" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveExcellentIdeas" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveExcellentIdeas" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveExcellentIdeas" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveExcellentIdeas" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I Have little to say.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="HaveLittleToSay" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveLittleToSay" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveLittleToSay" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveLittleToSay" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveLittleToSay" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
        <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I have a soft heart.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="HaveSoftHeart" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveSoftHeart" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveSoftHeart" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveSoftHeart" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="HaveSoftHeart" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I often forget to put things back in their proper place.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="ForgotToPutThings" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ForgotToPutThings" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ForgotToPutThings" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ForgotToPutThings" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ForgotToPutThings" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I get upset easily.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="GetUpsetEasily" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetUpsetEasily" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetUpsetEasily" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetUpsetEasily" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetUpsetEasily" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I do not have a good imagination.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="NotHaveGoodImagination" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotHaveGoodImagination" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotHaveGoodImagination" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotHaveGoodImagination" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotHaveGoodImagination" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I talk to a lot of different people at parties.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="TalkToAlotOfDifferentPeople" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="TalkToAlotOfDifferentPeople" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="TalkToAlotOfDifferentPeople" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="TalkToAlotOfDifferentPeople" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="TalkToAlotOfDifferentPeople" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I am not really interested in others.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInOthers" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInOthers" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInOthers" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInOthers" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="NotInterestedInOthers" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I like order.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="LikeOrder" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="LikeOrder" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="LikeOrder" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="LikeOrder" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="LikeOrder" value="5"/>
              5
          </label>
  
        </div>

      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I change my mood a lot.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="ChangeMyMoodAlot" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ChangeMyMoodAlot" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ChangeMyMoodAlot" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ChangeMyMoodAlot" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ChangeMyMoodAlot" value="5"/>
              5
          </label>
  
        </div>

      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I am quick to understand things.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="QuickToUnderstandThings" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="QuickToUnderstandThings" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="QuickToUnderstandThings" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="QuickToUnderstandThings" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="QuickToUnderstandThings" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I don't like to draw attention to myself.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="DontDrawAttentionToMyself" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DontDrawAttentionToMyself" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DontDrawAttentionToMyself" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DontDrawAttentionToMyself" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DontDrawAttentionToMyself" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I take time out for others</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="TakeTimeOutForOthers" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="TakeTimeOutForOthers" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="TakeTimeOutForOthers" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="TakeTimeOutForOthers" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="TakeTimeOutForOthers" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I shirk my duties.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="ShirkMyDuties" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ShirkMyDuties" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ShirkMyDuties" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ShirkMyDuties" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ShirkMyDuties" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I have frequent mood swings.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="FrequentMoodSwings" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FrequentMoodSwings" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FrequentMoodSwings" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FrequentMoodSwings" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FrequentMoodSwings" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I use difficult words.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="UseDifficultWords" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="UseDifficultWords" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="UseDifficultWords" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="UseDifficultWords" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="UseDifficultWords" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I don't mind being the center of attention.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="DontMindBeingCenterOfAttention" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DontMindBeingCenterOfAttention" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DontMindBeingCenterOfAttention" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DontMindBeingCenterOfAttention" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="DontMindBeingCenterOfAttention" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I feel others' emotions.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="FeelOthersEmotions" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FeelOthersEmotions" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FeelOthersEmotions" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FeelOthersEmotions" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FeelOthersEmotions" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I follow a schedule.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="FollowSchedule" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FollowSchedule" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FollowSchedule" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FollowSchedule" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="FollowSchedule" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I get irritated easily.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="GetIrritatedEasily" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetIrritatedEasily" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetIrritatedEasily" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetIrritatedEasily" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="GetIrritatedEasily" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I spend time reflecting on things</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="SpendTimeReflectingOnThings" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="SpendTimeReflectingOnThings" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="SpendTimeReflectingOnThings" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="SpendTimeReflectingOnThings" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="SpendTimeReflectingOnThings" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I am quiet around strangers.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="QuietAroundStrangers" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="QuietAroundStrangers" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="QuietAroundStrangers" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="QuietAroundStrangers" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="QuietAroundStrangers" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I make people feel at ease.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="MakePeopleFeelAtEase" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="MakePeopleFeelAtEase" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="MakePeopleFeelAtEase" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="MakePeopleFeelAtEase" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="MakePeopleFeelAtEase" value="5"/>
              5
          </label>
  
        </div>

      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I am exacting in my work</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="ExactingInMyWork" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ExactingInMyWork" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ExactingInMyWork" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ExactingInMyWork" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ExactingInMyWork" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I often feel blue.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="OftenFeelBlue" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="OftenFeelBlue" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="OftenFeelBlue" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="OftenFeelBlue" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="OftenFeelBlue" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 fs-5"><span className=" pe-5 me-2">I am full of ideas.</span></p>
        </div>

        <div class='col-6 py align-items-center justify-content-around'>
          <label>
            <input type="radio" class="option-input radio" name="ImFullOfIdeas" value="1"/>
              1
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ImFullOfIdeas" value="2"/>
              2
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ImFullOfIdeas" value="3"/>
              3
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ImFullOfIdeas" value="4"/>
              4
          </label>
          <label>
            <input type="radio" class="option-input radio" name="ImFullOfIdeas" value="5"/>
              5
          </label>
  
        </div>
      </div>
      </div>



    <div className="mt-5">
        

        <div className="my-5 d-flex justify-content-end">
            {/* <a className="btn btn-success" href="/Section-2">Previous Page</a> */}
            <Link className="btn btn-success px-5 py-3 border rounded-4" to='/MDCCTmenu'>Submit</Link>
        </div> 
    </div>
    </div>
    </>
  );
}

export default Section3;