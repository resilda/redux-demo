//<<reducer>>
//the purpose of it, is to take the actions created with an intial default state (state = 0)
//and switches them depending on the action executed by dispatch in Points.js file

const countPoints = (state = 0, action) => {
	switch (action.type) {
		case 'add':
			return state + action.payload;
		case 'remove':
			return state - action.payload;
		default:
			return state;
	}
};

export default countPoints;
