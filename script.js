const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

// Predefined chatbot responses
const responses = {
    "hello": "Hello! How can I help you?",
    "hi": "Hi! Nice to meet you.",
    "how are you": "I'm fine! Thanks for asking.",
    "your name": "I am CodeOrbit AI Chatbot.",
    "help": "Sure! Ask me anything about AI or Python.",
    "what is ai": "AI stands for Artificial Intelligence.",
    "python": "Python is a popular programming language.",
    "thank": "You're welcome! Happy to help.",
    "bye": "Goodbye! Have a nice day."
};

// Generate chatbot response
function getResponse(message) {

    let input = message.toLowerCase().trim();

    for (let keyword in responses) {

        if (input.includes(keyword)) {
            return responses[keyword];
        }
    }

    return "Sorry! I don't understand. Please try another question.";
}

// Display messages
function addMessage(message, className) {

    let div = document.createElement("div");

    div.className = className;
    div.textContent = message;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send user message
function sendMessage() {

    let message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user-message");

    userInput.value = "";

    setTimeout(function() {

        let reply = getResponse(message);

        addMessage(reply, "bot-message");

    }, 500);
}

// Suggestion button
function sendSuggestion(message) {

    userInput.value = message;

    sendMessage();
}

// Enter key support
userInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});