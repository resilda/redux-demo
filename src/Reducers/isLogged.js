//<<reducer>>
//the purpose of it, is to take the actions created with an intial default state (state = false)
//and switches them depending on the action executed by dispatch in Points.js file

const isLogged = (state = false, action) => {
	switch (action.type) {
		case 'Logged':
			return !state;
		default:
			return state;
	}
};

export default isLogged;
