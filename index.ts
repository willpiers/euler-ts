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
    const lastCheck = Math.floor(Math.sqrt(bigNumber));
    
    for (let i = 2; i < lastCheck; i++) {
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