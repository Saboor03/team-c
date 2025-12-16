// Shared script for rating selection and thank-you state

document.addEventListener('DOMContentLoaded', () => {
  const ratingButtons = document.querySelectorAll('.rating-button');
  const submitLink = document.querySelector('.submit');
  let selectedRating = null;

  // If we're on the rating page, wire up buttons and submit
  if (ratingButtons.length > 0 && submitLink) {
    ratingButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        ratingButtons.forEach((btn) => btn.classList.remove('selected'));

        // Add active class to the clicked one
        button.classList.add('selected');

        // Save selected rating
        selectedRating = button.textContent.trim();
      });
    });

    submitLink.addEventListener('click', (event) => {
      if (!selectedRating) {
        // Prevent navigation if no rating was selected
        event.preventDefault();
        alert('Please select a rating first.');
        return;
      }

      // Store rating so the thank-you page can read it
      localStorage.setItem('selectedRating', selectedRating);
      // Allow normal navigation to submit.html
    });
  }

  // If we're on the thank-you page, update the selected rating text
  const selectedRatingText = document.querySelector('.selected-rating p');
  if (selectedRatingText) {
    const storedRating = localStorage.getItem('selectedRating');
    if (storedRating) {
      selectedRatingText.textContent = `You selected ${storedRating} out of 5`;
    }
  }
});


