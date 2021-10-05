import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Quiz from './components/quiz';
import Home from './components/home';
import Score from './components/score';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/quiz' component={Quiz} />
					<Route path='/score' component={Score} />
				</Switch>
			</App>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
