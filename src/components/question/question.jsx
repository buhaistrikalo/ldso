import React, {Component} from 'react';
import "./question.css"

class Question extends Component {
    render() {
        return (
            <div className="quiz__question" >
                {this.props.question}
            </div>
        );
    }
}

export default Question;
