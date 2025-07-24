document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
    } else if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
    } else {
        window.location.href = 'dashboard.html';
    }
});