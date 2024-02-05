let age = parseInt(prompt("merci de saisir l'age"));
let genre = parseInt(confirm("etes-vous un homme?"));

if (age >= 20 && genre == true)
    alert("vous payez des impôts")
else if (genre == true && age < 20)
    alert("vous ne payez pas d'impots");

if (age >= 18 && age <= 35 && genre == false)
alert("les femmes paient des impôts")
else if (genre == false && age < 18 && age > 35);
alert("les autres ne paient pas d'impôts");

