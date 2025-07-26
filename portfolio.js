// Toggle read more (unrelated to chatbot, kept as is)
function toggleReadMore(dotsId, moreId, button) {
  const dots = document.getElementById(dotsId);
  const moreText = document.getElementById(moreId);

  if (!dots || !moreText || !button) {
    console.error(
      `Missing elements: dotsId=${dotsId}, moreId=${moreId}, button=${button}`
    );
    return;
  }

  const isHidden =
    moreText.style.display === "none" || moreText.style.display === "";

  if (isHidden) {
    dots.style.display = "none";
    moreText.style.display = "inline";
    button.innerHTML = "Read less";
  } else {
    dots.style.display = "inline";
    moreText.style.display = "none";
    button.innerHTML = "Read more";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const assistantLink = document.getElementById("assistant-link");
  const chatbotContainer = document.getElementById("chatbot-container");
  const closeChatbotBtn = document.getElementById("close-chatbot");
  const chatInput = document.getElementById("chat-input");
  const sendButton = document.getElementById("send-button");
  const chatMessages = document.getElementById("chatbot-messages");

  // Initialize personal data
  let personalData = {};

  // Load JSON data
  fetch("personal_data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load personal data");
      }
      return response.json();
    })
    .then((data) => {
      personalData = data;
    })
    .catch((error) => {
      console.error("Error loading JSON:", error);
      addMessage("Error loading my data. Please try again later.", "bot");
    });

  // Show chatbot when Assistant link is clicked
  assistantLink.addEventListener("click", function (e) {
    e.preventDefault();
    // Close the mobile menu if open
    const navCheckbox = document.getElementById("check");
    if (navCheckbox) navCheckbox.checked = false;
    chatbotContainer.classList.remove("chatbot-hidden");
    chatbotContainer.classList.add("chatbot-visible");
  });

  // Hide chatbot and reset messages when X is clicked
  closeChatbotBtn.addEventListener("click", function () {
    chatbotContainer.classList.remove("chatbot-visible");
    chatbotContainer.classList.add("chatbot-hidden");
    chatMessages.innerHTML = ""; // Reset conversation
    messagePairs = []; // Clear message pairs
  });

  // Track message pairs (user+bot)
  let messagePairs = [];

  function addMessage(message, sender = "user") {
    const msgDiv = document.createElement("div");
    msgDiv.className = sender === "user" ? "user-message" : "bot-message";
    msgDiv.innerHTML = message;
    chatMessages.appendChild(msgDiv);

    // Track messages for removal
    if (sender === "user") {
      messagePairs.push([msgDiv, null]); // Start a new pair
    } else if (
      messagePairs.length &&
      !messagePairs[messagePairs.length - 1][1]
    ) {
      messagePairs[messagePairs.length - 1][1] = msgDiv; // Complete the pair
    }

    // If more than 4 pairs, remove the oldest 3 pairs
    if (messagePairs.length > 4) {
      for (let i = 0; i < 3; i++) {
        const pair = messagePairs.shift();
        pair.forEach((msg) => {
          if (msg && msg.parentNode) msg.parentNode.removeChild(msg);
        });
      }
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getBotResponse(input) {
    if (!personalData.name) {
      return "Error: My data is not loaded. Please try again later.";
    }

    const query = input.trim().toLowerCase();

    // Handle specific queries using JSON data
    if (query.includes("name")) {
      return `My name is ${personalData.name}.`;
    }  else if (query.includes("education") || query.includes("degree") || query.includes("study")) {
      const educationList = personalData.education
        .map((edu) => `${edu.degree} from ${edu.institution} (${edu.year})`)
        .join("<br>");
      return `Here is my education qalification:<br>${educationList}`;
    } else if (query.includes("skill") || query.includes("skills")) {
      return `My skills include: ${personalData.skills.join(", ")}.`;
    } else if (
      query.includes("address") ||
      query.includes("location") ||
      query.includes("live")
    ) {
      return `I am based in ${personalData.address}.`;
    } else if (query.includes("project")) {
      const projectList = personalData.other.projects
        .map(
          (proj) =>
            `${proj.title}: ${proj.description} <a href="${proj.link}" target="_blank">View on GitHub</a>`
        )
        .join("<br>");
      return `Check out my projects:<br>${projectList}`;
    } else if (query.includes("contact")) {
      return `You can contact me via email at ${personalData.other.contact.email} or call ${personalData.other.contact.phone}.`;
    } else if (query.includes("linkedin")) {
      return `Visit my LinkedIn: <a href="${personalData.other.contact.linkedin}" target="_blank">Profile</a>`;
    } else if (query.includes("github")) {
      return `Visit my GitHub: <a href="https://github.com/PraveenGithubAccnt" target="_blank">Profile</a>`;
    } else if (query.includes("resume")) {
      return `Click to Download: <a href="assets/resumepr.pdf" download class="resume-button">⬇️ Resume</a>`;
    } else if (query.includes("hello") || query.includes("hii")) {
      return `Hello! I'm ${personalData.name}'s Assistant. Ask me about my education, skills, address, projects, or contact details!`;
    } 
     else if (query.includes("how") || query.includes("how are you")) {
      return `I'm just a bot, but I'm here to help you with ${personalData.name}'s portfolio! How can I assist you today?`;
    } 
    else if (query.includes("you") || query.includes("who are you")) {
      return `I'm a chat bot Assitant made by ${personalData.name}. to assist you with his portfolio.`;
    } 
    else if (query.includes("tell me about") || query.includes("about")) {
      return `He is a MCA graduate aspiring Software Developer specializing in mobile and AI-integrated applications, passionate about building 
      impactful solutions and contributing to innovative tech environments, specializing in skills like ${personalData.skills.join(
        ", "
      )}.`;
    } else if (query.includes("hello") || query.includes("hii")) {
      return `Hello! I'm ${personalData.name}'s Assistant How can I assist you today? Ask me about my education, skills, address, projects, or contact details!`;
    } 
     else if (query.includes("thanks") || query.includes("thank")) {
      return `You're welcome! If you have any more questions or need assistance, feel free to ask.`;
    }
    return `Sorry, either I don't have an answer for that or you have mistyped the spelling. Try asking about my education, skills, address, projects, contact, resume, GitHub, or LinkedIn profile!`;
  }

  function handleSend() {
    const userInput = chatInput.value.trim();
    if (!userInput) return;
    addMessage(userInput, "user");
    setTimeout(() => {
      addMessage(getBotResponse(userInput), "bot");
    }, 500);
    chatInput.value = "";
  }

  sendButton.addEventListener("click", handleSend);
  chatInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") handleSend();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const resumeLink = document.getElementById('resume-download');
  if (resumeLink) {
    resumeLink.addEventListener('click', () => {
      alert('Resume download started! Thank you for your interest.');
    });
  }
});