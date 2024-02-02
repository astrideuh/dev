let nbre= parseInt (prompt("merci de saisir un nombre"));
let somme=0;
let compteurNbsaisis= 0;
let minimum=nbre;
let maximum=nbre;
// on va faire une boucle
while(nbre!=0){
        compteurNbsaisis++;
        somme=somme+nbre;
        nbre=parseInt(prompt("saisissez un nombre"));
        if (nbre<minimum){
            // dans ce cas, on remplace mini par le nb précédemment saisi
        minimum=nbre
        }

        if (nbre>maximum){
            // dans ce cas on remplace mini par le nombre précédemment saisi
            maximum=nbre;
        }
        
    }

alert("la somme est égale à " + parseInt(somme));
alert("la moyenne est égale à"  + parseFloat(somme/compteurNbsaisis));
alert("la note minimum est" +(minimum));
alert("la note maximum est" +(maximum));
