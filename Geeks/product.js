// Function to calculate total price of all products
function calculateTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
// Example usage
var products = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 1.0 },
    { name: "Orange", price: 2.0 },
];
var totalPrice = calculateTotalPrice(products);
console.log(totalPrice); // 4.5
// Task 5: Function to validate an email address
function isValidEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
// Example usage
var email = "test@example.com";
console.log(isValidEmail(email)); // true
