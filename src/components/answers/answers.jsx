import React, {Component} from 'react';
import "./answers.css"

class Answers extends Component {
    render() {
        return (
            <div className="quiz__answers-wrapper">
                <button className="quiz__answers-button">Ответ 1</button>
                <button className="quiz__answers-button">Ответ 2</button>
                <button className="quiz__answers-button">Ответ 3</button>
                <button className="quiz__answers-button">Ответ 4</button>
            </div>
        );
    }
}

export default Answers;
