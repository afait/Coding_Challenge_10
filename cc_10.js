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
