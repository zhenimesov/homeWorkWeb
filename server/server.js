const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    // Серверная валидация
    if (!name || !email || !password) {
        return res.status(400).send("Все поля должны быть заполнены");
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).send("Некорректный email адрес");
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        return res.status(400).send("Пароль должен содержать минимум 8 символов, включая буквы и цифры");
    }

    res.send("Регистрация прошла успешно");
});

app.listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000");
});
