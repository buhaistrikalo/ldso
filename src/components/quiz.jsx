import React, {Component} from 'react';
import Counter from './counter/counter';
import Question from './question/question';
import Answers from './answers/answers';
import "./quiz.css"

class Quiz extends Component { //сколько вариантов ответа
    render() {
        return (
            <div className="quiz">
                <div className="quiz__text">
                    <Counter />
                    <div className="wrapper">
                        <Question />
                        <div className="quiz__desc">Выберете один правильный вариант ответа</div>
                    </div>
                </div>
                <Answers />
            </div>
        );
    }
}

export default Quiz;
