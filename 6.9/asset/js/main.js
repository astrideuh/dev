let valeurs=parseInt(prompt("merci de saisir un nombre de valeurs pour votre tableau"));
let tableau=new Array(valeurs);
let notes=0;
let somme=0;


for(let i=0;i<tableau.length;i++){
    tableau[i]=parseFloat(prompt("merci de saisir les notes"));
    somme+=tableau[i]
}
alert(somme)