/* V 1.0*/
/*
N = parseInt( prompt("Entrez un nombre :"));
var N = N+1; //nombre

while (N-- > 1) {
    somme = N+N;
    console.log("Somme = "+somme);
    console.log(N + "\n"); // \n = retour a la ligne
}
*/
//  var som = som + N;
/*============================================================*/
/* V 2.0 */

N = parseInt( prompt("Entrez un nombre :"));
var N ; //nombre
var som = 0;

while (N > 1) {
    --N;
    console.log(N + "\n"); // \n = retour a la ligne
    som = som + N;
}
console.log("Somme = "+som);
alert("Somme = "+som); 