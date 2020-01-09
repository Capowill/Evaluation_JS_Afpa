// JS EVAL EXERCICE 1 
/*
Exercice 1 : total d'une commande
A partir de la saisie du prix unitaire (PU) d'un produit et de la quantité commandée( QTECOM), afficher le prix à payer (PAP),
en détaillant le port (PORT) et la remise (REM), sachant que :

le (port) est gratuit si le prix des produits (TOT) est supérieur à 500 €. Dans le cas contraire, le port est de 2% de TOT
la valeur minimale du port à payer est de 6 €
la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà
Testez tous les cas possibles afin de vous assurez que votre script fonctionne. 
*/

var PU = parseInt(prompt("Saisissez le prix d'un produit"));
var QTECOM = parseInt(prompt("Saisissez la quantité"));
var TOT = PU * QTECOM;
var PORT = 0; /* Valeur par défaut */
var REM = 0; /* Valeur par défaut */
var PAP = 0;


if (TOT > 500) {
    PORT = 0;
    console.log("Port gratuit");
} else {
    PORT = TOT * 0.02;
    console.log("le prix est de : " + TOT);
}

/* Calcul de REM */
if (TOT >= 100 && TOT <= 200) {
    REM = (TOT * 0.05);
    console.log("REM = " + REM);
} else if (TOT < 100) {
    REM = 0;
    console.log("REM = " + REM);
} else {
    REM = TOT * 0.1;
}


// Calcul Prix a payer
PAP = TOT + PORT - REM;
alert("Le prix à payer est de : " + PAP);
console.log("Le prix à payer est de : " + PAP);

/* Calcul de PORT */
/*
if (TOT > 500) {
    PORT = 0;
    console.log("Port gratuit");
} else {
    PORT = TOT *0.02;
    console.log("le prix est de : "+TOT);
}
*/