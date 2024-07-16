// Ici, l'url searchParams est utilisée pour récupérer l'ID dans l'URL de la page web. Ensuite, nous effectuons un appel API uniquement sur ce produit, ce qui nous permet d'obtenir plus d'informations.

const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get("id");
console.log(ID);

// Déclaration des variables contenant les sélecteurs des éléments HTML
// Ces éléments seront remplis dynamiquement avec les données de l'API

const imageProduit = document.querySelector(".item__img");
console.log(imageProduit);

const nomProduit = document.getElementById("title");
console.log(nomProduit);

const prixProduit = document.getElementById("price");
console.log(prixProduit);

const desProduit = document.getElementById("description");
console.log(desProduit);

const btn = document.getElementById("addToCart");
console.log(btn);

const select = document.getElementById("quantity");
console.log(select);

const couleurs = document.getElementById("colors");
console.log(couleurs);

const produitCarte = async () => {
  // Fonction asynchrone qui utilise fetch pour récupérer les informations du produit avec l'ID spécifié

  let url = "http://localhost:3000/api/products" + "/" + ID;
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // À l'aide de innerHTML, je remplis dynamiquement les informations en fonction de l'ID du produit.
   

      let html = ` <img src="${data.imageUrl}" alt="Photographie d'un canapé">`;
      imageProduit.innerHTML += html;

      let html2 = `${data.name}`;
      nomProduit.textContent += html2;

      let html3 = `${data.price}`;
      prixProduit.textContent += html3;

      let html4 = `${data.description}`;
      desProduit.innerHTML += html4;

      let html5 = data.colors.map(color => `<option value="${color}">${color}</option>`)
      document.getElementById("colors").innerHTML += html5;
      
      
      btn.addEventListener("click", () => {
        if (select.value < 1) {
          alert("veuillez sélectionner le nombre d'articles voulu");
        } else if (couleurs.value === "") {
          alert("veuillez sélectionner une couleur");
        } else {
          
          btn.addEventListener("click", () => {
            // Si l'objet n'existe pas, "storedData" sera "null"
            const storedData = localStorage.getItem("canapInfo");
            
            if (storedData) {
              array = JSON.parse(storedData);
            } 
            else {
              array = [];
            }
            
            // Ici on crer un l'objet que l'ont va envoyé dans le tableau avec l'ensemble des information voulue
            const productData = {
              id: ID,
              name: nomProduit.textContent,
              price: prixProduit.textContent,
              color: couleurs.value,
              quantity: parseInt(select.value),
              imageUrl: imageProduit.querySelector("img").src
            };
            
            // Le find index permet de verifier si il y a le meme ID et la meme couleur dans le tableau (on met un index qu'ont utilise ensuite) 

            const verifProduit = array.findIndex(item => item.id === ID && item.color === productData.color);

          //  ici, -1 indique que l'élément recherché n'a pas été trouvé dans le tableau.
           if (verifProduit !== -1) {
      // Produit déjà dans le panier, incrémenter la quantité
      array[verifProduit].quantity += productData.quantity;
    } else {
    
      // Donc ici si l'élément chercher n'est pas trouver dans le tableau, il est ajouter au panier
      array.push(productData);
    }

    // Convertir le tableau en chaîne JSON pour le stocker dans le local storage
    const jsonCanap = JSON.stringify(array);
    console.log(jsonCanap);
    
    // Enregistrer le tableau mis à jour dans le local storage
    localStorage.setItem("canapInfo", jsonCanap);
    
    if (localStorage.getItem("canapInfo")) {
      alert("Ajouté au panier");
    }
            
          });
        }
     
      });
      })
    .catch((erreur) => console.log("error", erreur));
};

produitCarte();







