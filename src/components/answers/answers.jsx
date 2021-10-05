import React, {Component} from 'react';
import "./answers.css"
import Multibutton from './multiButton/multiButton';
import {Link} from 'react-router-dom';
class Answers extends Component {
    state = {
        needPoints: 0,
        userPoints: 0,
    }

    changeNeedPoints(count) {
        this.setState({needPoints: count});
    }

    changePoints = (point) => {
        this.setState({userPoints: this.state.userPoints + point})
    }

    checkPoints(count) {
        this.changeNeedPoints(count)
        if (count - this.state.userPoints === 0)
            this.props.updateData(true)
        else this.props.updateData(false)
    }

    render() {
        let count = 0
        this.props.answers.forEach((ans) => {
            if (ans.correct) count++;
        });


        if (count <= 1)
            return (
                <div className="quiz__answers-wrapper">
                    {this.props.answers.map((ans, index) =>
                        <div key={index}>
                            <button className="button"
                                onClick={() => {
                                    this.props.updateData(ans.correct)
                                }}
                            >{ans.answer}</button>
                        </div>
                    )}
                </div>
            );
        else
            return (
                <div className="quiz__answers-wrapper">
                    {this.props.answers.map((ans, index) =>
                        <Multibutton data={ans} key={index} changePoints={this.changePoints} />
                    )}
                    <button onClick={() => {
                        this.checkPoints(count)

                    }} className="button quiz__answers-button_submit">Отправить</button>
                </div>
            );
    }
}

export default Answers;
