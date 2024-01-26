document.addEventListener("DOMContentLoaded", function () {
    // Toggle social content and bottom container
    const socialTab = document.getElementById("social-tab");
    const socialContent = document.getElementById("social");
    const bottomContainer = document.querySelector(".bottom-container");
  
    socialTab.addEventListener("click", function () {
      socialTab.classList.toggle("active");
      socialContent.classList.toggle("active");
      bottomContainer.classList.toggle("active");
    });
  
    const gameCard = document.getElementById("game-card");
    const loadingOverlay = document.getElementById("loading-overlay");
  
    setTimeout(() => {
      loadingOverlay.style.opacity = 0;
    }, 2000);
  
    var cardElements = document.querySelectorAll('.info-card');
  
    if (cardElements) {
      cardElements.forEach(function (card) {
        card.classList.add('animated');
      }); // <-- Fixed the closing parenthesis
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    var creditElements = document.querySelectorAll('.credit');
  
    if (creditElements) {
      creditElements.forEach(function (credit) {
        credit.classList.add('animated');
      });
    }
  });
  // Add this to your existing script.js
  
  document.addEventListener("DOMContentLoaded", function () {
    const applicationForm = document.getElementById("application-form");
  
    applicationForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way
  
      // Get form data
      const formData = new FormData(applicationForm);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
  
      // Send data to Discord webhook
      sendToDiscordWebhook(formDataObject);
    });
  });
  
  function sendToDiscordWebhook(formData) {
    const webhookURL = 'https://discord.com/api/webhooks/1200558457091276911/yS0EIqzmODsY4EmkGDOS_PlV4EEupWDlI_ekcGxUcKOYP-c2tfgwaCiXOpysLvt96nyM';
  
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: 'New Application Submission',
        embeds: [
          {
            title: 'New Application',
            color: 0x01fe87,
            fields: [
              { name: 'Position', value: formData.position, inline: true },
              { name: 'Discord Username', value: formData.username, inline: true },
              { name: 'Experience', value: formData.experience },
              { name: 'Why Experience', value: formData.whyExperience },
              // Add more fields as needed
            ],
          },
        ],
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Webhook sent successfully:', data);
    })
    .catch(error => {
      console.error('Error sending webhook:', error);
    });
  }
  