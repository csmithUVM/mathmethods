document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById('emailForm');
    const resultsContainer = document.getElementById('results');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Get the email from the input field
        const email = document.getElementById('emailInput').value;

        // Simple email validation
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Placeholder for making a call to the database
        // Normally, you'd want to use fetch() or XMLHttpRequest here
        // but we'll just simulate it with a setTimeout.
        setTimeout(function() {
            // Simulate a successful database response
            const dbResponse = "Placeholder Database Call Result";

            // Create the result box
            const resultBox = document.createElement('div');
            resultBox.className = "border p-3 my-3";

            // Create the instruction paragraph
            const instructionParagraph = document.createElement('p');
            instructionParagraph.textContent = "Below is your unique URL. Please save it now, and don't share it with anyone.";
            resultBox.appendChild(instructionParagraph);

            // Create the result paragraph
            const resultParagraph = document.createElement('p');
            resultParagraph.textContent = dbResponse;
            resultBox.appendChild(resultParagraph);

            // Append the result box to the results container
            resultsContainer.appendChild(resultBox);

        }, 1000);
    });
});
