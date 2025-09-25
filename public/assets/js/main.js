(function () {
    const togglePassword = document.getElementById('customtogglePassword');
    const passwordField = document.getElementById('custompassword');

    if (togglePassword && passwordField) {
        togglePassword.addEventListener('click', () => {
            const isHidden = passwordField.getAttribute('type') === 'password';
            passwordField.setAttribute('type', isHidden ? 'text' : 'password');
            togglePassword.classList.toggle('fa-eye');
            togglePassword.classList.toggle('fa-eye-slash');
        });
    }
})();
