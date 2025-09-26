// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple project demo alert
function openProject(e, id) {
  e.preventDefault();
  const titles = {
    todo: 'To-Do List',
    calculator: 'Simple Calculator',
    login: 'Registration & Login'
  };
  alert(`${titles[id]} — demo placeholder. Replace with real demo links or GitHub repos.`);
}

// Contact form handler
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  if (!name || !email || !message) {
    status.textContent = 'Please fill out all fields.';
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    status.textContent = 'Please enter a valid email.';
    return;
  }
  status.textContent = 'Sending...';
  setTimeout(() => {
    status.textContent = 'Thanks, your message was sent (simulated).';
    document.getElementById('contactForm').reset();
  }, 700);
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
