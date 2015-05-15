var devidesBy = function(n, list) {
    for (var i = 0; i < list.length; i++)
	if (n % list[i] === 0)
	    return true;
    return false;
};

var genPrimes = function(limit) {
    var primes = [2];

    for (var i = 3; i < limit; i++)
	if (!devidesBy(i, primes))
	    primes.push(i);

    return primes;
};

var largestPrimeFactor = function(num) {
    primes = genPrimes(Math.sqrt(num));

    largest = 1;

    for (i = 0; i < primes.length; i++)
	if (num % primes[i] === 0)
	    largest = primes[i];

    return largest;
};

// I wrote this because I completely forgot about the easy way to find
// prime factors.  So here's a slightly more interesting long way!
// (Still finds it in a decent amount of time, I suppose.)

console.log(largestPrimeFactor(600851475143));
