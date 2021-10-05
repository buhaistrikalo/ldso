import './App.css';
import Quiz from './components/quiz';

import React from 'react';


function App({children}) {
	return (
		<div className="App">
			{children}
		</div>
	);
}

export default App;
