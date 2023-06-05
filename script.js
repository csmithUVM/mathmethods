let data = {};

// Parse the CSV data
fetch('codes.csv')
    .then(response => response.text())
    .then(csvData => {
        let lines = csvData.split('\n');
        lines.forEach(line => {
            let parts = line.split(',');
            if(parts.length == 2){
                data[parts[0].trim()] = parts[1].trim();
            }
        });
    });

// Handle form submission
document.getElementById('codeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let codeInput = document.getElementById('codeInput').value;
    let link = data[codeInput];
    if(link) {
        let linkContainer = document.getElementById('linkContainer');
        let linkInstructions = document.getElementById('linkInstructions');

        linkInstructions.classList.remove('d-none');
        linkContainer.innerHTML = `<a href="${link}" target="_blank">Your Unique Study Materials</a>`;
    }
});

