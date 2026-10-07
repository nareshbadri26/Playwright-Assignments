import { Payments } from "./payments";


export abstract class CanaraBank implements Payments {

    abstract cashOnDelivery(): void

    abstract upiPayments(): void;

    abstract cardPayments(): void;

    abstract internetBanking(): void;

    recordPaymentDetails(): void {

        console.log("Payment details are recorded");
    }

}