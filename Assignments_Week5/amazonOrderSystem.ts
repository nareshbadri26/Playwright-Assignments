class Order {

    productName: string
    orderId: number  
    price: number  

    constructor(productName: string, orderID: number, price: number) {
        
        this.productName = productName
        this.orderId = orderID
        this.price = price

        console.log(`Order created successfully for ${this.productName}`);
        
    }

    placeOrder() {

        console.log(`Order placed for ${this.productName} with order id ${this.orderId}`);
    
    }

    cancelOrder() {

        console.log(`Order canceleed for ${this.productName}`);
        
    }
}

const order1 = new Order('iPhone', 1223344, 90000)

order1.placeOrder()
order1.cancelOrder()