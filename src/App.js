import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import loggedUser from './Actions/loggedUser';
import './App.css';

const App = () => {
	//<<useSelector>> imports the state from the 'global component'
	const isLogged = useSelector((state) => state.isLogged);

	//<<useDispatch>> makes it possible to execute an action (line 22)
	const dispatch = useDispatch();

	//when the action is executed by dispatch(), the state of the isLogged component
	//turns to true (where the default state was false) since we clicked it

	return (
		<div className="App">
			<button className="button" onClick={() => dispatch(loggedUser())}>
				{isLogged}
				<Link to="/points" className="button-text">
					Log in
				</Link>
			</button>
		</div>
	);
};

export default App;
