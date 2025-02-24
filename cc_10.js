// Task 1 - Created Product Class

class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }; // Created class product with four properties
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock} `
    }; // This method allows retrieval of a product's details
    updateStock(quantity) {
        return this.stock -= quantity;
    } // This method updates the tock level once an order is placed
};
const prod1= new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); // Logs the details of product 1 that are established above and labeled as prod1

prod1.updateStock(3);
console.log(prod1.getDetails()); // Logs the updated stock amount of product 1 after three orders are placed

// Task 2 - Created Order Class

class Order {
    constructor(orderID, product, quantity) {
        this.orderID = orderID;
        this.product = product
        this.quantity = quantity;
        this.totalPrice = quantity * product.price;
        this.product.updateStock(quantity);
    } // Created the class order with three properties
    // used the update stock quantity to track the new stock amount of the product with the formula created above
    getOrderDetails() {
        return `Order ID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price $${this.totalPrice}`
    }; 
} // returns the order details

const order1 = new Order(501, prod1, 2); // created order 1

console.log(order1.getOrderDetails()); // logs order 1 details
console.log(prod1.getDetails()); // logs product 1 current details

// Task 3 - Created Inventory Class

class Inventory {
    constructor() {
        this.products = []
        this.orders = [];
    } // Created class inventory with products and orders
    addProduct(product) {
        this.products.push(product);
    } // Adds a new product to the end of the array
    listProducts() {
        this.products.forEach(product =>{
            console.log(product.getDetails());
        }) // Logs the details of the products
    }
}
const inventory = new Inventory(); // creates a new inventory
inventory.addProduct(prod1); // Adds prod1 to the current inventory
inventory.listProducts(); // Lists all of the products
