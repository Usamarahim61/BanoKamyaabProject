import React from "react";
import { Link } from "react-router-dom";
import Navbar1 from "../Navbar1";
import Sidebar from "../Sidebar";
import {useState} from "react"

function Section4() {

 
  return (
    <>

<Navbar1/>
    {/* <div className='pt-5 mt-5'>
     <Sidebar/>     
    </div> */}
    <Sidebar/>


{/* <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">     <Link className="navbar-brand fw-bold" to="/">
      <img className="img_snav"  src={require("../images/logo.png")} alt="" ></img>
      Bano Kamyaab
      </Link> </h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className='d-flex pt-5 '>
      <div class="offcanvas-body  shadow ms-3">
        <Link to="/" className='text-decoration-none d-flex flex-column align-items-center '>
          <i class="bi bi-people-fill fs-1"></i>
        <p clasName="fs-4">Profile</p>
        </Link>
      </div>  
      <div class="offcanvas-body  shadow mx-3">
        <Link to="/User" className='text-decoration-none d-flex flex-column align-items-center'>
          <i class="bi bi-person-fill fs-1"></i>
        <p clasName="fs-4">Dashboard</p>
        </Link>
      </div>   
  </div>

</div> */}






   <div className="container border px-5 pb-1 shadow-lg bg-light">
    <div className="mt-5 pt-5 bg-dark rounded-5 text-white pb-3">
        <h1 className="fw-bold text-center">SECTION : Creativity</h1>
    </div>



    <div className="mt-5">


    <div className="pt-4">
        
        <p><span className="fw-bold fs-5">1. &nbsp;</span><span className="fw-bold"> When something unfair happens to you, can you figure out all of the reasons behind that event?</span></p>
        <div className="lh-lg">
          &nbsp;
          <input type="radio" id="Dont" name="FigureOutAllReasonBehindEvent" value="I don't"/>
          <label for="dont">I don't </label><br></br>
          <input type="radio" id="Sometime" name="FigureOutAllReasonBehindEvent" value="Sometimes, I do."/>
          <label for="Sometime" className="pe-3">Sometimes, I do.</label><br></br>
          <input type="radio" id="Usually" name="FigureOutAllReasonBehindEvent" value="Usually, I do."/>
          <label for="Usually" className="pe-3">Usually, I do.</label>        
        </div>  

      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">2. &nbsp;</span><span className="fw-bold">When something strange occurs, what do you usually do?</span></p>
        <div className="lh-lg">
          <input type="radio" id="Donnot" name="StrangeThingOccur" value="I do not look for the possible reasons."/>
          <label for="Donnot">I do not look for the possible reasons.</label><br></br>
          <input type="radio" id="some" name="StrangeThingOccur" value="I look for some possible reasons"/>
          <label for="some" className="pe-3">I look for some possible reasons</label><br></br>
          <input type="radio" id="all" name="StrangeThingOccur" value="I look for all of the possible reasons."/>
          <label for="all" className="pe-3">I look for all of the possible reasons.</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">3. &nbsp;</span><span className="fw-bold">When you get interested in something, how much attention do you pay to the details?</span></p>
        <div className="lh-lg">
          <input type="radio" id="Donnot" name="AttentionYouPayToDetails" value="I do not pay much attention to the details."/>
          <label for="Donnot">I do not pay much attention to the details.</label><br></br>
          <input type="radio" id="some" name="AttentionYouPayToDetails" value="I pay attention to some of the details."/>
          <label for="some" className="pe-3">I pay attention to some of the details.</label><br></br>
          <input type="radio" id="all" name="AttentionYouPayToDetails" value="I pay attention to all of the details."/>
          <label for="all" className="pe-3">I pay attention to all of the details.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">4. &nbsp;</span><span className="fw-bold">When you listen to a song, how much attention do you pay to what the song says?</span></p>
        <div className="lh-lg">
          <input type="radio" id="Donnot" name="AttentionYouPayToSongs" value="I never pay attention"/>
          <label for="Donnot">I never pay attention</label><br></br>
          <input type="radio" id="some" name="AttentionYouPayToSongs" value="Sometimes, I pay attention."/>
          <label for="some" className="pe-3">Sometimes, I pay attention.</label><br></br>
          <input type="radio" id="all" name="AttentionYouPayToSongs" value="I pay a lot of attention."/>
          <label for="all" className="pe-3">I pay a lot of attention.</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">5. &nbsp;</span><span className="fw-bold">When you look at a piece of art work, do you think about what the artist is trying to say?</span></p>
        <div className="lh-lg">
          <input type="radio" id="Donot" name="YouThinkWhatArtistTryingToSay" value="I do not."/>
          <label for="Donot">I do not.</label><br></br>
          <input type="radio" id="do" name="YouThinkWhatArtistTryingToSay" value="I do at times."/>
          <label for="do" className="pe-3">I do at times.</label><br></br>
          <input type="radio" id="always" name="YouThinkWhatArtistTryingToSay" value="I always do this."/>
          <label for="always" className="pe-3">I always do this.</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">6. &nbsp;</span><span className="fw-bold">After you have seen a movie that has affected you, what do you usually do?</span></p>
        <div className="lh-lg">
          <input type="radio" id="moveon" name="MovieAffectedYou" value="I move on to my next activity."/>
          <label for="moveon">I move on to my next activity.</label><br></br>
          <input type="radio" id="someaspect" name="MovieAffectedYou" value="I think about some aspects of the movie."/>
          <label for="someaspect" className="pe-3">I think about some aspects of the movie.</label><br></br>
          <input type="radio" id="manyaspect" name="MovieAffectedYou" value="I think about many aspects of the movie."/>
          <label for="manyaspect" className="pe-3">I think about many aspects of the movie.</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">7. &nbsp;</span><span className="fw-bold">When you write a letter, what do you usually include?</span></p>
        <div className="lh-lg">
          <input type="radio" id="myself" name="WriteLetterWhatYouInclude" value="I include some general information about myself."/>
          <label for="mself">I include some general information about myself.</label><br></br>
          <input type="radio" id="general" name="WriteLetterWhatYouInclude" value="I include some general information and a few additional description."/>
          <label for="general" className="pe-3">I include some general information and a few additional description.</label><br></br>
          <input type="radio" id="many" name="WriteLetterWhatYouInclude" value="I include some general information and many additional description."/>
          <label for="many" className="pe-3">I include some general information and many additional description.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">8. &nbsp;</span><span className="fw-bold">When you read a book, do you create pictures of the characters in your mind?</span></p>
        <div className="lh-lg">
          <input type="radio" id="not" name="CreatePictureOfCharactorInMind" value="I do not create pictures."/>
          <label for="not">I do not create pictures.</label><br></br>
          <input type="radio" id="some" name="CreatePictureOfCharactorInMind" value="I create some pictures."/>
          <label for="some" className="pe-3">I create some pictures.</label><br></br>
          <input type="radio" id="many" name="CreatePictureOfCharactorInMind" value="I create many pictures"/>
          <label for="many" className="pe-3">I create many pictures</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">9. &nbsp;</span><span className="fw-bold">How much complexity do you enjoy in what you do?</span></p>
        <div className="lh-lg">
          <input type="radio" id="straight" name="ComplexityDoYouEnjoy" value="I enjoy doing things that are straightforward"/>
          <label for="straight">I enjoy doing things that are straightforward</label><br></br>
          <input type="radio" id="little" name="ComplexityDoYouEnjoy" value="I enjoy a little complexity in what I do"/>
          <label for="little" className="pe-3">I enjoy a little complexity in what I do</label><br></br>
          <input type="radio" id="alot" name="ComplexityDoYouEnjoy" value="I enjoy a lot of complexity in what I do."/>
          <label for="alot" className="pe-3">I enjoy a lot of complexity in what I do.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">10. &nbsp;</span><span className="fw-bold">How involved do you get in the details of what you are doing?</span></p>
        <div className="lh-lg">
          <input type="radio" id="dont" name="InvolvedInDetail" value="I do not get involved with the details"/>
          <label for="dont">I do not get involved with the details</label><br></br>
          <input type="radio" id="few" name="InvolvedInDetail" value="I get involved with a few of the details."/>
          <label for="few" className="pe-3">I get involved with a few of the details.</label><br></br>
          <input type="radio" id="many" name="InvolvedInDetail" value="I get involved with many of the details."/>
          <label for="many" className="pe-3">I get involved with many of the details.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">11. &nbsp;</span><span className="fw-bold">Would you ever be interested in a job which would require you to make up stories in front of audiences?</span></p>
        <div className="lh-lg">
          <input type="radio" id="dont" name="MakeStoriesFrontOfAudience" value="I would not be interested."/>
          <label for="dont">I would not be interested.</label><br></br>
          <input type="radio" id="might" name="MakeStoriesFrontOfAudience" value="I might be interested."/>
          <label for="might" className="pe-3">I might be interested.</label><br></br>
          <input type="radio" id="would" name="MakeStoriesFrontOfAudience" value="I would be interested."/>
          <label for="would" className="pe-3">I would be interested.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">12. &nbsp;</span><span className="fw-bold">When you need to communicate with someone who speaks English poorly, how easy is it for you to come up with simpler ways to communicate with that person?</span></p>
        <div className="lh-lg">
          <input type="radio" id="difficult" name="SimpleWayToCommunicateInEnglish" value="It usually is difficult for me"/>
          <label for="difficult">It usually is difficult for me</label><br></br>
          <input type="radio" id="sometime" name="SimpleWayToCommunicateInEnglish" value="It sometimes is easy for me."/>
          <label for="sometime" className="pe-3">It sometimes is easy for me.</label><br></br>
          <input type="radio" id="often" name="SimpleWayToCommunicateInEnglish" value="It often is easy for me."/>
          <label for="often" className="pe-3">It often is easy for me.</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">13. &nbsp;</span><span className="fw-bold">How much do you enjoy making new things out of existing objects?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="EnjoyMakingNewThings" value="I usually do not enjoy making new things."/>
          <label for="donot">I usually do not enjoy making new things.</label><br></br>
          <input type="radio" id="sometimes" name="EnjoyMakingNewThings" value="I sometimes enjoy making new things."/>
          <label for="sometimes" className="pe-3">I sometimes enjoy making new things.</label><br></br>
          <input type="radio" id="oftenenjoy" name="EnjoyMakingNewThings" value="I often enjoy making new things."/>
          <label for="oftenenjoy" className="pe-3">I often enjoy making new things.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">14. &nbsp;</span><span className="fw-bold">What do you do with people who are difficult to convince?</span></p>
        <div className="lh-lg">
          <input type="radio" id="have" name="DifficultToConvince" value="I have trouble coming up with convincing arguments."/>
          <label for="have">I have trouble coming up with convincing arguments.</label><br></br>
          <input type="radio" id="trycome" name="DifficultToConvince" value="I try to come up with few alternative arguments to convince them."/>
          <label for="trycome" className="pe-3">I try to come up with few alternative arguments to convince them.</label><br></br>
          <input type="radio" id="comeup" name="DifficultToConvince" value="I come up with a variety of arguments to convince them."/>
          <label for="comeup" className="pe-3">I come up with a variety of arguments to convince them.</label>          
        </div>
   
      </div>





      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">15. &nbsp;</span><span className="fw-bold">How do you approach a complex task?</span></p>
        <div className="lh-lg">
          <input type="radio" id="comup" name="ApproachComplexTask" value="I come up with a single approach."/>
          <label for="comup">I come up with a single approach.</label><br></br>
          <input type="radio" id="may" name="ApproachComplexTask" value="I may be able to come up with few approaches."/>
          <label for="may" className="pe-3">I may be able to come up with few approaches.</label><br></br>
          <input type="radio" id="will" name="ApproachComplexTask" value="I will be able to come up with a variety of approaches."/>
          <label for="will" className="pe-3">I will be able to come up with a variety of approaches.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">16. &nbsp;</span><span className="fw-bold">Which kind of job you like the most?</span></p>
        <div className="lh-lg">
          <input type="radio" id="almost" name="KindOfJobYouLike" value="I like a job in which almost everything is done based on rules or instructions."/>
          <label for="almost">I like a job in which almost everything is done based on rules or instructions.</label><br></br>
          <input type="radio" id="some" name="KindOfJobYouLike" value="I like a job in which some of the work is done based on rules or instruction."/>
          <label for="some" className="pe-3">I like a job in which some of the work is done based on rules or instruction.</label><br></br>
          <input type="radio" id="notbased" name="KindOfJobYouLike" value="I like a job which is not based on rules or instructions."/>
          <label for="notbased" className="pe-3">I like a job which is not based on rules or instructions.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">17. &nbsp;</span><span className="fw-bold">What kind of job interests you?</span></p>
        <div className="lh-lg">
          <input type="radio" id="follow" name="JobInterestedYou" value="A job which requires you to follow instruction"/>
          <label for="follow">A job which requires you to follow instruction</label><br></br>
          <input type="radio" id="sometalent" name="JobInterestedYou" value="A job which requires some talent."/>
          <label for="sometalent" className="pe-3">A job which requires some talent.</label><br></br>
          <input type="radio" id="alottalent" name="JobInterestedYou" value="A job which requires a lot of talent."/>
          <label for="alottalent" className="pe-3">A job which requires a lot of talent.</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">18. &nbsp;</span><span className="fw-bold">If you were invited to a meeting to discuss problems in your community, how difficult it would
            be for you to come up with a long list of problems?</span></p>
        <div className="lh-lg">
          <input type="radio" id="very" name="HowDifficultToDiscuss" value="It would be very difficult"/>
          <label for="very">It would be very difficult</label><br></br>
          <input type="radio" id="somewhat" name="HowDifficultToDiscuss" value="It would somewhat difficult."/>
          <label for="somewhat" className="pe-3">It would somewhat difficult.</label><br></br>
          <input type="radio" id="wouldnot" name="HowDifficultToDiscuss" value="It would not be difficult at all."/>
          <label for="wouldnot" className="pe-3">It would not be difficult at all.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">19. &nbsp;</span><span className="fw-bold">If you were asked to help the city council to come up with many ideas, how would you do?</span></p>
        <div className="lh-lg">
          <input type="radio" id="difficult" name="AskedToHelpTheCityCouncil" value="It would be difficult for me to generate ideas beyond those the City Council has considered already."/>
          <label for="difficult">It would be difficult for me to generate ideas beyond those the City Council has considered already.</label><br></br>
          <input type="radio" id="few" name="AskedToHelpTheCityCouncil" value="I would be able to generate a few ideas beyond those which had been considered already."/>
          <label for="few" className="pe-3">I would be able to generate a few ideas beyond those which had been considered already.</label><br></br>
          <input type="radio" id="variety" name="AskedToHelpTheCityCouncil" value="I would be able to generate a variety of ideas for the City Council."/>
          <label for="variety" className="pe-3">I would be able to generate a variety of ideas for the City Council.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">20. &nbsp;</span><span className="fw-bold">Would you be able to help a first grade teacher generate many alternative ways for teaching
              numbers in such a way that children would become interested in learning numbers.</span></p>
        <div className="lh-lg">
          <input type="radio" id="difficult" name="ChildrenBecomeInterestedInLerning" value="No, I would not be able to do that."/>
          <label for="difficult">No, I would not be able to do that.</label><br></br>
          <input type="radio" id="few" name="ChildrenBecomeInterestedInLerning" value="I might be able to generate a few alternative ways."/>
          <label for="few" className="pe-3">I might be able to generate a few alternative ways.</label><br></br>
          <input type="radio" id="variety" name="ChildrenBecomeInterestedInLerning" value="Yes, I would be able to generate many alternative ways."/>
          <label for="variety" className="pe-3">Yes, I would be able to generate many alternative ways.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">21. &nbsp;</span><span className="fw-bold">How easy would it be for you to help a school with very limited resources, to come up with
               interesting ideas for new sports and games?</span></p>
        <div className="lh-lg">
          <input type="radio" id="difficult" name="InterestingIdeasForNewGames" value="It would be very difficult."/>
          <label for="difficult">It would be very difficult.</label><br></br>
          <input type="radio" id="few" name="InterestingIdeasForNewGames" value="I would be able to come up with few ideas."/>
          <label for="few" className="pe-3">I would be able to come up with few ideas.</label><br></br>
          <input type="radio" id="variety" name="InterestingIdeasForNewGames" value="I would be able to come up with many ideas. "/>
          <label for="variety" className="pe-3">I would be able to come up with many ideas. </label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">22. &nbsp;</span><span className="fw-bold">How easily do words come to you when you express yourself?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="WhenYouExpressYouself" value="Words do not come easily."/>
          <label for="donot">Words do not come easily.</label><br></br>
          <input type="radio" id="sometime" name="WhenYouExpressYouself" value="Sometimes, words come easily."/>
          <label for="sometime" className="pe-3">Sometimes, words come easily.</label><br></br>
          <input type="radio" id="often" name="WhenYouExpressYouself" value="Often, words come easily"/>
          <label for="often" className="pe-3">Often, words come easily </label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">23. &nbsp;</span><span className="fw-bold">How well do you express yourself?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="HowWellYouExpressYourself" value="I do not express myself well."/>
          <label for="donot">I do not express myself well.</label><br></br>
          <input type="radio" id="Occasionally" name="HowWellYouExpressYourself" value="Occasionally, I express myself well"/>
          <label for="Occasionally" className="pe-3">Occasionally, I express myself well</label><br></br>
          <input type="radio" id="well" name="HowWellYouExpressYourself" value="Often, I express myself well"/>
          <label for="well" className="pe-3">Often, I express myself well</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">24. &nbsp;</span><span className="fw-bold">How well do you express your ideas?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="HowWellYouExpressYourIdea" value="I have difficulty expressing my ideas well."/>
          <label for="donot">I have difficulty expressing my ideas well.</label><br></br>
          <input type="radio" id="Occasionally" name="HowWellYouExpressYourIdea" value="I am able to express some of my well."/>
          <label for="Occasionally" className="pe-3">I am able to express some of my well.</label><br></br>
          <input type="radio" id="well" name="HowWellYouExpressYourIdea" value="I am able to express all of my ideas well."/>
          <label for="well" className="pe-3">I am able to express all of my ideas well.</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">25. &nbsp;</span><span className="fw-bold">If a group of people were to ask you to give an unprepared speech, how well do you do?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="UnPreparedSpeech" value="I would not do well."/>
          <label for="donot">I would not do well.</label><br></br>
          <input type="radio" id="Occasionally" name="UnPreparedSpeech" value="I am not sure how well I would do."/>
          <label for="Occasionally" className="pe-3">I am not sure how well I would do.</label><br></br>
          <input type="radio" id="well" name="UnPreparedSpeech" value="I would do well."/>
          <label for="well" className="pe-3">I would do well.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">26. &nbsp;</span><span className="fw-bold">How easy is it for you to come up with words to describe something?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="ComeUpWithWordsToDescribe" value="It is difficult for me."/>
          <label for="donot">It is difficult for me.</label><br></br>
          <input type="radio" id="Occasionally" name="ComeUpWithWordsToDescribe" value="It is not very easy for me."/>
          <label for="Occasionally" className="pe-3">It is not very easy for me.</label><br></br>
          <input type="radio" id="well" name="ComeUpWithWordsToDescribe" value="It is easy for me."/>
          <label for="well" className="pe-3">It is easy for me.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">27. &nbsp;</span><span className="fw-bold">How comfortable would you be in a job which requires you to come up with many ideas?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="JobRequireYouComeWithIdeas" value="I would not be comfortable."/>
          <label for="donot">I would not be comfortable.</label><br></br>
          <input type="radio" id="Occasionally" name="JobRequireYouComeWithIdeas" value="I might be comfortable."/>
          <label for="Occasionally" className="pe-3">I might be comfortable.</label><br></br>
          <input type="radio" id="well" name="JobRequireYouComeWithIdeas" value="I would be very comfortable."/>
          <label for="well" className="pe-3">I would be very comfortable.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">28. &nbsp;</span><span className="fw-bold">How easy would it be for you to come up with many alternative words to express the same idea?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="AlternativeWordToExpressIdea" value="It would be quite difficult for me."/>
          <label for="donot">It would be quite difficult for me.</label><br></br>
          <input type="radio" id="Occasionally" name="AlternativeWordToExpressIdea" value="It would not that easy for me."/>
          <label for="Occasionally" className="pe-3">It would not that easy for me.</label><br></br>
          <input type="radio" id="well" name="AlternativeWordToExpressIdea" value="It would be quite easy for me."/>
          <label for="well" className="pe-3">It would be quite easy for me.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">29. &nbsp;</span><span className="fw-bold">If you had to participate in a contest in which you were asked to come up with as many words as
               possible which began with the letter "J", how would you do?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="WhichBeganWithLetterJ" value="I would do poorly."/>
          <label for="donot">I would do poorly.</label><br></br>
          <input type="radio" id="Occasionally" name="WhichBeganWithLetterJ" value="I would do okay."/>
          <label for="Occasionally" className="pe-3">I would do okay.</label><br></br>
          <input type="radio" id="well" name="WhichBeganWithLetterJ" value="I would do very well."/>
          <label for="well" className="pe-3">I would do very well.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">30. &nbsp;</span><span className="fw-bold">If you were asked to participate in a contest of naming things that belong in a given category
            (class) like food or plants, how well would you do?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="FoodPlant" value="I would do poorly."/>
          <label for="donot">I would do poorly.</label><br></br>
          <input type="radio" id="Occasionally" name="FoodPlant" value="I would do well."/>
          <label for="Occasionally" className="pe-3">I would do well.</label><br></br>
          <input type="radio" id="well" name="FoodPlant" value="I would do quite well."/>
          <label for="well" className="pe-3">I would do quite well.</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">31. &nbsp;</span><span className="fw-bold">How many sentences could you come up if they all would have to begin with the same word?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="SentencesCouldYouComeup" value="I could come up with only a few sentences."/>
          <label for="donot">I could come up with only a few sentences.</label><br></br>
          <input type="radio" id="Occasionally" name="SentencesCouldYouComeup" value="I could come up with several sentences."/>
          <label for="Occasionally" className="pe-3">I could come up with several sentences.</label><br></br>
          <input type="radio" id="well" name="SentencesCouldYouComeup" value="I could come up with many sentences."/>
          <label for="well" className="pe-3">I could come up with many sentences.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">32. &nbsp;</span><span className="fw-bold">Would you be able to come up with a number of possible uses for things other than their common use?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="PossibleUsesForThings" value="It would be very difficult for me."/>
          <label for="donot">It would be very difficult for me.</label><br></br>
          <input type="radio" id="Occasionally" name="PossibleUsesForThings" value="I might be able to come up with a few possible uses."/>
          <label for="Occasionally" className="pe-3">I might be able to come up with a few possible uses.</label><br></br>
          <input type="radio" id="well" name="PossibleUsesForThings" value="I would be able to come up with a number of possible uses."/>
          <label for="well" className="pe-3">I would be able to come up with a number of possible uses.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">33. &nbsp;</span><span className="fw-bold">How easy would it be for you to tell many new stories?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="TellManyStories" value="It would be difficult for me."/>
          <label for="donot">It would be difficult for me.</label><br></br>
          <input type="radio" id="Occasionally" name="TellManyStories" value="It would not be that easy for me."/>
          <label for="Occasionally" className="pe-3">It would not be that easy for me.</label><br></br>
          <input type="radio" id="well" name="TellManyStories" value="It would be easy for me"/>
          <label for="well" className="pe-3">It would be easy for me</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">34. &nbsp;</span><span className="fw-bold">Which of the following would you prefer to do?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="WouldYouPreferToDo" value="Reading a poem."/>
          <label for="donot">Reading a poem.</label><br></br>
          <input type="radio" id="Occasionally" name="WouldYouPreferToDo" value="Learning a poem."/>
          <label for="Occasionally" className="pe-3">Learning a poem.</label><br></br>
          <input type="radio" id="well" name="WouldYouPreferToDo" value="Discussing a poem."/>
          <label for="well" className="pe-3">Discussing a poem.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">35. &nbsp;</span><span className="fw-bold">If you were asked to write a newspaper article about your community, which of the following
             choices would you prefer?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="WriteNewspaperArticle" value="I would copy other articles."/>
          <label for="donot">I would copy other articles.</label><br></br>
          <input type="radio" id="Occasionally" name="WriteNewspaperArticle" value="I would add to other articles "/>
          <label for="Occasionally" className="pe-3">I would add to other articles </label><br></br>
          <input type="radio" id="well" name="WriteNewspaperArticle" value="I would write my own article."/>
          <label for="well" className="pe-3">I would write my own article.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">36. &nbsp;</span><span className="fw-bold">Which of the following do you enjoy the most?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="DoYouEnjoyTheMost" value="I enjoy reading famous books."/>
          <label for="donot">I enjoy reading famous books.</label><br></br>
          <input type="radio" id="Occasionally" name="DoYouEnjoyTheMost" value="I enjoy reading famous books and writing some of my own. "/>
          <label for="Occasionally" className="pe-3">I enjoy reading famous books and writing some of my own.</label><br></br>
          <input type="radio" id="well" name="DoYouEnjoyTheMost" value="I enjoy writing my own books."/>
          <label for="well" className="pe-3">I enjoy writing my own books.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">37. &nbsp;</span><span className="fw-bold">How easy would it be for you to write many synonyms for the word "fast"?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="SynonymOfWordFast" value="It would be very difficult for me."/>
          <label for="donot">It would be very difficult for me.</label><br></br>
          <input type="radio" id="Occasionally" name="SynonymOfWordFast" value="It would be somewhat difficult for me."/>
          <label for="Occasionally" className="pe-3">It would be somewhat difficult for me.</label><br></br>
          <input type="radio" id="well" name="SynonymOfWordFast" value="It would be easy for me."/>
          <label for="well" className="pe-3">It would be easy for me.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">38. &nbsp;</span><span className="fw-bold">Let us suppose that we lost all of the possible ways to heat food, how easy would it be for you to
           come up with a list of other ways to heat food?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="OtherWayToHeatFood" value="It would be very difficult for me."/>
          <label for="donot">It would be very difficult for me.</label><br></br>
          <input type="radio" id="Occasionally" name="OtherWayToHeatFood" value="It would be somewhat difficult for me."/>
          <label for="Occasionally" className="pe-3">It would be somewhat difficult for me.</label><br></br>
          <input type="radio" id="well" name="OtherWayToHeatFood" value="It would be easy for me."/>
          <label for="well" className="pe-3">It would be easy for me.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">39. &nbsp;</span><span className="fw-bold">If you had to give a speech, how would you present it?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="PresentSpeech" value="I would read my prepared notes verbatim."/>
          <label for="donot">I would read my prepared notes verbatim.</label><br></br>
          <input type="radio" id="Occasionally" name="PresentSpeech" value="I would read mostly from my notes."/>
          <label for="Occasionally" className="pe-3">I would read mostly from my notes.</label><br></br>
          <input type="radio" id="well" name="PresentSpeech" value="I would glance occasionally at my notes."/>
          <label for="well" className="pe-3">I would glance occasionally at my notes.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">40. &nbsp;</span><span className="fw-bold">When you are faced with an extremely difficult problem, what do you usually do?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="FacedDifficultProblem" value="I usually ask for the answer."/>
          <label for="donot">I usually ask for the answer.</label><br></br>
          <input type="radio" id="Occasionally" name="FacedDifficultProblem" value="I usually look up for the answer."/>
          <label for="Occasionally" className="pe-3">I usually look up for the answer.</label><br></br>
          <input type="radio" id="well" name="FacedDifficultProblem" value="I usually make up my own answer."/>
          <label for="well" className="pe-3">I usually make up my own answer.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">41. &nbsp;</span><span className="fw-bold">If You were making something, and you discovered suddenly that you were missing an important
             part, what would you do?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="YouDiscoverMissingImportantPart" value="I would stop"/>
          <label for="donot">I would stop</label><br></br>
          <input type="radio" id="Occasionally" name="YouDiscoverMissingImportantPart" value="I would try to find the missing parts, and if I could not find them, I would stop."/>
          <label for="Occasionally" className="pe-3">I would try to find the missing parts, and if I could not find them, I would stop.</label><br></br>
          <input type="radio" id="well" name="YouDiscoverMissingImportantPart" value="I would try to find the missing parts, and if I could not find them, I would make some substitute."/>
          <label for="well" className="pe-3">I would try to find the missing parts, and if I could not find them, I would make some substitute.</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">42. &nbsp;</span><span className="fw-bold">When you are in a public place, do you ever try to guess what people who are far away from you
              are discussing?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="WhatPeopleAreDiscussing" value="I am never interested in guessing what other people discuss."/>
          <label for="donot">I am never interested in guessing what other people discuss.</label><br></br>
          <input type="radio" id="Occasionally" name="WhatPeopleAreDiscussing" value="Sometimes I like to guess what other people discuss."/>
          <label for="Occasionally" className="pe-3">Sometimes I like to guess what other people discuss.</label><br></br>
          <input type="radio" id="well" name="WhatPeopleAreDiscussing" value="I always like to guess what other people are discussing."/>
          <label for="well" className="pe-3">I always like to guess what other people are discussing.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">43. &nbsp;</span><span className="fw-bold">Do you enjoy solving difficult problems?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="EnjoySolvingDifficultProblem" value="I do not enjoy solving difficult problems"/>
          <label for="donot">I do not enjoy solving difficult problems</label><br></br>
          <input type="radio" id="Occasionally" name="EnjoySolvingDifficultProblem" value="I rarely enjoy solving difficult problems."/>
          <label for="Occasionally" className="pe-3">I rarely enjoy solving difficult problems.</label><br></br>
          <input type="radio" id="well" name="EnjoySolvingDifficultProblem" value="I often enjoy solving difficult problems."/>
          <label for="well" className="pe-3">I often enjoy solving difficult problems.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">44. &nbsp;</span><span className="fw-bold">When you are faced with a new kind of problem, what do you usually do?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="FacedNewKindOfProblem" value="I have someone else do it for me."/>
          <label for="donot">I have someone else do it for me.</label><br></br>
          <input type="radio" id="Occasionally" name="FacedNewKindOfProblem" value="I try to do it with someone else's help."/>
          <label for="Occasionally" className="pe-3">I try to do it with someone else's help.</label><br></br>
          <input type="radio" id="well" name="FacedNewKindOfProblem" value="I try to get more information so that I can solve it on my own."/>
          <label for="well" className="pe-3">I try to get more information so that I can solve it on my own.</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">45. &nbsp;</span><span className="fw-bold">What would you do if you were solving a difficult problem?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="IfYoureSolvingDifficultProblem" value="I would ask a teacher or someone else to help me."/>
          <label for="donot">I would ask a teacher or someone else to help me.</label><br></br>
          <input type="radio" id="Occasionally" name="IfYoureSolvingDifficultProblem" value="I would read a book on that subject."/>
          <label for="Occasionally" className="pe-3">I would read a book on that subject.</label><br></br>
          <input type="radio" id="well" name="IfYoureSolvingDifficultProblem" value="I would try a number of different ways to come up with my own answer."/>
          <label for="well" className="pe-3">I would try a number of different ways to come up with my own answer.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">46. &nbsp;</span><span className="fw-bold">When you have an unusual problem, how do you usually solve it?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="UnusualProblem" value="I often seek help"/>
          <label for="donot">I often seek help</label><br></br>
          <input type="radio" id="Occasionally" name="UnusualProblem" value="Before I seek help, I spend a short period of time trying to solve the problem on my own."/>
          <label for="Occasionally" className="pe-3">Before I seek help, I spend a short period of time trying to solve the problem on my own.</label><br></br>
          <input type="radio" id="well" name="UnusualProblem" value="I spend a lot of time trying to solve a problem on my own."/>
          <label for="well" className="pe-3">I spend a lot of time trying to solve a problem on my own.</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">47. &nbsp;</span><span className="fw-bold">Do people think that you ask tough questions?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="ThinkYouAskToughQuestion" value="No, they don't."/>
          <label for="donot">No, they don't.</label><br></br>
          <input type="radio" id="Occasionally" name="ThinkYouAskToughQuestion" value="Sometimes, they do."/>
          <label for="Occasionally" className="pe-3">Sometimes, they do.</label><br></br>
          <input type="radio" id="well" name="ThinkYouAskToughQuestion" value="Often, they do"/>
          <label for="well" className="pe-3">Often, they do</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">48. &nbsp;</span><span className="fw-bold">Do people think that you come up with unique ideas?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="ThinkYouComeWithUniqueIdea" value="No, they don't."/>
          <label for="donot">No, they don't.</label><br></br>
          <input type="radio" id="Occasionally" name="ThinkYouComeWithUniqueIdea" value="Sometimes, they do."/>
          <label for="Occasionally" className="pe-3">Sometimes, they do.</label><br></br>
          <input type="radio" id="well" name="ThinkYouComeWithUniqueIdea" value="Often, they do"/>
          <label for="well" className="pe-3">Often, they do</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">49. &nbsp;</span><span className="fw-bold">Do you find that you usually like to try new things?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="UsuallyLikeToTryNewThing" value="I do not usually try new things."/>
          <label for="donot">I do not usually try new things.</label><br></br>
          <input type="radio" id="Occasionally" name="UsuallyLikeToTryNewThing" value="I sometimes try new things."/>
          <label for="Occasionally" className="pe-3">I sometimes try new things.</label><br></br>
          <input type="radio" id="well" name="UsuallyLikeToTryNewThing" value="I often try new things"/>
          <label for="well" className="pe-3">I often try new things</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">50. &nbsp;</span><span className="fw-bold">When you encounter a complex problem what do you do?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="EncounterComplexProblem" value="I try to avoid it."/>
          <label for="donot">I try to avoid it.</label><br></br>
          <input type="radio" id="Occasionally" name="EncounterComplexProblem" value="I spend a short period of time trying to solve it until I get frustrated"/>
          <label for="Occasionally" className="pe-3">I spend a short period of time trying to solve it until I get frustrated</label><br></br>
          <input type="radio" id="well" name="EncounterComplexProblem" value="I spend a lot of time trying to solve it."/>
          <label for="well" className="pe-3">I spend a lot of time trying to solve it.</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">51. &nbsp;</span><span className="fw-bold">Do you enjoy new experiences?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="YouEnjoyNewExperiences" value="I do not enjoy new experiences."/>
          <label for="donot">I do not enjoy new experiences.</label><br></br>
          <input type="radio" id="Occasionally" name="YouEnjoyNewExperiences" value="I sometimes enjoy new experiences."/>
          <label for="Occasionally" className="pe-3">I sometimes enjoy new experiences.</label><br></br>
          <input type="radio" id="well" name="YouEnjoyNewExperiences" value="I usually enjoy new experiences."/>
          <label for="well" className="pe-3">I usually enjoy new experiences.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">52. &nbsp;</span><span className="fw-bold">How much do you depend on others when you find yourself in an impossible situation?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="FindYouselfInImpossibleSituation" value="I often depend on others."/>
          <label for="donot">I often depend on others.</label><br></br>
          <input type="radio" id="Occasionally" name="FindYouselfInImpossibleSituation" value="I sometimes depend on others."/>
          <label for="Occasionally" className="pe-3">I sometimes depend on others.</label><br></br>
          <input type="radio" id="well" name="FindYouselfInImpossibleSituation" value="I usually prefer to depend on myself."/>
          <label for="well" className="pe-3">I usually prefer to depend on myself.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">53. &nbsp;</span><span className="fw-bold">How confident are you when you do something on your own?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="ConfidentToDoSomethingOnYourOwn" value="I do not have much confidence. "/>
          <label for="donot">I do not have much confidence. </label><br></br>
          <input type="radio" id="Occasionally" name="ConfidentToDoSomethingOnYourOwn" value="I have some confidence."/>
          <label for="Occasionally" className="pe-3">I have some confidence.</label><br></br>
          <input type="radio" id="well" name="ConfidentToDoSomethingOnYourOwn" value="I have a lot of confidence."/>
          <label for="well" className="pe-3">I have a lot of confidence.</label>          
        </div>
   
      </div>



      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">54. &nbsp;</span><span className="fw-bold">Do you enjoy scientific experimentation?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="EnjoyScientificExperiment" value="I do not enjoy experimentation."/>
          <label for="donot">I do not enjoy experimentation.</label><br></br>
          <input type="radio" id="Occasionally" name="EnjoyScientificExperiment" value="II enjoy experimentation to some extent."/>
          <label for="Occasionally" className="pe-3">I enjoy experimentation to some extent.</label><br></br>
          <input type="radio" id="well" name="EnjoyScientificExperiment" value="I enjoy experimentation a lot."/>
          <label for="well" className="pe-3">I enjoy experimentation a lot.</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">55. &nbsp;</span><span className="fw-bold">How good would you be at designing new toys for children?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="DesigningNewToyForChildren" value="I would not be very good at this."/>
          <label for="donot">I would not be very good at this.</label><br></br>
          <input type="radio" id="Occasionally" name="DesigningNewToyForChildren" value="I might be able to come up with a few ideas."/>
          <label for="Occasionally" className="pe-3">I might be able to come up with a few ideas.</label><br></br>
          <input type="radio" id="well" name="DesigningNewToyForChildren" value="I would be able to come up with many ideas."/>
          <label for="well" className="pe-3">I would be able to come up with many ideas.</label>          
        </div>
   
      </div>


      <div className="pt-4">
        
        <p><span className="fw-bold fs-5">56. &nbsp;</span><span className="fw-bold">If you were a substitute teacher for a Kindergarten class without a teaching plan, how well would
           you do?</span></p>
        <div className="lh-lg">
          <input type="radio" id="donot" name="SubstituteTeacherForKindergarten" value="I would fail."/>
          <label for="donot">I would fail.</label><br></br>
          <input type="radio" id="Occasionally" name="SubstituteTeacherForKindergarten" value="I would have a hard time."/>
          <label for="Occasionally" className="pe-3">I would have a hard time.</label><br></br>
          <input type="radio" id="well" name="SubstituteTeacherForKindergarten" value="I would do well."/>
          <label for="well" className="pe-3">I would do well.</label>          
        </div>
   
      </div>


        

        <div className="my-5 d-flex justify-content-between">
            <a className="btn btn-success" href="/Section-3">Previous Page</a>
            <a className="btn btn-success px-4 py-2" href='/Review'>Submit</a>
        </div> 
    </div>
    </div>
    </>
  );
}

export default Section4;