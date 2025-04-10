const makeChange = (c) => {
  // your name here
	const change = {
    q: 0, // quarters
    d: 0, // dimes
    n: 0, // nickels
    p: 0  // pennies
  };

	change.q = Math.floor(c/25);
	c = c % 25;

	change.d = Math.floor(c/10);
	c = c % 10;
	change.n = Math.floor(c/5);
	c = c % 5;
	change.p = c;
	// c = c % 1;

	return change
	

	
};

// Do not the change the code belocw
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
