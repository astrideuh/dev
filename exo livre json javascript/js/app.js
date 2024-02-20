let booksList = new Array();
let authorsList = new Array();
let categorieslist = new Array();

document.addEventListener("DOMContentLoaded", jSonOnLoad);

let selectAuthors = document.getElementById("listAuthors");
selectAuthors.addEventListener("change", ChargeByAuthor)

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

    }
    booksList.sort();// on va trier par ordre alphabétique
    authorsList.sort();
    console.log(authorsList);

    // on veut faire apparaitre authorsList dans ma liste d'auteurs
    for (let index = 0; index < authorsList.length; index++) {
        // ici je veux tous les auteurs, je refais une boucle sur chacun des auteurs et sur chacun des auteurs , je vais créer
        const element = authorsList[index];
        let option = document.createElement("option");//je veuc créer un élément sur mon select, on va créer une option 
        option.value = element;
        option.innerText = element;// on veut qu'il soit affiché
        selectAuthors.appendChild(option);
    } // vous ferez la même chose pour la categorie
    showBooks(booksList);
}

function showBooks(_data) {
    let booklistElement = document.getElementById("booksList");
    booklistElement.innerHTML = "";// quand on appelle cette fonction, on la remet à vide car sinon cela affiche toutes les balises
    for (let index = 0; index < _data.length; index++) {// pour créer des cards pour chaque élement, boucle
        const book = _data[index];
        // on va créer un élément div et on ajoute la class card avec le setattribute

        let bookElement = document.createElement("div");
        bookElement.setAttribute("class", "card mb-4");// margin bottom


        let titre ="";//
        if(book.title.length>20){
        titre=book.title.substring(0,20)+"(...)";}// on extrait une chaine de caractère 
          else{book.title
        }
        let description;
        let descriptionShort;

        if(book.shortDescription==null|| book.shortDescription==undefined){
            description="";
            descriptionShort="";
        }else{
if(book.shortDescription.length>20){
    descriptionShort=book.shortDescription.substring(0,20)+"(...)";
    description=book.shortDescription;
}else{
    descriptionShort=book.shortDescription;
    description=book.shortDescription;
}
        }

        // on crée une fonction si titre supérieur à 20 caractères, alors on mettra 3 petits points et parentheses
        
            bookElement.innerHTML = "<h1>" + titre + "</h1>";
            if(description!=""){
                bookElement.innerHTML+="<h4> <span class='infobulle' title='"+ descriptionShort +"'>"+ description+
                "</span> </h4>";
            }

            


        booklistElement.appendChild(bookElement);// pour ajouter dans le  bookelement
    }}


function ChargeByAuthor() {

}

