// const jsonData = {
//     "sentence": ""
// };

// function writeJSONData(newText) {
//     if (typeof jsonData.sentence === "string") {
//         jsonData.sentence += newText + ' '; 
//     } else {
//         jsonData.sentence = newText + ' '; 
//     }

//     console.log("Updated JSON:", jsonData); 
//     // document.getElementById("texto").innerHTML = `<p>${JSON.stringify(jsonData['sentence'], null, 2).replaceAll('"', '')}</p>`;
// }

let jsonData = {};

window.onload = function() {
    fetch('/WorldFirst.json')  // Fetch the initial data from the server
        .then(response => response.json())
        .then(data => {
            jsonData = data;  // Store the initial JSON data
            console.log("Initial JSON data:", jsonData);  // Log initial data
            document.getElementById("texto").innerHTML = `<p>${jsonData.sentence}</p>`;
        })
        .catch(error => console.error("Error loading the JSON file:", error));
};

function writeJSONData(newText) {
    // Update the sentence locally
    jsonData.sentence += newText + ' ';
    document.getElementById("texto").innerHTML = `<p>${jsonData.sentence}</p>`;

    // Send updated data back to the server
    fetch('/updateData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sentence: jsonData.sentence })
    })
    .then(response => response.text())
    .then(message => {
        console.log(message);
    })
    .catch(error => console.error("Error updating the JSON file:", error));
}