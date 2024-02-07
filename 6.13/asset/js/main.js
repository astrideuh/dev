let valeurs = parseInt(prompt("merci de saisir le nombre de valeurs du tableau"));
let tableau = new Array(valeurs);

let plusgrand=0;
let place = 0;


for (i = 0; i < tableau.length; i++) {
    let nombre = parseInt(prompt("merci de saisir les nombres dans le tableau"));
    if (plusgrand < nombre){
        plusgrand = nombre;
        place=i;
    }
}
    alert(+plusgrand+)
    alert(place)

