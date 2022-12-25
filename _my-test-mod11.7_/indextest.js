const createAdder = (addA, addB) => {
		let calculator = {
			sum: function() {
		return addA + addB;
	},
	reaad: function(){
		addA = 0;
		addB = 0;

	}
	}
	return calculator;		
}
const calculator = createAdder(5, 12);
console.log(calculator.sum());
calculator.reaad(10, 7);
console.log(calculator.sum());
