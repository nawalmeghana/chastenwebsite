const scriptURL = 'https://script.google.com/macros/s/AKfycbwdRGNS3evPVUeTb2JuaCN0S_5Xr036gLR-FOfWS4kMZg5A0EPbY5xUZsLCV2b41_Pefw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})