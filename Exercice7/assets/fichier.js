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
    var code = document.getElementById("code");
    var result = filtre.test(code);
    if (!result) {
        alert("Code postal incorrect ! saisir Exemple : 80100")
    } else {
        console.log(code);
    }
}

/* NOM PRENOM */

function testnom() {
    var filtre = /[a-zA-Z]+/;
    var nom = document.getElementById("nom");
    var result = filtre.teste(nom);
    if(!result){
        alert("Nom ou prenom non valide !");
    }
    else{
        console.log(nom);
    }

}

/* DATE DE NAISSANCE */

function testnaissance(){
    var filtre = /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/;
    var naissance = document.getElementById("naissance");
    var result = filtre.test(naissance);
    if(!resultl){
        alert("Date de naissance inconnu");
    }
     else{
         console.log(naissance);
     }   
}





document.getElementById("submit").addEventListener("click", testnaissance);
document.getElementById("submit").addEventListener("click", testnom);
document.getElementById("submit").addEventListener("click", testmail);
document.getElementById("submit").addEventListener("click", testcode);