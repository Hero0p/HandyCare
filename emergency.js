document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements
    var emergencyButton = document.getElementById('emergencyButton');
    var emergencyContactForm = document.getElementById('emergencyContactForm');
    var contactNameInput = document.getElementById('contactName');
    var contactNumberInput = document.getElementById('contactNumber');
    var relationshipInput = document.getElementById('relationship');

    // Add event listener to emergency button
    emergencyButton.addEventListener('click', handleEmergency);

    // Add event listener to emergency contact form
    emergencyContactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get values from form inputs
        var contactName = contactNameInput.value;
        var contactNumber = contactNumberInput.value;
        var relationship = relationshipInput.value;

        // Display the entered values
        alert(`Emergency Contact Added:\nName: ${contactName}\nNumber: ${contactNumber}\nRelationship: ${relationship}`);

        // Clear form inputs
        contactNameInput.value = '';
        contactNumberInput.value = '';
        relationshipInput.value = '';
    });

    // Function to handle emergency button click
    function handleEmergency() {
        // Display a prompt to the user
        var confirmCall = confirm("Are you sure you want to call the emergency number 8450076426?");
        // If the user confirms, open the dial pad with the number filled in
        if (confirmCall) {
            window.location.href = "tel:8450076426";
        }
        // Get user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                // Send latitude and longitude to emergency services (if supported)
                console.log("User's Location - Latitude: " + latitude + ", Longitude: " + longitude);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }
});
