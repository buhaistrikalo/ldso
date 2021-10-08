import React, {useState} from 'react';
import "./answers.css"
import Multibutton from './multiButton/multiButton';

const Answers = (props) => {
    const [userPoints, setUserPoints] = useState(0);
    const [needPoints, setNeedPoints] = useState(0);

    const checkNeedPoints = (count) => {
        setNeedPoints(count)
    }

    const changePoints = (point) => {
        setUserPoints(userPoints + point)
    }

    const checkPoints = (count) => {
        checkNeedPoints(count)
        if (count - userPoints === 0)
            props.nextQuestion(true)
        else props.nextQuestion(false)
    }

    let countChoices = props.answers.filter(ans => ans.correct).length
    if (countChoices <= 1)
        return (
            <div className="quiz__answers-wrapper">
                {props.answers.map((ans, index) =>
                    <div key={index}>
                        <button className="button"
                            onClick={() => {
                                props.nextQuestion(ans.correct)
                            }}
                        >{ans.answer}</button>
                    </div>
                )}
            </div>
        );
    else
        return (
            <div className="quiz__answers-wrapper">
                {props.answers.map((ans, index) =>
                    <Multibutton data={ans} key={index} changePoints={changePoints} />
                )}
                <button onClick={() => {
                    checkPoints(countChoices)
                }} className="button quiz__answers-button-submit">Отправить</button>
            </div>
        );

}

export default Answers;
