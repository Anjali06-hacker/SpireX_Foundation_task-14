// Get the appointment form
const appointmentForm =
    document.getElementById("appointmentForm");
// Get the confirmation area
const confirmation =
    document.getElementById("confirmation");
// Handle appointment form submission
appointmentForm.addEventListener("submit", function(event) {
    // Prevent page from refreshing
    event.preventDefault();
    // Get values entered by the patient
    const patientName =
        document.getElementById("patientName").value;
    const email =
        document.getElementById("email").value;
    const doctor =
        document.getElementById("doctor").value;
    const date =
        document.getElementById("date").value;
    const time =
        document.getElementById("time").value;
    // Display confirmation message
    confirmation.textContent =
        "Appointment booked successfully for " +
        patientName +
        " with " +
        doctor +
        " on " +
        date +
        " at " +
        time +
        ".";
    // Give the message a background
    confirmation.style.backgroundColor = "#d4edda";
    confirmation.style.color = "#155724";
    // Clear the form
    appointmentForm.reset();
});