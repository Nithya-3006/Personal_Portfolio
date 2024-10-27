const scriptURL = 'https://script.google.com/macros/d/your-script-id/exec';
const form = document.forms[0];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((res) => res.text())
        .then((message) => alert(message))
        .catch((error) => console.error('Error:', error));
});





