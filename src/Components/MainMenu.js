import "../App.css" ;

import React, { useContext } from "react" ;

import { QuizContext } from "../Helpers/Contexts" ;


export default function MainMenu(){
    const { setGameState } = useContext(QuizContext) ;

    return (
        <div className = "Menu">
            <button className = "start-btn" onClick = {() => { setGameState("quiz") ; }}>
                Start Quiz &rarr;
            </button>
        </div>
    ) ;
} ;
