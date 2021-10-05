import {React, Component} from 'react';
import "./quiz.css";
import Counter from './counter/counter';
import Question from './question/question';
import Answers from './answers/answers';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    location,
    match,
    matchPath,
    Redirect,
} from 'react-router-dom';

import Questions from '../json/q.json'; // question bank 
import Score from './score';

class Quiz extends Component { //сколько вариантов ответа
    state = {
        questions: Questions,
        current: 0,
        score: 0,
        showScore: false,
    }

    updateData = (theTrue) => {
        if (theTrue)
        {
            this.setState({score: this.state.score + 1})
        }
        if (this.state.current + 1 < this.state.questions.length)
        {
            this.setState({current: this.state.current + 1})
        } else
        {
            this.setState({showScore: true})
        }
    }

    resetQuiz() {
        this.setState({current: 0})
        this.setState({score: 0})
        this.setState({showScore: false})
    }


    render() {
        return (
            // <Score score={this.state.score} count={this.state.questions.length} />
            <div className="quiz">
                {this.state.showScore
                    ? <Redirect to={{
                        pathname: '/score',
                        state: {
                            score: this.state.score,
                            count: this.state.questions.length,
                        }
                    }} />
                    : <div className="quiz__pull">
                        <div className="quiz__text">
                            <Counter count={this.state.current + 1} length={this.state.questions.length} />
                            <div className="wrapper">
                                <Question question={this.state.questions[this.state.current].question} />
                                <div className="quiz__desc">Выберете один правильный вариант ответа</div>
                            </div>
                        </div>
                        <Answers updateData={this.updateData} answers={this.state.questions[this.state.current].answers} />
                    </div>
                }
            </div>
        );
    }
}

// function getFile(path) {
//     let file = JSON.parse(fs.readFileSync('./json/q.json'))

// }


export default Quiz;
