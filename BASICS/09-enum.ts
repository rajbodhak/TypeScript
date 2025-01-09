enum PaymentStatus {
    Pending = "PENDING",
    Completed = "COMPLETED",
    Failed = "FAILED",
}

function updatePaymentStatus(status: PaymentStatus) {
    switch (status) {
        case PaymentStatus.Pending:
            console.log("Payment is pending.");
            break;
        case PaymentStatus.Completed:
            console.log("Payment completed successfully.");
            break;
        case PaymentStatus.Failed:
            console.log("Payment failed.");
            break;
        default:
            console.log("Unknown payment status.");
    }
}

updatePaymentStatus(PaymentStatus.Completed); // Output: Payment completed successfully.
