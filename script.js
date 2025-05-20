// Change text dynamically
function changeText() {
  const textElement = document.getElementById('dynamicText');
  textElement.textContent = 'Let your thoughts run wild — explore the paradox!';
}

// Toggle styles dynamically
function toggleBoxStyle() {
  const box = document.getElementById('interactive-box');
  box.classList.toggle('highlighted');
}

// Add a new quote (element) to the section
function addElement() {
  const newPara = document.createElement('p');
  newPara.textContent = `"The opposite of a profound truth may well be another profound truth." – Niels Bohr`;
  newPara.classList.add('quote');
  document.getElementById('interactive-box').appendChild(newPara);
}

// Remove the last quote
function removeElement() {
  const box = document.getElementById('interactive-box');
  const quotes = box.querySelectorAll('.quote');
  if (quotes.length > 0) {
    box.removeChild(quotes[quotes.length - 1]);
  } else {
    alert('No quotes to remove!');
  }
}

// Optional: Toggle light/dark theme and save preference
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  // Save theme preference to localStorage
  const isDarkTheme = document.body.classList.contains('dark-theme');
  localStorage.setItem('darkTheme', isDarkTheme);
}

// Load saved theme preference
function loadThemePreference() {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  if (isDarkTheme) {
    document.body.classList.add('dark-theme');
  }
}

// Add ripple effect to buttons
function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - diameter / 2}px`;
  circle.style.top = `${event.clientY - button.offsetTop - diameter / 2}px`;
  circle.classList.add('ripple');

  // Remove existing ripples
  const ripple = button.querySelector('.ripple');
  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

// Add event listeners to all buttons when page loads
document.addEventListener('DOMContentLoaded', function () {
  loadThemePreference();
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', createRipple);
});
document.addEventListener('DOMContentLoaded', loadThemePreference);
