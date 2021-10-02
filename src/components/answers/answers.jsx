import React, {Component} from 'react';
import "./answers.css"

class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Ваш любимый вкус: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        let count = 0
        this.props.answers.map((ans) => {
            if (ans.correct) count++
        });

        if (count <= 1)
            return (
                <label className="quiz__answers-wrapper">
                    {this.props.answers.map((ans, index) =>
                        <div key={index}>
                            <button className="quiz__answers-button"
                                onClick={() => {this.props.updateData(ans.correct)}}
                            >{ans.answer}</button>
                        </div>
                    )}
                </label>
            );
        else
            return (
                <form onSubmit={this.handleSubmit}>
                    <label className="quiz__answers-wrapper">
                        {this.props.answers.map((ans, index) =>
                            <div key={index}>
                                <button className="quiz__answers-button"
                                    onClick={() => { }}
                                >{ans.answer}</button>
                            </div>
                        )}
                        <input type="submit" className="quiz__answers-button quiz__answers-button-submit" value="Отправить" />
                    </label>
                </form>
            );
    }
}

export default Answers;
