document.addEventListener('DOMContentLoaded', () => {
  const countdownElement = document.getElementById('countdown');
  const redirectLink = document.querySelector('.new-link');
  let seconds = parseInt(countdownElement.textContent, 10);
  const targetURL = redirectLink.href;

  // Add a class to the body to indicate JavaScript is enabled
  // This helps CSS manage the display of the noscript message
  document.body.classList.add('js-enabled');

  const updateCountdown = () => {
    seconds--;
    countdownElement.textContent = seconds;

    if (seconds <= 0) {
      clearInterval(countdownInterval); // Stop the countdown
      window.location.href = targetURL; // Perform the redirection
    }
  };

  // Start the countdown, updating every second
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Allow immediate redirection if the user clicks the link before countdown
  redirectLink.addEventListener('click', (event) => {
    clearInterval(countdownInterval); // Stop the countdown if they click
    // The browser's default behavior for the anchor tag will handle navigation
  });

  // Optional: Add a subtle visual feedback when the link is pressed
  redirectLink.addEventListener('mousedown', () => {
    redirectLink.style.transform = 'scale(0.98)';
  });
  redirectLink.addEventListener('mouseup', () => {
    redirectLink.style.transform = 'scale(1)';
  });
  redirectLink.addEventListener('mouseleave', () => {
    // Reset transform if mouse leaves while still pressed, or after mouseup
    redirectLink.style.transform = 'scale(1)';
  });
});