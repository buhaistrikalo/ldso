import React, {Component} from 'react';
import "./counter.css"

class Counter extends Component {

    render() {
        return (
            <div className="quiz__counter">
                Вопрос {this.props.count} / {this.props.length}
            </div>
        );
    }
}

export default Counter;
