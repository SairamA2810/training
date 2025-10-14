"use strict";
class Product {
    constructor(productID, productName, productPrice) {
        this.productID = productID;
        this.productName = productName;
        this.productPrice = productPrice;
    }
    getDiscountPrice(discountPercentage) {
        return `discount price is ${this.productPrice * (discountPercentage / 100)}`;
    }
}
let p1 = new Product(1, 'Laptop', 100000);
console.log(p1.getDiscountPrice(25));
