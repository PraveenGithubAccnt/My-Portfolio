document.addEventListener("DOMContentLoaded", function () {
  const assistantLink = document.getElementById("assistant-link");
  const chatbotContainer = document.getElementById("chatbot-container");
  const closeChatbotBtn = document.getElementById("close-chatbot");
  const chatInput = document.getElementById("chat-input");
  const sendButton = document.getElementById("send-button");
  const chatMessages = document.getElementById("chatbot-messages");

  const BACKEND_URL = "https://protfoliobackend-production-7b3e.up.railway.app/api/chat";
  const HEALTH_URL = "https://protfoliobackend-production-7b3e.up.railway.app/api/health";

  let backendAvailable = false;
  let conversationHistory = [];

  // Check backend health
  fetch(HEALTH_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log("✅ Backend is running:", data);
      backendAvailable = true;
    })
    .catch((error) => {
      console.error("❌ Backend is NOT running:", error);
      backendAvailable = false;
    });

  assistantLink.addEventListener("click", function (e) {
    e.preventDefault();
    chatbotContainer.classList.remove("chatbot-hidden");
    chatbotContainer.classList.add("chatbot-visible");

    if (chatMessages.children.length === 0) {
      if (backendAvailable) {
        addMessage("Hi! I'm Praveen's AI assistant. What would you like to know?", "bot");
      } else {
        addMessage("⚠️ server is not running");
      }
    }
  });

  closeChatbotBtn.addEventListener("click", function () {
    chatbotContainer.classList.remove("chatbot-visible");
    chatbotContainer.classList.add("chatbot-hidden");
    chatMessages.innerHTML = "";
    conversationHistory = [];
  });

  function makeLinksClickable(text) {
    const urlRegex = /(https?:\/\/[^\s<>"{}|\\^`[\]]+)/gi;
    return text.replace(urlRegex, function (url) {
      let cleanUrl = url;
      let trailingPunctuation = "";
      const lastChar = url.slice(-1);
      if ([".", ",", "!", "?", ";", ":"].includes(lastChar)) {
        cleanUrl = url.slice(0, -1);
        trailingPunctuation = lastChar;
      }
      return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" style="color: #007bff; text-decoration: underline;">${cleanUrl}</a>${trailingPunctuation}`;
    });
  }

  function addMessage(message, sender = "user", isLoading = false) {
    const msgDiv = document.createElement("div");
    msgDiv.className = sender === "user" ? "user-message" : "bot-message";

    if (isLoading) {
      msgDiv.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
      msgDiv.id = "loading-message";
    } else {
      if (sender === "bot") {
        msgDiv.innerHTML = makeLinksClickable(message);
      } else {
        msgDiv.innerHTML = message;
      }
    }

    chatMessages.appendChild(msgDiv);

    if (sender === "user") {
      conversationHistory.push(message);
    } else if (sender === "bot") {
      conversationHistory.push(message);
    }

    if (conversationHistory.length > 20) {
      conversationHistory = conversationHistory.slice(-12);
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;

    return msgDiv;
  }

  async function queryBackend(userQuery) {
    console.log("Calling Spring Boot backend...");
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: userQuery,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Backend error: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ Backend response received");

    if (!data.response) {
      throw new Error("No response from backend");
    }
    return data.response;
  }

  async function handleSend() {
    const userInput = chatInput.value.trim();
    if (!userInput) return;

    if (!backendAvailable) {
      addMessage(
        "⚠️ Cannot send message: backend is not running. Please try again later.",
        "bot"
      );
      return;
    }

    addMessage(userInput, "user");
    const loadingMsg = addMessage("", "bot", true);

    try {
      const response = await queryBackend(userInput);

      if (loadingMsg && loadingMsg.parentNode) {
        loadingMsg.parentNode.removeChild(loadingMsg);
      }

      addMessage(response, "bot");
    } catch (error) {
      console.error("Error calling backend:", error);

      if (loadingMsg && loadingMsg.parentNode) {
        loadingMsg.parentNode.removeChild(loadingMsg);
      }

      addMessage(
        "❌ Backend Error: try again later.",
        "bot"
      );
      console.log( `❌ Backend Error: ${error.message}<br><br>Please ensure:<br>1. server is running at http://localhost:8080<br>2. GEMINI_API_KEY environment variable is set<br>3. Check server logs for details`,
        "bot");
    }

    chatInput.value = "";
  }

  sendButton.addEventListener("click", handleSend);
  chatInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  });

  chatMessages.addEventListener("click", function (e) {
    if (e.target.classList.contains("resume-button")) {
      console.log("Resume download initiated via event delegation");
    }
  });
});

// Optional UI utility unrelated to backend or AI integration
function toggleReadMore(dotsId, moreId, button) {
  const dots = document.getElementById(dotsId);
  const moreText = document.getElementById(moreId);

  if (!dots || !moreText || !button) {
    console.error(`Missing elements: dotsId=${dotsId}, moreId=${moreId}, button=${button}`);
    return;
  }

  const isHidden = moreText.style.display === "none" || moreText.style.display === "";

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
