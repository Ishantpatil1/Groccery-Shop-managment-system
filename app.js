// script.js
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');
    const showLoginLink = document.getElementById('show-login');
    const showRegisterLink = document.getElementById('show-register');
    const formTitle = document.getElementById('form-title');

    showLoginLink.addEventListener('click', function (event) {
        event.preventDefault();
        registrationForm.style.display = 'none';
        loginForm.style.display = 'block';
        formTitle.textContent = 'Login';
    });

    showRegisterLink.addEventListener('click', function (event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        registrationForm.style.display = 'block';
        formTitle.textContent = 'Register';
    });

    // Registration form submission (Add your validation logic)
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle registration logic here (e.g., store user data)
        alert('Registration submitted!');
        // Optionally clear the form
        registrationForm.reset();
    });

    // Login form submission (Add your validation logic)
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle login logic here (e.g., authenticate user)
        alert('Login submitted!');
        // Optionally redirect to the user profile page
        window.location.href = 'user-profile.html'; // Redirect to a profile page after login
    });
});
 


