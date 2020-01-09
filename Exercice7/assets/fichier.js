// Exercice 7 JS eval



/* ADRESSE MAIL  */
function testmail() {
    // let filtre = /[@]{1}/; mode no friendly
    let filtre = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
    let mail = document.getElementById("email").value;
    let result = filtre.test(mail);
    if (!result) {
        event.preventDefault();
        alert("Email non valide, comprenant au moins '@'");
    } else {
        console.log(mail);
    }
};

/* CODE POSTAL */
function testcode() {
    let filtre = /^[0-9]{5}$/;
    let code = document.getElementById("code").value;
    let result = filtre.test(code);
    if (!result) {
        event.preventDefault();
        alert("Code postal incorrect ! saisir Exemple : 80100");
    } else {
        console.log(code);
    }
}

/* NOM */
function testnom() {
    let filtre = /[a-zA-Z\é\è\-\ï]$/;
    let nom = document.getElementById("nom").value;
    let result = filtre.test(nom);
    if (!result) {
        event.preventDefault();
        alert("Nom  non valide !");
    } else {
        console.log(nom);
    }
}

/*  PRENOM */
function testprenom() {
    let filtre = /[a-zA-Z\é\è\-\ï]$/;
    let prenom = document.getElementById("prenom").value;
    let result = filtre.test(prenom);
    if (!result) {
        event.preventDefault();
        alert(" Prenom non valide !");
    } else {
        console.log(prenom);
    }
}

document.getElementById("submit").addEventListener("click", testnom);
document.getElementById("submit").addEventListener("click", testprenom);
document.getElementById("submit").addEventListener("click", testcode);
document.getElementById("submit").addEventListener("click", testmail);