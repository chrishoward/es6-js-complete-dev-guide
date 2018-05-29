// 'Plucking' property values to go into new array
var cars = [
        { make: 'toyota', price: 'cheap' },
        { make: 'ford', price: 'expensive' }
];

var prices = cars.map(function (car) {
        return car.price;
});

console.log(prices);