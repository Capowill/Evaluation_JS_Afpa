// Exercice 6 JS Eval


// TABLEAU imposé
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
console.log(tab);


function tableau()
    {

        var i = 0;
        var name = prompt("Saisissez un prenom lister dans le tableau : "+"\n" +tab);

        if(tab.includes(name))
        {
            tab.splice(tab.indexOf(name), 1);  
            tab[tab.length] = ""; // ajoute une case vide a lla fin du tableau
        }

        console.log(tab);
    }
tableau();