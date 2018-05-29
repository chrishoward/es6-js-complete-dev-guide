// Create array
var colors = ['red', 'blue', 'green'];

// Iterate through array and console log each element with for loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Iterate through array and console log each element with forEach method
colors.forEach(function(element) {console.log(element)});

// Iterate through array and console log each element with forEach method and arrow function
colors.forEach((element) => console.log(element));