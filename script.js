document.addEventListener("DOMContentLoaded", function () {
    let poll = {
        question: "Minecraft Mob Vote For DevenSMP",
        answers: ["Crab", "Armadillo", "Penguin"],
        pollCount: 20,
        answersWeight: [4, 4, 2],
        selectedAnswer: -1,
    };

    let pollDOM = {
        question: document.querySelector(".poll .question"),
        answers: document.querySelectorAll(".poll .answers .answer"),
    };

    pollDOM.question.innerText = poll.question;

    function vote(index) {
        poll.selectedAnswer = index;
        pollDOM.answers.forEach((answer, i) => {
            answer.classList.remove("selected");
            if (i === index) {
                answer.classList.add("selected");
            }
        });
        showResults();
    }

    function showResults() {
        pollDOM.answers.forEach((answer, i) => {
            let percentage = 0;
            if (i === poll.selectedAnswer) {
                percentage = Math.round((poll.answersWeight[i] + 1) * 100 / (poll.pollCount + 1));
            }

            answer.querySelector(".percentage-bar").style.width = percentage + "%";
            answer.querySelector(".percentage-value").innerText = percentage + "%";
        });
    }
});
