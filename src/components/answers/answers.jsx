import React, {useState} from 'react';
import "./answers.css"
import Multibutton from './multiButton/multiButton';

const Answers = (props) => {
    const [userPoints, setUserPoints] = useState(0);
    const [needPoints, setNeedPoints] = useState(0);

    const changeNeedPoints = (count) => {
        setNeedPoints(count)
    }

    const changePoints = (point) => {
        setUserPoints(userPoints + point)
    }

    const checkPoints = (count) => {
        changeNeedPoints(count)
        if (count - userPoints === 0)
            props.updateData(true)
        else props.updateData(false)
    }


    let count = 0
    props.answers.forEach((ans) => {
        if (ans.correct) count++;
    });
    if (count <= 1)
        return (
            <div className="quiz__answers-wrapper">
                {props.answers.map((ans, index) =>
                    <div key={index}>
                        <button className="button"
                            onClick={() => {
                                props.updateData(ans.correct)
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
                    checkPoints(count)

                }} className="button quiz__answers-button_submit">Отправить</button>
            </div>
        );

}

export default Answers;
