function calculateTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
var products = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 1.0 },
    { name: "Orange", price: 2.0 },
];
var totalPrice = calculateTotalPrice(products);
console.log(totalPrice); // 4.5

function isValidEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

var email = "test@example.com";
console.log(isValidEmail(email)); 
