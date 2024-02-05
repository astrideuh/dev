let nbrePhotocopie=parseInt(prompt("merci de saisir le nombre de photocopies"));
let prixtotalphotocopie=0;


if(nbrePhotocopie<=10){
prixtotalphotocopie=nbrePhotocopie*10;
}

else if(nbrePhotocopie>10 && nbrePhotocopie<=30){
prixtotalphotocopie=1+(nbrePhotocopie-10)*0.09;
}
else if(nbrePhotocopie>30){
prixtotalphotocopie=2.80+(nbrePhotocopie-30)*0.08;
}

alert("le prix total est de "+ prixtotalphotocopie+"");

