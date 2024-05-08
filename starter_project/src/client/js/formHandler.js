import axios from 'axios';
import { isValidURL } from './nameChecker';

const serverURL = 'http://localhost:8000/api/analyze-sentiment';

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const urlText = document.getElementById('name').value;

    // Check if the URL is valid
    if (isValidURL(urlText)) {
        console.log('Valid URL:', urlText);

        const postDataObj = {
            url: urlText,
            lang: "en",
            model: "general"
        };

        // If the URL is valid, send it to the server
        postData(serverURL, postDataObj)
            .then(data => {
                console.log('Server Response:', data);
                // Display data from the server in the results div
                displayResults(data);
            })
            .catch(error => console.error('Error:', error));
    } else {
        alert('Please enter a valid URL.');
    }
}

// Function to send data to the server using axios
async function postData(url = '', data = {}) {
    try {
        const response = await axios.post(url, data);
        return response.data; // axios automatically handles JSON data parsing
    } catch (error) {
        console.error('Error:', error);
        throw error; // This will allow the .catch in handleSubmit to handle the error
    }
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="analysis-container">
            <h1>Sentiment Analysis Overview</h1>
            <div class="overview">
                <p><strong>Model:</strong> ${data.model}</p>
                <p><strong>Confidence:</strong> ${data.confidence}</p>
                <p><strong>Irony:</strong> ${data.irony}</p>
                <p><strong>Score Tag:</strong> ${data.score_tag}</p>
                <p><strong>Subjectivity:</strong> ${data.subjectivity}</p>
            </div>
            <div class="details">
                <h2>Details</h2>
                <p>${data.sentence_list[0].text}</p>
                <div class="entities">
                    <h3>Entities</h3>
                    <ul>
                        ${data.sentence_list[0].sentimented_entity_list.map(entity => `<li>${entity.form}: ${entity.score_tag} (${entity.type})</li>`).join('')}
                    </ul>
                </div>
                <div class="concepts">
                    <h3>Concepts</h3>
                    <ul>
                        ${data.sentimented_concept_list.map(concept => `<li>${concept.form}: ${concept.score_tag} (${concept.type})</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// Export the handleSubmit function
export { handleSubmit };

