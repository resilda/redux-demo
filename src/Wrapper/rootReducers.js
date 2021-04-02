import isLogged from '../Reducers/isLogged';
import points from '../Reducers/points';
import { combineReducers } from 'redux';

//<<rootReducer>>, is implemeted to combine all the reducers we have in Reducers file,
//so we can pass all the reducers included into the store created in Store.js file
const rootReducer = combineReducers({
	Logged: isLogged,
	countPoints: points
});

export default rootReducer;
