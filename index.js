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
function generatePrimes(upperBound) {
    var primes = [];
    var test = 2;
    while (test < upperBound) {
        if (leastFactor(test) === test)
            primes.push(test);
        test += 1;
    }
    return primes;
}
// PROBLEM 7 SOLUTION
// console.log(generatePrimes(200000)[10000]);
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
// PROBLEM 9 SOLUTION
// multiply outputs together
// for (let a = 1; a < 500; a++) {
//     for (let b = 1; b < 500; b++) {
//         const c = 1000 - (a + b);
//         if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
//             console.log(a, b, c);
//             break;
//         }
//     }
// }
// PROBLEM 10 SOLUTION
// console.log(generatePrimes(2000000).reduce((sum, p) => sum + p));
var nums = [3710728753390, 4637693767749, 7432498619952, 9194221336357, 2306758820753, 8926167069662, 2811287981284, 4427422891743, 4745144573600, 7038648610584, 6217645714185, 6490635246274, 9257586771833, 5820356532535, 8018119938482, 3539866437282, 8651550600629, 7169388870771, 5437007057682, 5328265410875, 3612327252500, 4587657617241, 1742370690585, 8114266041808, 5193432545172, 6246722164843, 1573244438690, 5503768752567, 1833638482533, 8038628759287, 7818283375799, 1672632010043, 4840309812907, 8708698755139, 5995940689575, 6979395067965, 4105268470829, 6537860736150, 3582903531743, 9495375976510, 8890280257173, 2526768027607, 3627021854049, 2407448690823, 9143028819710, 3441306557801, 2305308117281, 1148769693215, 6378329949063, 6772018697169, 9554825530026, 7608532713228, 3777424253541, 2370191327572, 2979886027225, 1849570145487, 3829820378303, 3482954382919, 4095795306640, 2974615218550, 4169811622207, 6246795719440, 2318970677254, 8618808822587, 1130673970830, 8295917476714, 9762333104481, 4284628018351, 5512160354698, 3223819573432, 7550616496518, 6217784275219, 3292418570714, 9951867143023, 7326746080059, 7684182252467, 9714261791034, 8778364618279, 1084880252167, 7132961247478, 6218407357239, 6662789198148, 6066182629368, 8578694408955, 6602439640990, 6491398268003, 1673093931987, 9480937724504, 7863916702118, 1536871371193, 4078992311553, 4488991150144, 4150312888033, 8123488067321, 8261657077394, 2291880205877, 7715854250201, 7210783843506, 2084960398013, 5350353422647];
console.log(nums.reduce(function (sum, el) { return sum + el; }));
