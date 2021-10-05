import React, {useState} from 'react';
import "./quiz.css";
import Counter from './counter/counter';
import Question from './question/question';
import Answers from './answers/answers';
import {
    Redirect,
} from 'react-router-dom';

import Questions from '../json/q.json'; // question bank 

const Quiz = () => { //сколько вариантов ответа
    const [questions, setQuestions] = useState(Questions)
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const updateData = (theTrue) => {
        if (theTrue)
        {
            setScore(score + 1)
        }
        if (current + 1 < questions.length)
        {
            setCurrent(current + 1)
        } else
        {
            setShowScore(true)
        }
    };

    return (
        // <Score score={score} count={questions.length} />
        <div className="quiz">
            {showScore
                ? <Redirect to={{
                    pathname: '/score',
                    state: {
                        score: score,
                        count: questions.length,
                    }
                }} />
                : <div className="quiz__pull">
                    <div className="quiz__text">
                        <Counter count={current + 1} length={questions.length} />
                        <div className="wrapper">
                            <Question question={questions[current].question} />
                            <div className="quiz__desc">Выберете один правильный вариант ответа</div>
                        </div>
                    </div>
                    <Answers updateData={updateData} answers={questions[current].answers} />
                </div>
            }
        </div>
    );
}

export default Quiz;
