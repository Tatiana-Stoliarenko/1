// Дані сутностей (по 5-7+ характеристик для кожного об'єкта)
const universityData = {
    teachers: [
        {
            fullName: "Столяренко Тетяна Леонідівна",
            department: "Інтелектуальних систем управління",
            position: "Доцент",
            disciplines: "Об'єктно-орієнтоване програмування, Python",
            experience: 12,
            degree: "Кандидат пед. наук",
            email: "t.stoliarenko@hneu.edu.ua"
        },
        {
            fullName: "Коваленко Іван Петрович",
            department: "Економічної кібернетики",
            position: "Професор",
            disciplines: "Економетрика, Бази даних",
            experience: 20,
            degree: "Доктор екон. наук",
            email: "i.kovalenko@hneu.edu.ua"
        },
        {
            fullName: "Мельник Олена Сергіївна",
            department: "Інтелектуальних систем управління",
            position: "Старший викладач",
            disciplines: "Веб-розробка (Django, Flask)",
            experience: 8,
            degree: "Кандидат тех. наук",
            email: "o.melnyk@hneu.edu.ua"
        }
    ],
    students: [
        {
            fullName: "Петренко Андрій Дмитрович",
            group: "КН-21",
            specialty: "Комп'ютерні науки",
            course: 3,
            avgGrade: 91.5,
            studyForm: "Денна",
            email: "andrii.petrenko@student.ua"
        },
        {
            fullName: "Сидоренко Марія Василівна",
            group: "ІС-22",
            specialty: "Системний аналіз",
            course: 2,
            avgGrade: 88.0,
            studyForm: "Денна",
            email: "mariya.sydorenko@student.ua"
        },
        {
            fullName: "Ковальчук Максим Олегович",
            group: "КН-21",
            specialty: "Комп'ютерні науки",
            course: 3,
            avgGrade: 79.4,
            studyForm: "Заочна",
            email: "maksym.kovalchuk@student.ua"
        }
    ],
    disciplines: [
        {
            name: "Об'єктно-орієнтоване програмування",
            credits: 5,
            semester: 3,
            department: "Інтелектуальних систем управління",
            lecturer: "Столяренко Т. Л.",
            hours: 150,
            controlType: "Екзамен"
        },
        {
            name: "Економетрика",
            credits: 4,
            semester: 4,
            department: "Економічної кібернетики",
            lecturer: "Коваленко І. П.",
            hours: 120,
            controlType: "Залік"
        },
        {
            name: "Бази даних та SQL",
            credits: 6,
            semester: 2,
            department: "Інтелектуальних систем управління",
            lecturer: "Мельник О. С.",
            hours: 180,
            controlType: "Екзамен"
        }
    ]
};

// Функція динамічного заповнення таблиць даними
function renderTables() {
    // 1. Викладачі
    const teachersTbody = document.getElementById('teachers-tbody');
    teachersTbody.innerHTML = universityData.teachers.map(item => `
        <tr>
            <td>${item.fullName}</td>
            <td>${item.department}</td>
            <td>${item.position}</td>
            <td>${item.disciplines}</td>
            <td>${item.experience}</td>
            <td>${item.degree}</td>
            <td>${item.email}</td>
        </tr>
    `).join('');

    // 2. Студенти
    const studentsTbody = document.getElementById('students-tbody');
    studentsTbody.innerHTML = universityData.students.map(item => `
        <tr>
            <td>${item.fullName}</td>
            <td>${item.group}</td>
            <td>${item.specialty}</td>
            <td>${item.course}</td>
            <td>${item.avgGrade}</td>
            <td>${item.studyForm}</td>
            <td>${item.email}</td>
        </tr>
    `).join('');

    // 3. Дисципліни
    const disciplinesTbody = document.getElementById('disciplines-tbody');
    disciplinesTbody.innerHTML = universityData.disciplines.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.credits}</td>
            <td>${item.semester}</td>
            <td>${item.department}</td>
            <td>${item.lecturer}</td>
            <td>${item.hours}</td>
            <td>${item.controlType}</td>
        </tr>
    `).join('');
}

// Логіка перемикання табів
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Знімаємо клас active з усіх кнопок та панелей
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Додаємо активний клас до натиснутої кнопки
            button.classList.add('active');

            // Знаходимо і показуємо відповідну панель
            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// Ініціалізація після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    renderTables();
    setupTabs();
});