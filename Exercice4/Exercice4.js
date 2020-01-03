// EXERCICE 4 Eval 

var age = 0;
var jeune = 0;
var moyen = 0;
var vieux = 0;

while (age < 100) 
    {
        age =  prompt("Age?");
        if (age < 20)
            jeune++;
        else if (age > 40)
            vieux++;
        else
            moyen++;
    }
console.log("Nombre de jeune : " + jeune + "\n"+ "Nombre de moyen : " + moyen +"\n"+ "Nombre de vieux : " + vieux);

