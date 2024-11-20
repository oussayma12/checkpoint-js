function reverseString(str) {
    return str.split('').reverse().join('');
}
function countCharacters(str) {
    return str.length;
}
function capitalizeWords(sentence) {
    return sentence
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' ');
}


// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

function findMax(arr) {
    return Math.max(...arr);
  }

function findMin(arr) {
    return Math.min(...arr);
  }

console.log(findMax([1, 2, 3, 4, 5])); 
console.log(findMin([1, 2, 3, 4, 5])); 

//Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }

console.log(sumArray([1, 2, 3, 4, 5]));

//Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArray(arr, condition) {
    return arr.filter(condition); 
  }

console.log(filterArray([1, 2, 3, 4, 5], num => num > 2));
console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0));


function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(8));


function isPrime(num) {
    if (num <= 1) {
        return false; 
    }
    if (num === 2) {
        return true; 
    }
    if (num % 2 === 0) {
        return false; 
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}
console.log(isPrime(12));
console.log(isPrime(17));


function genererFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const suite = [0, 1];
    for (let i = 2; i < n; i++) {
        suite.push(suite[i - 1] + suite[i - 2]);
    }
    return suite;
}
console.log(genererFibonacci(10)); 
console.log(genererFibonacci(14));