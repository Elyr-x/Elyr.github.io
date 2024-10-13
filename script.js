// Basic form validation before submitting (optional)
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});
