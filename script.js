const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    formResponse.textContent = Thank you, ${name}! Your message has been received.;
    formResponse.style.color = 'green';
    formResponse.classList.remove('hidden');
    contactForm.reset();
  } else {
    formResponse.textContent = 'Please fill out all fields.';
    formResponse.style.color = 'red';
    formResponse.classList.remove('hidden');
  }
});