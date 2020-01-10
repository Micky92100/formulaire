const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
});

const sexeSpan = document.getElementById("sexe-span");
const nomSpan = document.getElementById("nom-span");
const prenomSpan = document.getElementById("prenom-span");
const ageSpan = document.getElementById("age-span");
const pseudoSpan = document.getElementById("pseudo-span");
const mdpSpan = document.getElementById("mdp-span");
const mdp2Span = document.getElementById("mdp2-span");
const paysSpan = document.getElementById("pays-span");
let error = false;

function throwAlert(mySpan, msg) {
    mySpan.innerText = msg;
    error = true;
    mySpan.parentElement.style.border = "solid 1px red";
}

function sendForm() {
    resetForm();

    error = false;

    const sexeInput = document.getElementsByName("sexe-input");
    const nomInput = document.getElementById("nom-input").value;
    const prenomInput = document.getElementById("prenom-input").value;
    const ageInput = document.getElementById("age-input").value;
    const pseudoInput = document.getElementById("pseudo-input").value;
    const mdpInput = document.getElementById("mdp-input").value;
    const mdp2Input = document.getElementById("mdp2-input").value;
    const paysInput = document.getElementById("pays-input").value;

    if (!sexeInput[0].checked && !sexeInput[1].checked){
        throwAlert(sexeSpan, "Vous devez sélectioner votre sexe");
    }

    if (nomInput.length < 2) {
        throwAlert(nomSpan, "Un nom ne peux pas faire moins de 2 caractères");
    }

    if (prenomInput.length < 2) {
        throwAlert(prenomSpan, "Un prénom ne peux pas faire moins de 2 caractères")
    }

    if (ageInput < 2) {
        throwAlert(ageSpan, "L'âge doit être compris entre 5 et 140");
    }

    if (pseudoInput.length < 4) {
        throwAlert(pseudoSpan, "Le pseudo ne peut pas faire moins de 4 caractères");
    }

    if (mdpInput.length < 6) {
        throwAlert(mdpSpan, "Le mot de passe ne doit pas faire moins de 6 caractères");
    }

    if (mdp2Input !== mdpInput || mdp2Input === null || mdp2Input === "") {
        throwAlert(mdp2Span, "Le mot de passe de confirmation doit être identique à celui d'origine");
    }

    if (!paysInput || paysInput === "" || paysInput === null) {
        throwAlert(paysSpan, "Vous devez sélectionner votre pays de résidence");
    }

    if (!error) {
        window.alert("Le formulaire a été envoyé!");
        let inputs = document.getElementsByClassName("input");
        for (let i = 0; i < inputs.length ; i++) {
            inputs[i].value = "";
        }

    }
}

function resetForm() {
    let spans = document.getElementsByClassName("alert-span");

    for (let i = 0; i < spans.length; i++) {
        spans[i].innerText = null;
        spans[i].parentElement.style.border = "";
    }
}
