let valeurs = parseInt(prompt("merci de saisir le nombre de valeurs dans le tableau"))
let tableau = new Array(valeurs)
let notes = 0;
let moyenne = 0;
let somme = 0;
let result = 0;
let lenght = tableau.length;
nombresupM = 0;


for (i = 0; i < tableau.length; i++) {
    tableau[i] = parseFloat(prompt("merci de saisir les notes"));
    somme += tableau[i]



}
alert(somme)

result = somme / lenght
alert(result)

for (i = 0; i < tableau.length; i++) {

    if (tableau[i] > result) {
        nombresupM++
    }
}

alert("il y a " + nombresupM + " ")

