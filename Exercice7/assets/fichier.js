// Exercice 7 JS eval



/* ADRESSE MAIL  */
function testmail() {
    // let filtre = /[@]{1}/; mode no friendly
    let filtre = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
    let mail = document.getElementById("email").value;
    let result = filtre.test(mail);
    let errormail = document.getElementById("errorMail");
    if (!result) {
        event.preventDefault();
        console.log("Email non valide, comprenant au moins '@'");
        errormail.innerHTML = "Champs obligatoire *";
        errormail.style.color = "red";
    } else {
        console.log(mail);
        errormail.innerHTML = "Champs valide";
        errormail.style.color = "green";
    }
};

/* CODE POSTAL */
function testcode() {
    let filtre = /^[0-9]{5}$/;
    let code = document.getElementById("code").value;
    let result = filtre.test(code);
    let errorpost = document.getElementById("errorPostal");
    if (!result) {
        event.preventDefault();
        console.log("Code postal incorrect !");
        errorpost.innerHTML = "Champs obligatoire *";
        errorpost.style.color = "red";
    } else {
        console.log(code);
        errorpost.innerHTML = "Champs valide";
        errorpost.style.color = "green";
    }
}

/* NOM */
function testnom() {
    let filtre = /[a-zA-Z\é\è\-\ï\ë\î]$/;
    let nom = document.getElementById("nom").value;
    let result = filtre.test(nom);
    let errorNom = document.getElementById("errorNom");
    if (!result) {
        event.preventDefault();
        console.log("Nom  non valide !");
        errorNom.innerHTML = "Champs obligatoire *";
        errorNom.style.color = "red";
    } else {
        console.log(nom);
        errorNom.innerHTML = "Champs valide";
        errorNom.style.color = "green";
    }
}

/*  PRENOM */
function testprenom() {
    let filtre = /[a-zA-Z\é\è\-\ï\ë\î]$/;
    let prenom = document.getElementById("prenom").value;
    let result = filtre.test(prenom);
    let errorPrenom = document.getElementById("errorPrenom");
    if (!result) {
        event.preventDefault();
        console.log(" Prenom non valide !");
        errorPrenom.innerHTML = "Champs obligatoire *";
        errorPrenom.style.color = "red";
    } else {
        console.log(prenom);
        errorPrenom.innerHTML = "Champs valide";
        errorPrenom.style.color = "green";
    }
}

function testdate(){
    let filtre = /[0-9]{2}$\/[0-9]{2}$\/[0-9]{4}$/; // resultat 00/00/0000
    let naissance = document.getElementById("naissance").value;
    let result = filtre.test(naissance);
    let errorDate = document.getElementById("errordate");
    if (!result) {
        event.preventDefault();
        console.log("Date de naissance non valide !");
        errorDate.innerHTML = "Champs obligatoire *";
        errorDate.style.color = "red";
    } else {
        console.log(nom);
        errorDate.innerHTML = "Champs valide";
        errorDate.style.color = "green";
    }
}

document.getElementById("submit").addEventListener("click", testdate);
document.getElementById("submit").addEventListener("click", testnom);
document.getElementById("submit").addEventListener("click", testprenom);
document.getElementById("submit").addEventListener("click", testcode);
document.getElementById("submit").addEventListener("click", testmail);