
let valeurs=parseInt(prompt("merci de saisir le nombre de valeurs dans le tableau "));
let tableau=new Array(valeurs);
let nombrep=0;
let nombren=0;
let tableau2=[];

// for(let i=0;i<tableau.length;i++)

// {
    // tableau[i]=parseInt(prompt("merci de saisir les nombres"));
//    if (tableau[i]>0){
//         nombrep++
//     }
// else{
//     nombren++
    
// }
// }


// alert(tableau2)
// alert("il y a "+nombrep+" nombre positifs et "+nombren+" nombres négatifs");*/



for(let i=0;i<tableau.length;i++){
    tableau[i]=parseInt(prompt("merci de saisir les nombres"));
    tableau2.push(tableau[i]+1)
    }
    alert(tableau2)