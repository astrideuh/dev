fetch("margot-robbie.json")
    .then(response=> response.json()
    
    ) 
    .then((data)=>{
        console.log(data);
        createActor(data);
    }
    )
    function createActor(_data){
        let actorName=document.querySelector(".actor-name");
        let actorPicture=document.querySelector(".actor-picture");
        let actorMovies=document.querySelector(".actor-movies");

        actorName.innerHTML=_data.firstname+" "+_data.lastname;
        actorPicture.src=_data.picture;
       
        let moviesList="";
        for(i=0;i<_data.movies.length;i++){
            let movies=_data.movies[i];
            moviesList+="<li>"+movies.name+"|"+ movies.year+ "</li>";
        }
        actorMovies.innerHTML=moviesList;


    }

