function calculateAmount() {
    var units = parseInt(document.getElementById("unitsConsumed").value);
    var amount = units * 10; // Assuming rate is $10 per unit
    document.getElementById("amount").value = "$" + amount.toFixed(2);
}

document.getElementById("billingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Simulate payment process (in real life, you'd have server-side processing)
    setTimeout(function() {
        document.getElementById("paymentStatus").innerText = "Payment Successful!";
    }, 2000); // Simulating a delay of 2 seconds for payment processing
});