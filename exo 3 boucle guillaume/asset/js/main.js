let nbre= prompt("merci de saisir un nombre");
let somme= 0;

for(let i = parseInt (nbre-1);i>=0;i--){
    somme+=i;
    //somme=somme + i;
}
alert(somme)
alert("la somme tous les entiers inférieur à " + nb + " est égale à "+parseInt (somme));