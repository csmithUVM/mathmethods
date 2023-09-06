let data = {};

fetch('codes.csv')
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not fetch CSV data");
        }
        return response.text();
    })
    .then(csvData => {
        let lines = csvData.split('\n');
        lines.forEach(line => {
            let parts = line.split(',');
            if(parts.length == 2){
                data[parts[0].trim()] = parts[1].trim();
            }
        });
    })
    .catch(error => {
        // Handle any errors that occurred while fetching or parsing the CSV data.
        console.error("Error: ", error);
        alert("There was an error loading the page. Please try again later.");
    });


document.getElementById('codeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let codeInput = document.getElementById('codeInput').value;
    let link = data[codeInput];
    let linkContainer = document.getElementById('linkContainer');
    let linkInstructions = document.getElementById('linkInstructions');
    let errorMessage = document.getElementById('errorMessage');
    
    if(link) {
        // Clear any previous error message.
        errorMessage.classList.add('d-none');
        linkInstructions.classList.remove('d-none');
        linkContainer.innerHTML = `<a href="${link}" target="_blank">Your Unique Code Sheet</a>`;
    } else {
        // Show an error message if the code was not found.
        linkInstructions.classList.add('d-none');
        errorMessage.classList.remove('d-none');
    }
});


