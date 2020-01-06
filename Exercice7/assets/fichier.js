// Exercice 7 JS eval


/* ADRESSE MAIL  */
function testmail() {
    // var filtre = /[@]{1}/; mode no friendly
    var filtre = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
    var mail = document.getElementById("email").value;
    var result = filtre.test(mail);
    if (!result) {
        alert("Email non valide, comprenant au moins '@'");
    } else {
        console.log(mail);
    }
};


/* CODE POSTAL */

function testcode() {
    var filtre = /^[0-9]{5}$/;
    var code = document.getElementById("code").value;
    var result = filtre.test(code);
    if (!result) {
        alert("Code postal incorrect ! saisir Exemple : 80100")
    } else {
        console.log(code);
    }
}

/* NOM */

function testnom() {
    var filtre = /[a-zA-Z]$/;
    var nom = document.getElementById("nom").value;
    var result = filtre.test(nom);
    if(!result){
        alert("Nom  non valide !");
    }
    else{
        console.log(nom);
    }

}

/*  PRENOM */

function testprenom() {
    var filtre = /[a-zA-Z]$/;
    var nom = document.getElementById("prenom").value;
    var result = filtre.test(nom);
    if(!result){
        alert(" Prenom non valide !");
    }
    else{
        console.log(nom);
    }

}

/* DATE DE NAISSANCE */

function testnaissance(){
    var filtre = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/; // resultat 00/00/0000
    var naissance = document.getElementById("naissance").value;
    var result = filtre.test(naissance);
    if(!result){
        alert("Date de naissance inconnu");
    }
     else{
         console.log(naissance);
     }   
}




document.getElementById("submit").addEventListener("click", testnom);
document.getElementById("submit").addEventListener("click", testprenom);
document.getElementById("submit").addEventListener("click", testnaissance);
document.getElementById("submit").addEventListener("click", testcode);
document.getElementById("submit").addEventListener("click", testmail);