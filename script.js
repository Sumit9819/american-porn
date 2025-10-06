document.addEventListener('DOMContentLoaded', function() {
    // ⚠️ IMPORTANT: Replace this placeholder with your final destination URL.
    const destinationLink = 'https://otieu.com/4/9864510';

    // Get the buttons
    const yesButton = document.getElementById('yes-btn');
    const noButton = document.getElementById('no-btn');

    // Function to handle the redirection
    function redirectToDestination() {
        // This is a simple client-side redirect
        window.location.href = destinationLink;
    }

    // Add click listeners to both buttons
    yesButton.addEventListener('click', redirectToDestination);
    noButton.addEventListener('click', redirectToDestination);
});
