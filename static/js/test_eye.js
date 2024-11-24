
        // Set up the speech recognition API
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.continuous = false; // Stop after the first result
        recognition.lang = 'en-US'; // Set the language
        recognition.interimResults = false; // Do not show intermediate results

        const startButton = document.getElementById('start-button');
        const statusText = document.getElementById('status');
        const letterDisplay = document.getElementById('letter-display');
        const spokenLetterDisplay = document.getElementById('spoken-letter'); // Element to show spoken letter
        let currentLetterIndex = 0;
        const letterList = {{ letter_list | safe }}; // Passing the letter list from Django context to JavaScript

        // Function to start recognition
        function startRecognition() {
            statusText.textContent = "Listening...";
            recognition.start();
        }

        // Handle speech recognition results
        recognition.onresult = function(event) {
            const spokenWord = event.results[0][0].transcript.toUpperCase();
            const expectedLetter = letterList[currentLetterIndex].letter.toUpperCase();
            
            // Display the letter the user spoke
            spokenLetterDisplay.textContent = `You said: ${spokenWord}`;

            // Check if the spoken word matches the expected letter
            if (spokenWord === expectedLetter) {
                statusText.textContent = "Correct!";
                currentLetterIndex++;
                if (currentLetterIndex < letterList.length) {
                    // Show the next letter and update font size
                    letterDisplay.textContent = letterList[currentLetterIndex].letter;
                    letterDisplay.style.fontSize = `${letterList[currentLetterIndex].size}px`;
                } else {
                    statusText.textContent = "You've completed the test!";
                }
            } else {
                statusText.textContent = "Try again, please.";
            }
        };

        recognition.onerror = function(event) {
            statusText.textContent = "Error occurred. Try again!";
        };

        // Start speech recognition on button click
        startButton.addEventListener('click', function() {
            startRecognition();
        });
    