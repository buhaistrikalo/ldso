import React, {Component} from 'react';
import "./question.css"

class Question extends Component {
    render() {
        return (
            <h1 className="quiz__question" >
                {this.props.question}
            </h1>
        );
    }
}

export default Question;
