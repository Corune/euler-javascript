var evenFibs = function(limit) {
    var a = 1;
    var b = 2;

    sum = 2;

    while (b < limit) {
	var temp = b;
	b += a;
	a = temp;
	
	if (b % 2 === 0)
	    sum += b;
    }

    return sum;
};

console.log(evenFibs(4000000));
