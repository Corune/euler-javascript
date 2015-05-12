var sumOf3Or5 = function(limit) {
    var answer = 0;
    for (var i = 0; i < limit; i++)
	if (i % 3 === 0 || i % 5 === 0)
	    answer += i;

    return answer;
};

console.log(sumOf3Or5(1000));
