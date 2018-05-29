// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
var sum = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach(function(number) {
        sum += number;
});

// Loop over the array, incrementing the sum variable, using an arrow function
numbers.forEach((number) => sum += number);

// Loop over the array, incrementing the sum variable, using a previously defined function
function adder(number) {
        sum += number;
}

numbers.forEach(adder);

// Print the sum variable
console.log(sum);