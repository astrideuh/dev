let H= parseInt(prompt("merci de saisir l'heure"));
let minute= parseInt(prompt("merci de saisir les minutes"));
let seconde=parseInt(prompt("merci de saisir les secondes"));
seconde=seconde+1;
minute= minute+1;

if(seconde==60){seconde=0; 
    minute++;
    minute==60;
    minute=0;
    H++};
if(H==24){H=0};

alert("dans une minute il sera "+H+ "H"+minute+ "min" +seconde+ "s" );

