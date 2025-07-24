document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password === confirmPassword) {
            window.location.href = 'dashboard.html';
        }
        else {
            alert('Incorrect Customer ID or Password. Please try again.');
            
        }
     });
});
