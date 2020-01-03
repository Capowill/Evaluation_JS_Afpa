// Exercice 7 JS eval


/* ADRESSE MAIL  */
function    testmail()
{
    var filtre = /[@]{1}/;
    var mail = document.getElementById("email").value;
    var result = filtre.test(mail);
    if(!result)
    {
        alert("Email non valide, comprenant au moins '@'");
    }
    else
    {
        console.log(mail);
    }
};


/* CODE POSTAL */

function testcode()
{
    var filtre = /^[0-9]{5}$/;
    var code = document.getElementById("code");
    var result = filtre.test(code);
    if(!result)
    {
        alert("Code postal incorrect ! saisir Exemple : 80100")
    }
    else
    {
        console.log(code);
    }
}



document.getElementById("submit").addEventListener("click", testmail);
document.getElementById("submit").addEventListener("click", testcode);
