<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Методичка для СС РЖД</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <h1>🚄 Методичка для СС РЖД</h1>
    </header>
    <div class="container">
        <nav class="sidebar">
            <button class="nav-button" onclick="showSection('content')">1️⃣ Содержание</button>
            <button class="nav-button" onclick="showSection('lectures')">2️⃣ Лекции</button>
            <button class="nav-button" onclick="showSection('training')">3️⃣ Тренировки</button>
        </nav>
        <main class="content" id="content">
            <h2 style="color: #ff6666;">Содержание</h2>
            <hr style="border: 1px solid #ff6666;">
            <div class="info-box">
                <p>📋 Разделы методички:</p>
                <ul>
                    <li>1️⃣ Содержание - Все разделы методички</li>
                    <li>2️⃣ Лекции - Проведение учебных занятий</li>
                    <li>3️⃣ Тренировки - Организация практических занятий</li>
                </ul>
            </div>
            <div class="note">💡 Важно: Данная методичка содержит большинство инструкций для работы. Используйте навигацию слева для быстрого перехода к нужному разделу.</div>
        </main>
        <main class="content" id="lectures" style="display: none;">
            <h2 style="color: #ff6666;">Лекции</h2>
            <hr style="border: 1px solid #ff6666;">
            <div class="info-box">
                <p style="color: #ff6666;">📍 Место проведения: Лекции проводятся в актовом зале.</p>
                <div class="lecture-list">
                    <div class="lecture-button" onclick="toggleLecture('lecture1')">Лекция 1: Вступительная лекция ▼</div>
                    <div id="lecture1" class="lecture-content" style="display: none;">
                        <p>say Фарм</p>
                        <p>say ФЫРМ</p>
                        <button class="copy-button" onclick="copyToClipboard('Фарм')">🚩 Скопировать</button>
                    </div>
                    <div class="lecture-button" onclick="toggleLecture('lecture2')">Лекция 2: Монтёр пути ▼</div>
                    <div id="lecture2" class="lecture-content" style="display: none;">
                        <p>say Ферма фарма</p>
                        <p>say РЖД</p>
                        <button class="copy-button" onclick="copyToClipboard('Ферма фарма')">🚩 Скопировать</button>
                    </div>
                </div>
            </div>
        </main>
        <main class="content" id="training" style="display: none;">
            <h2 style="color: #ff6666;">Тренировки</h2>
            <hr style="border: 1px solid #ff6666;">
            <div class="info-box">
                <p style="color: #ff6666;">📍 Место проведения: Тренировки проводятся в спортзале.</p>
                <div class="exercise-list">
                    <div class="exercise-button" onclick="toggleExercise('exercise1')">Тренировка 1: Приседания ▼</div>
                    <div id="exercise1" class="exercise-content" style="display: none;">
                        <p>say Начали</p>
                        <p>say Фармим</p>
                        <p>say Закончили</p>
                        <button class="copy-button" onclick="copyToClipboard('Начали')">🚩 Скопировать</button>
                    </div>
                    <div class="exercise-button" onclick="toggleExercise('exercise2')">Тренировка 2: Восстановление ▼</div>
                    <div id="exercise2" class="exercise-content" style="display: none;">
                        <p>say Фармим</p>
                        <p>say Закончили</p>
                        <p>say Начали</p>
                        <button class="copy-button" onclick="copyToClipboard('Фармим')">🚩 Скопировать</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <script src="script.js"></script>
</body>
</html>
