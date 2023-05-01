import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import "../CSS/Personality.css"
import Navbar1 from "../Navbar1";

function Section2() {
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
        <h1 className="fw-bold fs-1">EMOTIONAL INTELLIGENCE</h1>
      </div>
    </div>
    </div>
    {/* unselectable */}
    <div className=" container px-5 pb-1 shadow-lg bg-light">
    <div className="container pt-5 ">
    <div class="ribbon123 ">
      <span class="ribbon32">Instruction</span>
    </div>
      <p className="fs-5 fw-bold">In the table below, how much you agree with on the scale 1-5, where 1 = Completely Disagree,
        2 = slightly disagree, 3 = neutral, 4 = slightly agree and 5 = Completely Agree.</p>
      <p className="text-center fs-4 fw-bold"> 1 . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . 4 . . . . . . . . . . . . . . . 5</p>
     <div className="d-flex justify-content-between fs-5 fw-bold">
        <p className="text-danger">Completely Disagree</p> 
        <p className="text-success">Completely Agree</p>     
     </div>

    </div>


    <div  className="pt-5 mt-5">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">Expressing my emotions with words is not a problem for me. </span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="ExpressEmotion" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="ExpressEmotion" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="ExpressEmotion" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="ExpressEmotion" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="ExpressEmotion" value="5"/>5
          
          </label>

        </div>
      </div>
      </div>

      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I often find it difficult to see things from another person’s viewpoint.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="difficultToSeeFromOtherViewpoint" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="difficultToSeeFromOtherViewpoint" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="difficultToSeeFromOtherViewpoint" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="difficultToSeeFromOtherViewpoint" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="difficultToSeeFromOtherViewpoint" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">On the whole, I’m a highly motivated person</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
         
          <label>
            <input className=" option-input radio" type="radio" id="1" name="HighlyMotivatedPerson" value="1"/>1
            </label>
          
            <label>
          <input className=" option-input radio" type="radio" id="2" name="HighlyMotivatedPerson" value="2"/>2
          </label>
          
          <label>
          <input className=" option-input radio" type="radio" id="3" name="HighlyMotivatedPerson" value="3"/>3
           </label>
          
          <label>
          <input className=" option-input radio" type="radio" id="4" name="HighlyMotivatedPerson" value="4"/>4
           </label>
          
          <label>
          <input className=" option-input radio" type="radio" id="5" name="HighlyMotivatedPerson" value="5"/>5
           </label>
          
          
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I usually find it difficult to regulate my emotions</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="DifficultToRegulateEmotion" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="DifficultToRegulateEmotion" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="DifficultToRegulateEmotion" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="DifficultToRegulateEmotion" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="DifficultToRegulateEmotion" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>


      
      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I generally don’t find life enjoyable.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="DontFindLifeEnjoyable" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="DontFindLifeEnjoyable" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="DontFindLifeEnjoyable" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="DontFindLifeEnjoyable" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="DontFindLifeEnjoyable" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I can deal effectively with people</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="DealEffectivelyWithPeople" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="DealEffectivelyWithPeople" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="DealEffectivelyWithPeople" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="DealEffectivelyWithPeople" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="DealEffectivelyWithPeople" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I tend to change my mind frequently.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="ChangeMindFrequently" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="ChangeMindFrequently" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="ChangeMindFrequently" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="ChangeMindFrequently" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="ChangeMindFrequently" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">Many times, I can’t figure out what emotion I'm feeling.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="FigureEmotionImFeeling" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="FigureEmotionImFeeling" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="FigureEmotionImFeeling" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="FigureEmotionImFeeling" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="FigureEmotionImFeeling" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I feel that I have a number of good qualities.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="GoodQuality" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="GoodQuality" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="GoodQuality" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="GoodQuality" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="GoodQuality" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I often find it difficult to stand up for my rights.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="DifficultToStandupForMyRight" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="DifficultToStandupForMyRight" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="DifficultToStandupForMyRight" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="DifficultToStandupForMyRight" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="DifficultToStandupForMyRight" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I’m usually able to influence the way other people feel.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="InfluenceTheWayOtherPeopleFeel" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="InfluenceTheWayOtherPeopleFeel" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="InfluenceTheWayOtherPeopleFeel" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="InfluenceTheWayOtherPeopleFeel" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="InfluenceTheWayOtherPeopleFeel" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">On the whole, I have a gloomy perspective on most things.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="GloomyPerspective" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="GloomyPerspective" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="GloomyPerspective" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="GloomyPerspective" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="GloomyPerspective" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">Those close to me often complain that I don’t treat them right</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="DontTreatThemRight" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="DontTreatThemRight" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="DontTreatThemRight" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="DontTreatThemRight" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="DontTreatThemRight" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>


      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I often find it difficult to adjust my life according to the circumstances.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="DifficultToAdjustLife" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="DifficultToAdjustLife" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="DifficultToAdjustLife" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="DifficultToAdjustLife" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="DifficultToAdjustLife" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">On the whole, I’m able to deal with stress.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="DealWithStress" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="DealWithStress" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="DealWithStress" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="DealWithStress" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="DealWithStress" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I often find it difficult to show my affection to those close to me. </span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="DifficultToShowAffection" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="DifficultToShowAffection" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="DifficultToShowAffection" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="DifficultToShowAffection" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="DifficultToShowAffection" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I’m normally able to “get into someone’s shoes” and experience their emotions. </span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="ExperienceSomeoneEmotions" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="ExperienceSomeoneEmotions" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="ExperienceSomeoneEmotions" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="ExperienceSomeoneEmotions" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="ExperienceSomeoneEmotions" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I normally find it difficult to keep myself motivated. </span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="DifficultToKeepMyselfMotivated" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="DifficultToKeepMyselfMotivated" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="DifficultToKeepMyselfMotivated" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="DifficultToKeepMyselfMotivated" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="DifficultToKeepMyselfMotivated" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I’m usually able to find ways to control my emotions when I want to.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="FindWayToControlEmotion" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="FindWayToControlEmotion" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="FindWayToControlEmotion" value="3"/>3
          
          </label>
          <div>
          <input className=" option-input radio" type="radio" id="4" name="FindWayToControlEmotion" value="4"/>4
          
          </div>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="FindWayToControlEmotion" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">On the whole, I’m pleased with my life.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="PleasedWithMyLife" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="PleasedWithMyLife" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="PleasedWithMyLife" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="PleasedWithMyLife" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="PleasedWithMyLife" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I would describe myself as a good negotiator.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="DescribeMyselfGoodNegotiator" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="DescribeMyselfGoodNegotiator" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="DescribeMyselfGoodNegotiator" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="DescribeMyselfGoodNegotiator" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="DescribeMyselfGoodNegotiator" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I tend to get involved in things I later wish I could get out of.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="LaterWishCouldGetOf" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="LaterWishCouldGetOf" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="LaterWishCouldGetOf" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="LaterWishCouldGetOf" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="LaterWishCouldGetOf" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I often pause and think about my feelings.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="PauseAndThinkAboutMyFeeling" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="PauseAndThinkAboutMyFeeling" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="PauseAndThinkAboutMyFeeling" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="PauseAndThinkAboutMyFeeling" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="PauseAndThinkAboutMyFeeling" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I believe I’m full of personal strengths.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="FullOfPersonalStrength" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="FullOfPersonalStrength" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="FullOfPersonalStrength" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="FullOfPersonalStrength" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="FullOfPersonalStrength" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I tend to “back down” even if I know I’m right.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="BackDownEvenImRight" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="BackDownEvenImRight" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="BackDownEvenImRight" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="BackDownEvenImRight" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="BackDownEvenImRight" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I don’t seem to have any power at all over other people’s feelings.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="SeemHavePowerAtPeopleFeelings" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="SeemHavePowerAtPeopleFeelings" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="SeemHavePowerAtPeopleFeelings" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="SeemHavePowerAtPeopleFeelings" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="SeemHavePowerAtPeopleFeelings" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I generally believe that things will work out fine in my life</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="BelieveThingWorkOutFine" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="BelieveThingWorkOutFine" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="BelieveThingWorkOutFine" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="BelieveThingWorkOutFine" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="BelieveThingWorkOutFine" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">I find it difficult to bond well even with those close to me.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="DifficultToBondWell" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="DifficultToBondWell" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="DifficultToBondWell" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="DifficultToBondWell" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="DifficultToBondWell" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">Generally, I’m able to adapt to new environments.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="AdaptToNewEnvironment" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="AdaptToNewEnvironment" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="AdaptToNewEnvironment" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="AdaptToNewEnvironment" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="AdaptToNewEnvironment" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>



      <div  className="pt-4">
      <div className="d-flex">
        <div className="col-7 d-flex align-items-center">
        <p className="mb-0"><span className="homefontsize pe-5 me-2">Others admire me for being relaxed.</span></p>
        </div>
        <div class='col-5 py align-items-center justify-content-around'>
          <label>
          <input className=" option-input radio" type="radio" id="1" name="AdmireMeForBeingRelaxed" value="1"/>1
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="2" name="AdmireMeForBeingRelaxed" value="2"/>2
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="3" name="AdmireMeForBeingRelaxed" value="3"/>3
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="4" name="AdmireMeForBeingRelaxed" value="4"/>4
          
          </label>
          <label>
          <input className=" option-input radio" type="radio" id="5" name="AdmireMeForBeingRelaxed" value="5"/>5
          
          </label>
          
        </div>
      </div>
      </div>









    <div className="mt-5">
        <div className="my-5 d-flex justify-content-end">
            {/* <a className="btn btn-success" href="/Section-1">Previous Page</a> */}
            <Link className="btn btn-success px-5 py-3 fw-bold border rounded-4" to="/MDCCTmenu">Submit</Link>
        </div> 
    </div>
    </div>


    </>
  );
}

export default Section2;