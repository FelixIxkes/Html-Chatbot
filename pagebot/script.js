function toggleChatbot() {
    var chatbotContainer = document.getElementById("chatbot-container");
    chatbotContainer.style.display = (chatbotContainer.style.display === "none" || !chatbotContainer.style.display) ? "block" : "none";
}
function openChatbot() {
    var chatbotContainer = document.getElementById("chatbot-container");
    chatbotContainer.style.display = "block";
}
function getRegexResponse(userQuestion) {
    const responses = [
        { pattern: /^Was ist Techstarter\?$/i, answer: "Techstarter ist für einige von uns eine TOP möglichkeit sich als Qeereinsteiger in der IT zu beweisen" },
        { pattern: /^Wann wurde Techstarter gegründet\?$/i, answer: "Techstarter wurde im Jahr 2020 gegründet."},
        { pattern: /^Was kannst du/i, answer: "Ich kann lediglich nur ein paar fragen beantworten" },
        { pattern: /^Was bist du\?$/i, answer: "Ich bin ein kleiner Hardcoded Bot der euch unterhalten kann. Meine Erschaffer wollten euch nur zeigen, das man das auch ganz einfach machen kann" },
        { pattern: /^Wer ist dein Erschaffer\?$/i, answer: "Meine Erschaffer Tim, Talha, Felix und Marc sind talentierte Entwickler, die mir Leben eingehaucht haben."},
        { pattern: /^Kannst du tanzen\?$/i, answer: "Leider kann ich nicht tanzen, aber ich kann dir sicherlich etwas darüber erzählen!" },
        { pattern: /^Was ist dein Lieblingsessen\?$/i, answer: "Als Bot habe ich kein Lieblingsessen, aber ich höre, dass Datenbanken sehr nahrhaft sind!" },
        // Füge hier weitere Patterns und Antworten hinzu
        
    ];

    for (const response of responses) {
        if (response.pattern.test(userQuestion)) {
            return response.answer;
        }
    }

    return "Stell doch normale fragen man!";
}

function generateChatbotResponse(userQuestion) {
    const regexResponse = getRegexResponse(userQuestion);
    // Hier könntest du zusätzliche Logik für die Antwortgenerierung hinzufügen, z.B. eine externe API-Aufruf oder eine umfangreichere Verarbeitung.

    return regexResponse;
}

function sendMessage() {
    var userInput = document.getElementById("user-input");
    var message = userInput.value.trim();

    if (message !== "") {
        var chatbotMessages = document.getElementById("chatbot-messages");
        chatbotMessages.innerHTML += `<div><strong>Du:</strong> ${message}</div>`;

        var botResponse = generateChatbotResponse(message);
        chatbotMessages.innerHTML += `<div><strong>Chatbot:</strong> ${botResponse}</div>`;

        userInput.value = "";
    }
}
