let tableau= new Array(9);
let notes=0;
let somme=0;
let length=tableau.length;
let result=0;

for(let i=0;i<tableau.length;i++){
tableau[i]=parseFloat(prompt("merci de saisir les notes"));
somme+=tableau[i]
}
alert(somme)


    
result=somme/length
alert(parseFloat(result.toFixed(1)));
