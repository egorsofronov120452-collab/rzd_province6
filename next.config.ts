// Функция для переключения видимости секций
function showSection(section) {
    const sections = ['content', 'lectures', 'training'];
    sections.forEach(s => {
        document.getElementById(s).style.display = (s === section) ? 'block' : 'none';
    });
}

// Функция для переключения лекций
function toggleLecture(lecture) {
    const lectureContent = document.getElementById(lecture);
    lectureContent.style.display = lectureContent.style.display === 'none' ? 'block' : 'none';
}

// Функция для переключения тренировок
function toggleExercise(exercise) {
    const exerciseContent = document.getElementById(exercise);
    exerciseContent.style.display = exerciseContent.style.display === 'none' ? 'block' : 'none';
}

// Функция для копирования текста в буфер обмена
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('✅ Скопировано!');
    });
}
