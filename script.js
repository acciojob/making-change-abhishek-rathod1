const makeChange = (c) => {
  // your name here
	const money = [
		["q", 25],
		["d", 10],
		["n", 5],
		["p", 1],
	]
	// let result = {
		let q =0,
		let d =0,
		let n =0,
		let p =0,
		// d:0,
		// n:0,
		// p:0,
	// }

	for(let[symbol, value] of money){
		while (c>=value) {
			if(symbol==q){
				q++;
			}
			else if(symbol == d){
				d++;
			}
			else if(symbol ==n){
				n++;
			}
			else if(symbol ==p){
				p++;
			}
			c -= value;
					
		}
	}
	let result = `q:${q} d:${d} n:${n} p:${p} `
	return result;
};

// Do not the change the code belocw
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
