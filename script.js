// script.js

// Insertar año actual en el footer
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Manejar envío de formulario
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for contacting SparkLab Technologies! We will get back to you soon.');
      form.reset();
    });
  }
});
