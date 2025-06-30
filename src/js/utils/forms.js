// Form utilities
export function initializeForms() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
}

function handleFormSubmit(e) {
  const form = e.target;
  const submitButton = form.querySelector('button[type="submit"]');
  
  // Show loading state
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Submitting...';
  submitButton.disabled = true;
  
  // Reset button after form submission attempt
  setTimeout(() => {
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }, 3000);
}

// Form validation utilities
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone) {
  const re = /^[\+]?[1-9][\d]{0,15}$/;
  return re.test(phone.replace(/\s/g, ''));
}

// Add real-time validation
export function addFormValidation(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearValidationError);
  });
}

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();
  
  // Remove existing error styling
  field.classList.remove('is-invalid');
  
  // Validate based on field type
  if (field.hasAttribute('required') && !value) {
    showFieldError(field, 'This field is required');
    return;
  }
  
  if (field.type === 'email' && value && !validateEmail(value)) {
    showFieldError(field, 'Please enter a valid email address');
    return;
  }
  
  if (field.type === 'tel' && value && !validatePhone(value)) {
    showFieldError(field, 'Please enter a valid phone number');
    return;
  }
}

function showFieldError(field, message) {
  field.classList.add('is-invalid');
  
  // Remove existing error message
  const existingError = field.parentNode.querySelector('.invalid-feedback');
  if (existingError) {
    existingError.remove();
  }
  
  // Add new error message
  const errorDiv = document.createElement('div');
  errorDiv.className = 'invalid-feedback';
  errorDiv.textContent = message;
  field.parentNode.appendChild(errorDiv);
}

function clearValidationError(e) {
  const field = e.target;
  field.classList.remove('is-invalid');
  const errorMessage = field.parentNode.querySelector('.invalid-feedback');
  if (errorMessage) {
    errorMessage.remove();
  }
}