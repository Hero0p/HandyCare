// script.js

// Function to handle health form submission
document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get health data from form
    const weight = parseFloat(document.getElementById('weight').value);
    const bloodPressure = document.getElementById('bloodPressure').value;

    // Perform health calculations or save data as needed
    console.log('Weight:', weight);
    console.log('Blood Pressure:', bloodPressure);
    alert('Health data updated successfully!');
});

// Function to handle hospital search
document.getElementById('searchButton').addEventListener('click', function() {
    const location = document.getElementById('hospitalSearch').value;
    // Perform hospital search using location data
    // Display search results in #hospitalResults
    console.log('Searching for hospitals near:', location);
    alert('Searching for hospitals...');
});

// Function to handle doctor appointment scheduling
document.getElementById('scheduleButton').addEventListener('click', function() {
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    // Save appointment date and time
    console.log('Appointment Date:', appointmentDate);
    console.log('Appointment Time:', appointmentTime);
    alert('Appointment scheduled successfully!');
});