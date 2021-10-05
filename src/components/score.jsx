import React from 'react';
import {Link} from 'react-router-dom';

const Score = (props) => {
    return (
        <div>
            <div className="quiz__score">
                <div>Правильных ответов {props.location.state.score} из {props.location.state.count}</div>
                <Link to='/'><button className='button button_black button_mt50'
                >Пройти заново</button></Link>
            </div>
        </div>
    );
}
// this.resetQuiz()
export default Score;
