"use strict";
exports.__esModule = true;
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
    var lastCheck = Math.ceil(Math.sqrt(bigNumber));
    for (var i = 2; i <= lastCheck; i++) {
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
// PROBLEM 3 SOLUTION
// take last value of array
// console.log(primeFactors(600851475143));
function palindromes(lowerBound, upperBound) {
    var palindromes = [];
    for (var i = lowerBound; i < upperBound; i++) {
        for (var j = lowerBound; j < upperBound; j++) {
            var test = i * j;
            String(test) === String(test).split('').reverse().join('') && palindromes.push(test);
        }
    }
    return palindromes;
}
// PROBLEM 4 SOLUTION
// const allPalindromes = palindromes(100, 999).sort((a, b) => a - b);
// console.log(allPalindromes[allPalindromes.length - 1]);
function range(min, max) {
    var arr = [];
    for (var i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
// PROBLEM 5 SOLUTION
// console.log(range(1,20).reduce(lcm, 1));
// PROBLEM 6 SOLUTION
// const sumOfSquares = range(1, 100).reduce((sum, i) => sum + Math.pow(i, 2), 0);
// const squareOfSum = Math.pow(range(1, 100).reduce((sum, i) => sum + i, 0), 2);
// console.log(squareOfSum - sumOfSquares);
function generatePrimes(total) {
    var primes = [];
    var test = 2;
    while (primes.length < total) {
        if (leastFactor(test) === test)
            primes.push(test);
        test += 1;
    }
    return primes;
}
// PROBLEM 7 SOLUTION
// console.log(generatePrimes(10001)[10000]);
var testString = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';
function findLargestAdjacentProduct(str, length) {
    var digits = str.split('');
    var highest = 1;
    for (var i = 0; i < digits.length - length; i++) {
        var testDigits = digits.slice(i, i + length);
        var product = testDigits.reduce(function (sum, el) { return sum * Number(el); }, 1);
        if (product > highest)
            highest = product;
    }
    return highest;
}
// PROBLEM 8 SOLUTION
// console.log(findLargestAdjacentProduct(testString, 13));
