const responses = ["q-1-a-3", "q-2-a-1", "q-3-a-2", "q-4-a-1", "q-5-a-3"];

const results = ["👎 Peut mieux faire ! 👎", "😭 Peut mieux faire ! 😭", "👀 Il reste quelques erreurs. 😭", "✨ Encore un effort ... 👀", "✨ Vous y êtes presque ! ✨", "✔️ Bravo, c'est un sans faute ! ✔️"];

const phrases = ["Retentez une autre réponse dans les cases rouges, puis re-validez !", "Retentez une autre réponse dans les cases rouges, puis re-validez !", "Retentez une autre réponse dans les cases rouges, puis re-validez !", "Retentez une autre réponse dans les cases rouges, puis re-validez !", "Retentez une autre réponse dans la case rouge, puis re-validez !", "Quelle culture ..."];

let questionCardsElt = [];
for(let i = 1; i <= 5; i++){
    questionCardsElt.push(document.getElementById("question-"+i));
}

let responsesElt = [];
for(response of responses){
    responsesElt.push(document.getElementById(response));
}

let submitButtonElt = document.getElementById("submit");
let outputElt = document.getElementById("output");


submitButtonElt.addEventListener("click", () => {
    let score = 0;
    for(let i = 1; i <= 5; i++){
        if(responsesElt[i-1].checked) {
            score++;
            questionCardsElt[i-1].style.backgroundImage = "linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214))";
        } else {
            questionCardsElt[i-1].style.backgroundImage = "linear-gradient(to right, rgb(245, 86, 123), rgb(253, 103, 76))";
        }
    }

    outputElt.innerHTML = "<p class=\"one\">" + results[score] + "</p>\n<p class=\"two\">Score : <span>" + score + " / 5</span></p>\n<p class=\"three\">" + phrases[score] + "</p>\n";
}, false);

let radioInputs = document.querySelectorAll("input[type='radio']");

for(radioInput of radioInputs){
    radioInput.addEventListener("input", (event) => {
        const questionContainer = document.getElementById(event.target.getAttribute("name"));
        questionContainer.style.backgroundImage = "none";
    }, false);
}