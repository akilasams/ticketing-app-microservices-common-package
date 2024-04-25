export enum OrderStatus {
  Created = "created", // Order has been created but the ticket its trying to order has not been reserved
  Cancelled = "cancelled", // Ticket the order is trying to reserved has already been reserved or user cancelled the order or order expires before payment
  AwaitingPayment = "awaiting:payment", // Order has successfully reserved the ticket
  Complete = "complete", // Order has reserved the ticket and the user has made the payment
}
