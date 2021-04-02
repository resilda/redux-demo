import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addPoints from './Actions/addPoints';
import removePoints from './Actions/removePoints';
import './Points.css';

const Points = () => {
	//hooks implemetation to get the user's name
	const [ inputName, setInputName ] = useState('');

	//<<useSelector>> imports the state from the 'global component'
	const countPoints = useSelector((state) => state.countPoints);

	//<<useDispatch>> makes it possible to execute an action (line 53 and 56)
	const dispatch = useDispatch();

	//a function that multiplies two given numbers when called
	function exerciceOne(a, b) {
		let multiply = a * b;
		return multiply;
	}

	//simple filter-reduce implemetation, which takes an array, function and initial value,
	//and also a specific condition such as: take the number of the array which is equal to 3
	function exerciceTwo(array) {
		function reducer(a, b) {
			b = 3;
			for (a = 0; a < array.length; a++) {
				if (array[a] === b) {
					return a + b;
				}
			}
		}
		const initialValue = 0;
		return array.reduce(reducer, initialValue);
	}

	return (
		<div className="points">
			<h1 className="text">Welcome back and understand REDUX</h1>
			<h1 className="suggestion">Go to "redux-dev-tools" to check how the state changes</h1>
			<form className="form">
				<input
					className="input"
					id="name"
					value={inputName}
					placeholder="Enter your name"
					onChange={(event) => setInputName(event.target.value)}
				/>
			</form>
			<h3 className="text">{inputName} your points for today are:</h3>
			<h3 className="counter-points">{countPoints}</h3>
			<button className="button" onClick={() => dispatch(addPoints(exerciceOne(12, 14)))}>
				Add
			</button>
			<button className="button" onClick={() => dispatch(removePoints(exerciceTwo([ 1, 3, 5, 7 ])))}>
				Remove
			</button>
		</div>
	);
};

export default Points;
