document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let passwordStrength = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordStrength.test(password)) {
        alert("Пароль должен содержать минимум 8 символов, включая буквы и цифры.");
        return;
    }

    if (!email.includes("@")) {
        alert("Некорректный email адрес.");
        return;
    }

    alert("Регистрация прошла успешно!");
});
