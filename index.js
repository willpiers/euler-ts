function multiplesOfThreeAndFive(upperBound) {
    var allMultiples = [];
    for (var i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            allMultiples.push(i);
        }
    }
    return allMultiples;
}
function arraySum(arr) {
    return arr.reduce(function (sum, el) { return sum + el; }, 0);
}
// PROBLEM 1 SOLUTION
// console.log(arraySum(multiplesOfThreeAndFive(1000)));
function fibArray(upperBound) {
    var output = [1, 1];
    var highestFib = 1;
    while (highestFib < upperBound) {
        var nextFib = arraySum(output.slice(-2));
        output.push(nextFib);
        highestFib = nextFib;
    }
    return output;
}
// PROBLEM 2 SOLUTION
// console.log(arraySum(fibArray(4000000).filter(val => val % 2 === 0)));
function leastFactor(bigNumber) {
    var lastCheck = Math.floor(Math.sqrt(bigNumber));
    for (var i = 2; i < lastCheck; i++) {
        if (bigNumber % i === 0)
            return i;
    }
    return bigNumber;
}
function primeFactors(bigNumber) {
    var divisors = new Set();
    var smallerNumber = bigNumber;
    while (smallerNumber > 1) {
        var least = leastFactor(smallerNumber);
        divisors.add(least);
        console.log('adding least factor', least);
        smallerNumber = smallerNumber / least;
        console.log('new test', smallerNumber);
    }
    return Array.from(divisors.values());
}
console.log(primeFactors(600851475143));
