import React, {Component} from 'react';
import "./counter.css"

const Counter = (props) => {

    return (
        <div className="quiz__counter">
            Вопрос {props.count} / {props.length}
        </div>
    );

}

export default Counter;
