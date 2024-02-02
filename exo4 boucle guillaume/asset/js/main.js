let nbre1 =parseInt (prompt("merci de saisir un nbre1"));
let nbre2 = parseInt (prompt("merci de saisir un nbre2"));
let somme = 0;
// l'index i va etre initialisé avec nb1+1(ex si j'ai mis 7 il va commercer à 8)
for(let i= parseInt(nbre1+1); i< parseInt(nbre2);i++) {
    somme= somme+ i; 
}
alert(somme);
alert("la somme de tous les entiers entre " + nbre1 + " et " + nbre2 + " est égale à "+ parseInt(somme));