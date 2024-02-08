

function calculAge(anneeNaiss){
    let d = new Date();
    return d.getFullYear()-anneeNaiss;
}

let age1= calculAge(1980);
alert("cette personne a "+age1);
let age2=calculAge(1995);
alert("cette personne a "+age2);
let age3=calculAge(1986);
alert("cette personne a "+age3);
