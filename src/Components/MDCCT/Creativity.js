import { useState } from 'react'
import { quiz } from './CreativeQuestion'
import { Link } from "react-router-dom";
// import './quiz.css'
import "../CSS/Creativity.css"
import Navbar1 from '../Navbar1'
import Sidebar from "../Sidebar"
import Counter from "./Counter"
import Popup2 from '../Popup2';

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [active,setActive]=useState(0)
  const [isOpen9, setIsOpen9] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

  const { questions } = quiz
  const { question, choices, 
    // correctAnswer 
  } = questions[activeQuestion]

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    
    setResult((prev) =>
      selectedAnswer
        ? 
        {
            ...prev,
            // score: prev.score + 5,
            // correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  // const onClickprev = () => {
  //   setSelectedAnswerIndex(null)
  //   // setResult((next) =>
  //   //   selectedAnswer
  //   //     ? {
  //   //         ...next,
  //   //         score: next.score + 5,
  //   //         correctAnswers: next.correctAnswers - 1,
  //   //       }
  //   //     : { ...next, wrongAnswers: next.wrongAnswers - 1 }
  //   // )
  //   if (activeQuestion !== questions.length - 1) {
  //     setActiveQuestion((next) => next - 1)
  //   } else {
  //     setActiveQuestion(1)
      
  //     // setShowResult(true)
  //   }
  // }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer 
      // === correctAnswer
      ) {
      setSelectedAnswer(true)
      
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)


// const myfun=()=>{
//   setIsOpen9(!isOpen9);
// }
//   setTimeout(myfun,1200*1000)

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
        <h1 className="fw-bold fs-1">CREATIVITY</h1>
      </div>
    </div>
    </div>

    <div className='container shadow-lg d-flex '>
    {/* <div className='mt-5 pt-1  ps-5 '>
    <div class="ribbon123 mt-3">
      <span class="ribbon31">Creativity</span>
    </div>
   </div> */}

   <div className='d-flex justify-content-center my-5'>
    <div>
      {
      !showResult ? 
      (
        <div className='d-flex'>
        <div className='quiz-container mx-5 '>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li name={question}
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? 'selected-answer' : null
                }>
                {answer}
                
                
                
              </li>
              
            ))}
          </ul>
          <div className='d-flex justify-content-between'>
          <div>
            <button
              disabled={activeQuestion>0?false:true}
              onClick={()=>{activeQuestion<=0?setActiveQuestion(0):setActiveQuestion((next) => next - 1)}}
              // enabled={selectedAnswerIndex !==null}
              // disabled={selectedAnswerIndex ==}
              >

                {/* {questions.length===null} */}
              {activeQuestion === questions.length + 1 ? 'Back' : 'prev'}
            </button>
          </div>
          <div>
            <button
              onClick={onClickNext}
              type="submit"
              disabled={selectedAnswerIndex === null}
              >
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
          </div>
        </div>
        <div className='d-flex align-items-start col-4 mt-5'>
      <div>
        <Counter/>
      </div>

    </div>
        </div>)
       : (
        <div className='d-flex justify-content-center my-5'>
        <div className=' quiz-container d-flex justify-content-center mx-5 '>
        <div className="result d-flex flex-column  ">
          <h1>Thank You</h1>
          
          <Link className='button2 text-center text-decoration-none' to="/MDCCTmenu">Go back to MDCCT</Link>
          {/* <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p> */}
        </div>
        </div>
        </div>
      )
    }
    </div>
    </div>

    </div>


    {/* {isOpen9 && <Popup2
      content={<>
        
        <p className="fw-bold">Do you want to start test?</p>
        <div className='text-center d-flex justify-content-between'>
        <Link className="btn btn-primary" onClick="window.location.reload(true)" to={"/Creativity"}>Restart Test</Link>
        <Link className="btn btn-primary" to={"/MDCCTmenu"}>GO Back</Link>       
        </div>

      </>}
 
    />} */}
    </>
  )
}

export default Quiz
