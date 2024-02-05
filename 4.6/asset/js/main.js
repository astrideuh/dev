
let candidat1 = prompt("merci de saisir le taux du candidat1");
let candidat2 = prompt(" merci de saisir le taux de candidat2");
let candidat3 = prompt("merci de saisir le taux de candidat3");
let candidat4 = prompt("merci de saisir le taux de candidat4");

if (candidat1 > 50 || candidat2 < 50 || candidat3 < 50 || candidat4 < 50) {
    alert("candidat1 elu au 1er tour");}

else if(candidat1 > candidat2 && candidat1 > candidat3 && candidat1 > candidat4){
alert("candidat est en ballotage favorable");}


if (candidat1 > 12.5 && candidat1 > candidat2 && candidat1 > candidat3 && candidat1 > candidat4){
    alert("candidat en ballotage defavorable");}
else if(candidat1<12.5){
alert("battu");}



