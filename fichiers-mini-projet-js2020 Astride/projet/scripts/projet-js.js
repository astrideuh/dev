// projet JS 2020 - codez 
//Fonction pour surligner en jaune le texte du commentaire survolé

//Permet de récupérer l'entier en tête de la chaîne de caractère passée en paramètre
function getNumber(chaine) {
    let str = new String(chaine);
    let index = str.indexOf("-");
    let nbre = str.substring(0, index);
    return nbre;
}

// Fonction pour surligner en jaune le texte du commentaire survolé
function surligne(event) {
    const numeroCommentaire = getNumber(event.target.id);
    const annoteID = numeroCommentaire + "-annote";
    const annoteElement = document.getElementById(annoteID);
    if (annoteElement) {
        annoteElement.style.backgroundColor = "yellow";
    }
}

// Fonction pour rétablir la couleur d'arrière-plan initiale du texte annoté
function annulerSurlignage(event) {
    const numeroCommentaire = getNumber(event.target.id);
    const annoteID = numeroCommentaire + "-annote";
    const annoteElement = document.getElementById(annoteID);
    if (annoteElement) {
        annoteElement.style.backgroundColor = ""; // Rétablir la couleur d'arrière-plan par défaut
    }
}


document.addEventListener('DOMContentLoaded', function () {
//pour télécharger la page
    let aerer = document.querySelector('#addinnerspace');
//on selectionne les id aerer

    aerer.addEventListener('click', function () {
     const elementsP=document.querySelectorAll("p")
 // on met un ecouteur d'évenements pour tous les paragraphes
        elementsP.forEach(function(element) {
// pour chaque paragraphe, on ajoutera un padding de 5px
            element.style.padding=parseInt(element.style.padding || 0) + 5 + 'px';
    });
});
})

document.addEventListener('DOMContentLoaded', function () {

    let espace = document.querySelector('#addouterspace');


    espace.addEventListener('click', function () {
     const elementsP=document.querySelectorAll("p")
 
        elementsP.forEach(function(element) {

            element.style.padding=parseInt(element.style.wordSpacing || 0) + 5 + 'px';
    });
});
})



document.addEventListener('DOMContentLoaded', function (){
//element pour télécharger la page
    let toggle= document.querySelector('#toggle');
    let comment=document.querySelectorAll('.comment')


    toggle.addEventListener('click', function () {
            comment.forEach(function (comment) {
                if (comment.style.display === "none") {
                    comment.style.display = "block";
                    toggle.textContent = 'masquer';
                } else {
                    comment.style.display = "none";
                    toggle.textContent = 'afficher';
                }
            });
        });
    });


    
    


