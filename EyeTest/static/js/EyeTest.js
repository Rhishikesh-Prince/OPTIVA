// Retrieve the JSON-encoded letter_list from the script tag
const letterList = JSON.parse(document.getElementById('letter-list-data').textContent);

// DOM Elements
const letterDisplay = document.getElementById('letter-display');
const spokenLetterDisplay = document.getElementById('spoken-letter');
const statusText = document.getElementById('status');
const startButton = document.getElementById('start-button');

// Speech recognition setup
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;

let currentLetterIndex = 0;

// Function to display the next letter
function displayNextLetter() {
    if (currentLetterIndex < letterList.length) {
        const currentLetter = letterList[currentLetterIndex];
        letterDisplay.textContent = currentLetter.letter;
        letterDisplay.style.fontSize = `${currentLetter.size}px`;
    } else {
        statusText.textContent = "You've completed the test!";
        startButton.disabled = true; // Disable the button after the test
    }
}

// Function to start speech recognition
function startRecognition() {
    if (currentLetterIndex < letterList.length) {
        statusText.textContent = "Listening...";
        recognition.start();
    }
}

// Handle speech recognition results
recognition.onresult = function (event) {
    const spokenWord = event.results[0][0].transcript.toUpperCase();
    const expectedLetter = letterList[currentLetterIndex].letter.toUpperCase();

    // Display the spoken letter
    spokenLetterDisplay.textContent = `You said: ${spokenWord}`;

    // Check if the spoken word matches the expected letter
    if (spokenWord === expectedLetter) {
        statusText.textContent = "Correct!";
        currentLetterIndex++;
        displayNextLetter();
    } else {
        statusText.textContent = "Try again!";
    }
};

// Handle recognition errors
recognition.onerror = function () {
    statusText.textContent = "Error occurred. Please try again!";
};

// Add event listener to the button
startButton.addEventListener('click', startRecognition);

// Display the first letter when the page loads
window.onload = displayNextLetter;
