"use strict";
class Order {
    productName;
    orderId;
    price;
    constructor(productName, orderID, price) {
        this.productName = productName;
        this.orderId = orderID;
        this.price = price;
        console.log(`Order created successfully for ${this.productName}`);
    }
    placeOrder() {
        console.log(`Order placed for ${this.productName} with order id ${this.orderId}`);
    }
    cancelOrder() {
        console.log(`Order canceleed for ${this.productName}`);
    }
}
const order1 = new Order('iPhone', 1223344, 90000);
order1.placeOrder();
order1.cancelOrder();
