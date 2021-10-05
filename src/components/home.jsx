import React, {Component} from 'react';
import "./quiz.css";
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to={`/quiz`} className='home'>
                <button className="button button_black button_center">Начать тест</button>
            </Link>
        </div>
    );
}

export default Home;
