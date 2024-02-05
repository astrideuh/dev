let nombre1=prompt("merci de saisir un nombre1");
let nombre2=prompt("merci de saisir un nombre2");

if((nombre1>0 && nombre2>0)||(nombre1<0 && nombre2<0)){
alert("le produit est positif");
}
else if((nombre1<0 && nombre2>0) || (nombre1>0 && nombre2<0) )
alert("le produit est négatif");
else if(nombre2==0 || nombre1==0);
alert("le produit est nul");
