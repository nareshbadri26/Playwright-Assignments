import { CanaraBank } from "./canaraBank";


class Amazon extends CanaraBank {

    cashOnDelivery(): void {

        console.log("Accepted method is Cash on Delivery");
    }

    upiPayments(): void {

        console.log("Accepted payment is UPI Payments");
    }

    cardPayments(): void {

        console.log("Accepted method is Card Payment");
    }

    internetBanking(): void {

        console.log("Accepted method is Internet Banking")
    }
}

const amazonObj = new Amazon();

amazonObj.cardPayments();
amazonObj.cashOnDelivery();
amazonObj.internetBanking();
amazonObj.recordPaymentDetails();
amazonObj.upiPayments();