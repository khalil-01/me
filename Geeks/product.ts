interface Product {
    name: string;
    price: number;
}

function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

const products: Product[] = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 1.0 },
    { name: "Orange", price: 2.0 },
];

const totalPrice = calculateTotalPrice(products);
console.log(totalPrice); 

function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const email = "test@example.com";
console.log(isValidEmail(email)); 