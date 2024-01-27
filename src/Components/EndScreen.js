import "../App.css" ;

import React, { useContext } from "react" ;

import { QuizContext } from "../Helpers/Contexts" ;
import { Questions } from "../Helpers/QuestionBank";


const EndScreen = () => {
    const { score, setScore, setGameState } = useContext(QuizContext) ;

    const restartQuiz = () => {
        setScore(0) ;
        setGameState("menu") ;
    } ;

    return (
        <div className = "EndScreen">
            <p>Thanks for attending my Quiz</p>
            <p>{ score } / { Questions.length }</p>

            <button onClick = { restartQuiz }>Restart Quiz</button>
        </div>
    ) ;
} ;


export default EndScreen ;
