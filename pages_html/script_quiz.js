const quizData = [
    {
        question: "Quel est le rôle de la balise <head> dans un document HTML ?",
        a: "Définir les styles de la page",
        b: "Contenir les métadonnées du document",
        c: "Afficher le contenu principal",
        d: "Inclure les scripts JavaScript",
        correct: "b",
    },
    {
        question: "Quelle propriété CSS est utilisée pour définir la couleur du texte ?",
        a: "color",
        b: "background-color",
        c: "border-color",
        d: "text-color",
        correct: "a",
    },
    {
        question: "Comment ajouter un commentaire en CSS ?",
        a: " ",
        b: "/* commentaire */",
        c: "// commentaire",
        d: "; commentaire",
        correct: "b",
    },
    {
        question: "Quelle balise HTML est utilisée pour créer une liste ordonnée ?",
        a: "<ul>",
        b: "<ol>",
        c: "<li>",
        d: "<dl>",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEL = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => (answerEl.checked = false));
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Recommencer</button>
            `;
        }
    }
});

