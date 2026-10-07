export interface Payments {

    cashOnDelivery(): void;

    upiPayments(): void;

    cardPayments(): void;

    internetBanking(): void;
}