let data;
let xhr = new XMLHttpRequest(); // creation de l'objet xmlHttpRequest
xhr.open("GET","movies.json"); // initialisation de notre requete

xhr.onload = function(){
    data = JSON.parse(xhr.response);
    console.log(data)
    
create(data);
}
xhr.send()


// table
function create(array){
    document.querySelector('#tbody').innerHTML = ""
    array.forEach(element => {
    let tr = document.createElement("tr");
    let poster= document.createElement("img");
    let titre = document.createElement("td");
    let realisateur = document.createElement("td");
    let date = document.createElement("td");
    let duree = document.createElement("td"); 
    let festival = document.createElement("td");
    let acteur = document.createElement("td")


    poster.setAttribute("src", element.Poster)
    poster.style.width = "100px"
    poster.append(element.Poster);
    titre.append(element.titre); 
    realisateur.append(element.réalisateur);
    duree.append(element.durée);
    date.append(element.année);
    festival.append(element.Festivals);
    acteur.append(element.Acteurs);


    tr.appendChild(poster);      
    tr.appendChild(titre);
    tr.appendChild(realisateur);
    tr.appendChild(duree);
    tr.appendChild(date);
    tr.appendChild(festival);
    const actorsList = document.createElement("ul");
        element.Acteurs.forEach(Acteurs=> {
            let li = document.createElement('li')
            let p = document.createElement('p');
            p.append(Acteurs.nom);
            p.append(Acteurs.prenom);
            p.append(Acteurs.nationalité);
            li.append(p)
            actorsList.append(li);
        })
        tr.append(actorsList)
    document.querySelector('#tbody').appendChild(tr)
});
}

// search

document.getElementById('search').onkeyup = function(){
    var search= document.getElementById("search").value;
    let datasearch = data.filter(function(a){
      return a.titre.toLowerCase().includes(search.toLowerCase());
    });
    create(datasearch)
}

// tri 

document.getElementById('Select').onchange=function(){
    var  select= document.getElementById('Select').value;
      if (select=="titre") {
      data =data.sort((a, b) => {
        let A = a.titre.toLowerCase();
        let B = b.titre.toLowerCase();
        if (A< B) {
            return -1
        }
        if (A>B) {
            return 1
        }
        if(A==B){
            return 0
        }
      });
      
      }
      else if (select=="Réalisateur"){
        data =data.sort((a, b) => {
            let A = a.réalisateur.toLowerCase();
            let B = b.réalisateur.toLowerCase();
            if (A< B) {
                return -1
            }
            if (A>B) {
                return 1
            }
            if(A==B){
                return 0
            }
          });
     
    }

    else if (select=="Durée"){
       data =data.sort((a, b) => {
            let A = a.durée.toLowerCase();
            let B = b.durée.toLowerCase();
            if (A< B) {
                return -1
            }
            if (A>B) {
                return 1
            }
            if(A==B){
                return 0
            }
          });
      
    } 
    else if (select=="Anné"){
        data =data.sort((a, b) => {
            let A = a.année;
            let B = b.année;
            if (A< B) {
                return -1
            }
            if (A>B) {
                return 1
            }
            if(A==B){
                return 0
            }
          });
    }else if (select=="Titre") {
        data =data.sort((a, b) => {
          let A = a.titre.toLowerCase();
          let B = b.titre.toLowerCase();
          if (A< B) {
              return 1
          }
          if (A>B) {
              return -1
          }
          if(A==B){
              return 0
          }
        });
        
        }
        else if (select=="Un Réalisateur"){
          data =data.sort((a, b) => {
              let A = a.réalisateur.toLowerCase();
              let B = b.réalisateur.toLowerCase();
              if (A< B) {
                  return 1
              }
              if (A>B) {
                  return -1
              }
              if(A==B){
                  return 0
              }
            });
       
      }
  
      else if (select=="grand durée"){
         data =data.sort((a, b) => {
              let A = a.durée.toLowerCase();
              let B = b.durée.toLowerCase();
              if (A< B) {
                  return 1
              }
              if (A>B) {
                  return -1
              }
              if(A==B){
                  return 0
              }
            });
        
      } 
      else if (select=="L'anné"){
          data =data.sort((a, b) => {
              let A = a.année;
              let B = b.année;
              if (A< B) {
                  return 1
              }
              if (A>B) {
                  return -1
              }
              if(A==B){
                  return 0
              }
            });
      }
    create(data)
}