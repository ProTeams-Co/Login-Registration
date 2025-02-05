document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.getElementById("toggle-password");
    const toggleConfirmPassword = document.getElementById("toggle-confirm-password");

    if (togglePassword) {
        togglePassword.addEventListener("click", function () {
            const passwordInput = document.getElementById("password");
            togglePasswordVisibility(passwordInput, this);
        })
    }

    if (toggleConfirmPassword) {
        toggleConfirmPassword.addEventListener("click", function () {
            const confirmPasswordInput = document.getElementById("confirm_password");
            togglePasswordVisibility(confirmPasswordInput, this);
        })
    }

    function togglePasswordVisibility(input, button) {
        if (input && button) {
            if (input.type === "password") {
                input.type = "text";
                button.querySelector("img").src = "images/eyeOff.svg"
            } else {
                input.type = "password";
                button.querySelector("img").src = "images/eyeOn.svg"
            }
        }
    }
})