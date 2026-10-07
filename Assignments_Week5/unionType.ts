type paymentMethod = "UPI" | "Credit Card" | "PayPal"

function makePayment(validPayment : paymentMethod) {

    console.log(validPayment);
    
}

makePayment("UPI")
makePayment("Credit Card")