// problem 1 Use map()
let numbers1 = [2, 3, 4, 5];
let squaredNumbers = numbers1.map(function(num) {
    return num * num;
});
console.log(squaredNumbers);

// problem 2 Use filter()
let numbers2 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers2.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers);

// problem 3 reduce()
let numbers3 = [5, 10, 15, 20];
let sum = numbers3.reduce(function(acc, num) {
    return acc + num;
}, 0);

console.log(sum);

// problem 4 Mix

let numbers4 = [1, 2, 3, 4, 5];

// 1: Filter out odd numbers
let evenNumbers4 = numbers4.filter(function(num) {
    return num % 2 === 0;
});

// 2: Square the even numbers
let squaredEvenNumbers = evenNumbers4.map(function(num) {
    return num * num;
});

// 3: Calculate the sum of squared numbers
let sumOfSquaredNumbers = squaredEvenNumbers.reduce(function(acc, num) {
    return acc + num;
}, 0);

console.log(sumOfSquaredNumbers);

