import React, { useState, useContext } from "react" ;

import { QuizContext } from "../Helpers/Contexts" ;
import { Questions } from "../Helpers/QuestionBank" ;


const Quiz = () => {
    const { setScore, setGameState } = useContext(QuizContext) ;
    const [currQuestion, setCurrQuestion] = useState(0) ;

    const [userAnswers, setUserAnswers] = useState(Array(Questions.length).fill("")) ;
    const optionChosen = userAnswers[currQuestion] ;

    const nextQuestion = () => {
        setCurrQuestion(currQuestion + 1) ;
    } ;

    const preQuestion = () => {
        setCurrQuestion(currQuestion - 1) ;
    } ;

    const SubmitQuiz = () => {
        const newScore = userAnswers.reduce(
          (acc, answer, index) => (answer === Questions[index].answer ? acc + 1 : acc),
          0
        ) ;

        setScore(newScore) ;
        setGameState("endScreen") ;
    } ;

    const handleOptionClick = (selectedOption) => {
        const updatedUserAnswers = [...userAnswers] ;
        updatedUserAnswers[currQuestion] = selectedOption ;
        setUserAnswers(updatedUserAnswers) ;
    } ;


    return (
        <div className = "Quiz">
            <div className = "quiz-question">
                <pre>
                    <h1>{ Questions[currQuestion].prompt }</h1>
                </pre>
            </div>

            <div className = "options">
                { ['A', 'B', 'C', 'D'].map((option) => (
                    <button
                        key = { option }
                        className = "option-ele"
                        onClick = { () => handleOptionClick(option) }
                        style = {{
                            color: optionChosen === option ? "black" : "inherit",
                            backgroundColor: optionChosen === option ? "gold" : "inherit",
                        }}
                    >
                        { Questions[currQuestion][`option${option}`] }
                    </button>
                )) }
            </div>

            <div className = "btn-div">
                { (currQuestion === Questions.length - 1) ? 
                    (
                        <>
                            <button className = "btn pre-btn" onClick = { preQuestion }>
                            &larr; Pre Question
                            </button>

                            <button className = "btn submit-btn" onClick = { SubmitQuiz }>
                            Submit
                            </button>
                        </>
                    ) : ((currQuestion === 0) ? 
                        (
                            <>
                                <button className = "btn nxt-btn" onClick = { nextQuestion }>
                                Next Question &rarr;
                                </button>
                            </>
                        ) : (
                            <>
                                <button className = "btn pre-btn" onClick = { preQuestion }>
                                &larr; Pre Question
                                </button>

                                <button className = "btn nxt-btn" onClick = { nextQuestion }>
                                Next Question &rarr;
                                </button>
                            </>
                        )
                    )
                }
            </div>
        </div>
    ) ;
} ;


export default Quiz ;
