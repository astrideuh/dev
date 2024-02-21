let booksList = new Array();
let authorsList = new Array();
let categoriesList = new Array();
let options = {// on convertit date,
    weekday: "long",// on le veut en long day ( affichage)
    year: "numeric",
    month: "long",
    day: "numeric",
};

document.addEventListener("DOMContentLoaded", jSonOnLoad);

let selectAuthors = document.getElementById("listAuthors");
let selectCategories = document.getElementById("listCategories")
selectAuthors.addEventListener("change", ChargeByAuthor);
selectCategories.addEventListener("change", ChargebyCategory);

// on crée une fonction pour appeler à l'ouverture de la page,Json est conséquent, on mettra un événement DomcontentLoaded
function jSonOnLoad() {
    fetch("books.json")
        .then(response => {//une fois que notre fichier est chargé, on le convertir en json})
            return response.json()
        })
        .then(booksData => {
            console.log(booksData);
            CreateList(booksData);
        })
}

function CreateList(_data) {// on veut placer chaque livre dans booklist
    for (let i = 0; i < _data.length; i++) {
        let book = _data[i]// si on veut ajouter un élément à un tableau, on fait un push
        booksList.push(book);//
        console.log(book)
        for (let index = 0; index < book.authors.length; index++) {// dans chaque bouquin on a un authors
            const element = book.authors[index];
            console.log(element);// pour les auteurs qui apparaissent deux fois, on veut faire un push seulement si l'auteur est dejà dans le tableau
            if (authorsList.indexOf(element) == -1) {
                authorsList.push(element);
                // vous ferez la meme chose pour la categorie

            }  //on regarde si l'élément est présent dans le tableau 
        }


        for (let index = 0; index < book.categories.length; index++) {// dans chaque bouquin on a un authors
            const element = book.categories[index];
            console.log(element);// pour les auteurs qui apparaissent deux fois, on veut faire un push seulement si l'auteur est dejà dans le tableau
            if (categoriesList.indexOf(element) == -1) {
                categoriesList.push(element);
                // vous ferez la meme chose pour la categorie

            }  //on regarde si l'élément est présent dans le tableau 
        }


    }
    booksList.sort();// on va trier par ordre alphabétique
    authorsList.sort();
    console.log(authorsList);
    categoriesList.sort();


    // on veut faire apparaitre authorsList dans ma liste d'auteurs
    for (let index = 0; index < authorsList.length; index++) {
        // ici je veux tous les auteurs, je refais une boucle sur chacun des auteurs et sur chacun des auteurs , je vais créer
        const element = authorsList[index];
        let option = document.createElement("option");//je veuc créer un élément sur mon select, on va créer une option 
        option.value = element;
        option.innerText = element;// on veut qu'il soit affiché
        selectAuthors.appendChild(option);
    } // vous ferez la même chose pour la categorie



    // pour les categories
    for (let index = 0; index < categoriesList.length; index++) {
        const element = categoriesList[index];
        let option = document.createElement("option");//je veuc créer un élément sur mon select, on va créer une option 
        option.value = element;
        option.innerText = element;// on veut qu'il soit affiché
        selectCategories.appendChild(option);


    }

    showBooks(booksList);

}

;
//on veut faire apparaitre la catégorie dans la liste des catégories



function showBooks(_data) {
    let booklistElement = document.getElementById("booksList");
    booklistElement.innerHTML = "";// quand on appelle cette fonction, on la remet à vide car sinon cela affiche toutes les balises
    for (let index = 0; index < _data.length; index++) {// pour créer des cards pour chaque élement, boucle
        const book = _data[index];
        // on va créer un élément div et on ajoute la class card avec le setattribute

        let bookElement = document.createElement("div");
        bookElement.setAttribute("class", "col-2 card mb-4");// margin bottom


        let titre = "";//
        if (book.title.length > 20) {
            titre = book.title.substring(0, 20) + "(...)";
        }// on extrait une chaine de caractère 
        else {
           titre= book.title
        }
        let description;
        let descriptionShort;


        if (book.descriptionShort == null || book.shortDescription == undefined) {
            description = "";// s'il n' y a pas de description, on affiche rien
            descriptionShort = "";
        } else {
            if (book.descriptionShort.length > 20) {
                descriptionShort = book.shortDescription.substring(0, 20) + "(...)";
                description = book.shortDescription;
            } else {
                descriptionShort = book.shortDescription;
                description = book.shortDescription;
            }
        }
        let image;
        if (book.thumbnailUrl == null || book.thumbnailUrl == undefined) {
            image = "https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png";
        } else {
            image = book.thumbnailUrl;
        }







        // on crée une fonction si titre supérieur à 20 caractères, alors on mettra 3 petits points et parentheses
        bookElement.innerHTML = '<img class = "img-fluid" src="' + image + '"/>' +
            "<h1>" + titre + "</h1>";
        if (description != "") {
            bookElement.innerHTML += "<h4> <span class='infobulle' title='" + descriptionShort + "'>" + description +
                "</span> </h4>";
        }

        let datePubli;// on fait un try catch, si j'ai une erreur, date publi =pas de date de publication
        try {
            datePubli = new Date(book.publishedDate.dt_txt).toLocaleDateString("fr-FR", options)// on récupère le json avec le format
        } catch (error) {// on passe les options dans la fonction toLocaleDateString
            datePubli = "pas de date de publication";

        }
        bookElement.innerHTML += "<h4>" + datePubli + "</h4>";

let isbnbook=book.isbn;
isbn=book.isbn;
bookElement.innerHTML+="<h4>"+isbn+"</h4>";

let pagebook=book.pageCount;
pageCount=book.pageCount;
bookElement.innerHTML+="<h4>"+"<strong>nombre de page:</strong>"+pageCount+"</h4>" ;

        





        booklistElement.appendChild(bookElement);// pour ajouter dans le  bookelement


    }
}


function ChargeByAuthor() {
    // quand on clique sur un auteur
    let strAuthor = selectAuthors.options[selectAuthors.selectedIndex].text;// je vais regarder dans mon tableau// je vais regarder a l'index ce qui est selectionné.(quand on a crée l'option)
    // je vais créer une nouvelle liste
    let booksByAuthor = new Array();// on va vérifier si str Author est vide
    if (strAuthor == "") {
        showBooks(booksList)
    } else {
        // moi je veux vérifier afficher tous les livres qui ont le meme auteur, il faut que je regarde dans les livres ,je vais le pousser dans un nouveau tableau
        // on crée une boucle
        for (let index = 0; index < booksList.length; index++) {
            const element = booksList[index];
            if (element.authors.indexOf(strAuthor) != -1) {// s'il est pas présent je le pousse
                booksByAuthor.push(element);

            }
            
        }
        selectCategories.selectedIndex=0;
        showBooks(booksByAuthor) ;
    }

}
function ChargebyCategory(){
     // quand on clique sur une categorie
     let strCategory = selectCategories.options[selectCategories.selectedIndex].text;// je vais regarder dans mon tableau// je vais regarder a l'index ce qui est selectionné.(quand on a crée l'option)
     // je vais créer une nouvelle liste
     let booksByCategory = new Array();// on va vérifier si str categorie est vide
     if (strCategory == "") {
         showBooks(booksList)
     } else {
         // moi je veux vérifier afficher tous les livres qui ont le meme auteur, il faut que je regarde dans les livres ,je vais le pousser dans un nouveau tableau
         // on crée une boucle
         for (let index = 0; index < booksList.length; index++) {
             const element = booksList[index];
             if (element.categories.indexOf(strCategory) != -1) {// s'il est pas présent je le pousse
                 booksByCategory.push(element);
 
             }
            
         }
         selectAuthors.selectedIndex=0;// permet de remettre a zero l'autre select pour ne pas qu'il soit selectionné
         showBooks(booksByCategory);// montre moi les livres de la catégorie
     }


     }

