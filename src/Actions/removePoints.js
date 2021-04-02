//<<action>>
//it takes a name/type and a data/payload to attend a specific execution
//given in Points.js file in line 25

const removePoints = (m) => {
	return {
		type: 'remove',
		payload: m
	};
};

export default removePoints;
