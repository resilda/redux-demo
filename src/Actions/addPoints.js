//<<action>>
//it takes a name/type and a data/payload to attend a specific execution
//given in Points.js file in line 18

const addPoints = (n) => {
	return {
		type: 'add',
		payload: n
	};
};

export default addPoints;
