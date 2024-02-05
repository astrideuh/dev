let prixHT= parseInt(prompt("merci de saisir le prixHT"));
let nbrearticles= parseInt(prompt("merci de saisir le nombre d'articles"));
let tauxTVA  = parseInt (prompt("merci de saisir un taux de TVA"));




prixTTC=((prixHT*nbrearticles)*(tauxTVA/100))+(prixHT*nbrearticles);
alert(prixTTC);