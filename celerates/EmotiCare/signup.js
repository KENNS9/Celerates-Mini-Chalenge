const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const errorMessage = document.getElementById('errorMessage');
const submitButton = document.getElementById('signupForm');

submitButton.addEventListener('submit', function (event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault(); // Prevent the form from being submitted
        errorMessage.style.display = 'block'; // Show error message
    } else {
        errorMessage.style.display = 'none'; // Hide error message if they match
    }
});

password.addEventListener('input', function () {
    if (password.value === confirmPassword.value) {
        errorMessage.style.display = 'none'; // Hide error message
    }
});

confirmPassword.addEventListener('input', function () {
    if (password.value === confirmPassword.value) {
        errorMessage.style.display = 'none'; // Hide error message
    }
});