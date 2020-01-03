


var min = 0; // Valeur par defaut
var max = 0; // Valeur par defaut
var i = 1; // Valeur par defaut
var tot = 0; // totale
var N = parseInt(prompt("Entrez la valeur"));
while (N != 0) // different de 0
{
    tot += N;
    i++;
    N = parseInt(prompt("Entrez la valeur"));
    if (max < N)
        max = N;
    if (min > N && N != 0)
        min = N;
}
console.log("La moyenne est de : " + tot / i + "\nMax : " + max + "\nMin : " + min);