import { stringify } from "querystring";

function multiplesOfThreeAndFive(upperBound: number): number[] {
    const allMultiples = [];
    for(let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            allMultiples.push(i);
        }
    }

    return allMultiples;
}

function arraySum(arr: number[]): number {
    return arr.reduce((sum, el) => sum + el, 0);
}

// PROBLEM 1 SOLUTION
// console.log(arraySum(multiplesOfThreeAndFive(1000)));

function fibArray(upperBound: number): number[] {
    const output = [1, 1];
    let highestFib = 1;
    while(highestFib < upperBound) {
        const nextFib = arraySum(output.slice(-2));
        output.push(nextFib);
        highestFib = nextFib;
    }
    return output;
}

// PROBLEM 2 SOLUTION
// console.log(arraySum(fibArray(4000000).filter(val => val % 2 === 0)));

function leastFactor(bigNumber: number): number {
    const lastCheck = Math.ceil(Math.sqrt(bigNumber));
    
    for (let i = 2; i <= lastCheck; i++) {
        if (bigNumber % i === 0) return i;
    }

    return bigNumber;
}

function primeFactors(bigNumber: number): number[] {
    const divisors: Set<number> = new Set();

    let smallerNumber = bigNumber;
    while(smallerNumber > 1) {
        const least = leastFactor(smallerNumber);
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

function palindromes(lowerBound: number, upperBound: number): number[] {
    const palindromes: number[] = [];
    for (let i = lowerBound; i < upperBound; i++) {
        for (let j = lowerBound; j < upperBound; j++) {
            const test = i*j;
            String(test) === String(test).split('').reverse().join('') && palindromes.push(test);
        }
    }
    return palindromes;
}

// PROBLEM 4 SOLUTION
// const allPalindromes = palindromes(100, 999).sort((a, b) => a - b);
// console.log(allPalindromes[allPalindromes.length - 1]);

function range(min: number, max: number): number[] {
    const arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}

function gcd(a: number, b: number): number {
    if (!b) {
        return a;
      }
    
    return gcd(b, a % b);
}

function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);   
}

// PROBLEM 5 SOLUTION
// console.log(range(1,20).reduce(lcm, 1));


// PROBLEM 6 SOLUTION
// const sumOfSquares = range(1, 100).reduce((sum, i) => sum + Math.pow(i, 2), 0);
// const squareOfSum = Math.pow(range(1, 100).reduce((sum, i) => sum + i, 0), 2);
// console.log(squareOfSum - sumOfSquares);

function generatePrimes(total: number): number[] {
    const primes: number[] = [];
    let test = 2;
    while (primes.length < total) {
        if (leastFactor(test) === test) primes.push(test);
        test += 1;
    }
    return primes;
}

// PROBLEM 7 SOLUTION
// console.log(generatePrimes(10001)[10000]);

const testString = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';
function findLargestAdjacentProduct(str: string, length: number): number {
    const digits = str.split('');
    let highest = 1;
    for(let i = 0; i < digits.length - length; i++) {
        const testDigits = digits.slice(i, i + length);
        const product = testDigits.reduce((sum, el) => sum * Number(el), 1);
        if (product > highest) highest = product;
    }

    return highest;
}

// PROBLEM 8 SOLUTION
// console.log(findLargestAdjacentProduct(testString, 13));