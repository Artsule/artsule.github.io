const questions = [
    {
        question: "Jakie są główne typy czołgów?",
        answers: ["Czołgi lekkie", "Czołgi średnie", "Czołgi ciężkie", "Wszystkie powyższe"],
        correct: 3
    },
    {
        question: "Który czołg był używany podczas II wojny światowej?",
        answers: ["Panther", "Sherman", "T-34", "Wszystkie powyższe"],
        correct: 3
    },
    {
        question: "Który kraj stworzył czołg T-34?",
        answers: ["Niemcy", "USA", "ZSRR", "Wielka Brytania"],
        correct: 2
    },
    {
        question: "Jak nazywa się niemiecki czołg ciężki z II wojny światowej?",
        answers: ["Tiger", "Sherman", "Panther", "Churchill"],
        correct: 0
    },
    {
        question: "Który czołg jest uważany za pierwszy w historii?",
        answers: ["Mark I", "T-34", "Sherman", "Panther"],
        correct: 0
    },
    {
        question: "Który czołg był nazywany 'Czarną Panterą'?",
        answers: ["Panther", "Leopard", "T-90", "Abrams"],
        correct: 1
    },
    {
        question: "Który czołg jest głównym czołgiem bojowym armii USA?",
        answers: ["Abrams", "Leopard", "Challenger", "Merkava"],
        correct: 0
    },
    {
        question: "Który czołg był używany przez armię niemiecką w czasie I wojny światowej?",
        answers: ["A7V", "Mark I", "Panther", "Tiger"],
        correct: 0
    },
    {
        question: "Który czołg jest głównym czołgiem bojowym armii Izraela?",
        answers: ["Merkava", "Abrams", "Leopard", "Challenger"],
        correct: 0
    },
    {
        question: "Który czołg był używany przez armię brytyjską podczas II wojny światowej?",
        answers: ["Churchill", "Sherman", "Tiger", "T-34"],
        correct: 0
    },
    {
        question: "Który czołg jest znany z użycia w wojnie w Zatoce Perskiej?",
        answers: ["Abrams", "T-72", "Leopard", "Merkava"],
        correct: 0
    },
    {
        question: "Który czołg był nazywany 'Król Tygrysów'?",
        answers: ["Tiger II", "Panther", "Abrams", "T-90"],
        correct: 0
    },
    {
        question: "Który czołg był produkowany w największej liczbie podczas II wojny światowej?",
        answers: ["T-34", "Sherman", "Panther", "Tiger"],
        correct: 0
    },
    {
        question: "Który czołg jest głównym czołgiem bojowym armii niemieckiej?",
        answers: ["Leopard 2", "Tiger", "Panther", "Abrams"],
        correct: 0
    },
    {
        question: "Który czołg był używany przez armię radziecką podczas zimnej wojny?",
        answers: ["T-55", "Abrams", "Leopard", "Merkava"],
        correct: 0
    }
];

let score = 0;

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<p>${q.question}</p>`;
        q.answers.forEach((answer, i) => {
            questionElement.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${i}"> ${answer}
                </label><br>
            `;
        });
        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    score = 0; // Reset wyniku
    questions.forEach((q, index) => {
        const questionElement = document.querySelectorAll('.question')[index];
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        const correctAnswer = q.correct;

        // Reset klas dla odpowiedzi
        questionElement.querySelectorAll('label').forEach((label, i) => {
            label.classList.remove('correct', 'incorrect');
        });

        // Oznacz poprawną odpowiedź
        questionElement.querySelectorAll('label')[correctAnswer].classList.add('correct');

        // Oznacz błędną odpowiedź, jeśli zaznaczono
        if (selectedAnswer && parseInt(selectedAnswer.value) !== correctAnswer) {
            selectedAnswer.parentElement.classList.add('incorrect');
        }

        // Zlicz poprawne odpowiedzi
        if (selectedAnswer && parseInt(selectedAnswer.value) === correctAnswer) {
            score++;
        }
    });

    alert(`Twój wynik to: ${score} z ${questions.length}`);
}

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    submitQuiz();
});

window.onload = loadQuiz;