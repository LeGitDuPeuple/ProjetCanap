

// // localStorage.clear();

// // on recupere l'objet dans le local storage
// const canapInfo = localStorage.getItem("canapInfo");
// console.log(canapInfo);

// // on transforme le json en javascript utilisable
// const canapParse = JSON.parse(canapInfo);
// console.log(canapParse);

// const div = document.getElementById("cart__items");

// const totalQuantity = document.getElementById("totalQuantity");


// const totalPrice = document.getElementById("totalPrice");


// const btnSupprimer =  document.querySelector(".deleteItem");



// // function updateTotal() {
// //   let totalQty = 0;
// //   let totalCost = 0;
  
// //   for (let i = 0; i < canapParse.length; i++) {
// //     totalQty += canapParse[i].quantity;
// //     totalCost += canapParse[i].price * canapParse[i].quantity;
// //   }
  
// //   totalQuantity.innerHTML = totalQty;
// //   totalPrice.innerHTML = totalCost + "€";
// // }

// // function updateQuantite () {
// //   if (canapParse[i].quantity ++ || --){
// //     const btnQuentity = document.querySelector(".itemQuantity")
    
// //     canapParse[i].quantity = btnQuentity.value
    
// //   }
// // }

// fetch

// for(let i = 0; i < canapParse.length; i++) {
  
//   html = `
//   <article class="cart__item" data-id="${canapParse[i]._id}" data-color="${canapParse[i].colors}">
//   <div class="cart__item__img">
//   <img src="${canapParse[i].imageUrl}" alt="Photographie d'un canapé">
//   </div>
//   <div class="cart__item__content">
//   <div class="cart__item__content__description">
//   <h2>${canapParse[i].name}</h2>
//   <p>${canapParse[i].color}</p>
//   <p>${canapParse[i].price}€</p>
//   </div>
  
//   <div class="cart__item__content__settings">
//       <div class="cart__item__content__settings__quantity">
//       <p>Qté : </p>
//       <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${canapParse[i].quantity}">
//       </div>
//       <div class="cart__item__content__settings__delete">
//       <p class="deleteItem">Supprimer</p>
//       </div>
//       </div>
//       </div>
//       </article>  `
//       div.innerHTML += html;
//     }
    
    
//     fusionPrix1 = canapParse.map((index) => {
//       return {
//         price : index.price,  
       
        
//       }
  
//     })
    
//     let TotalPrix = fusionPrix1.reduce((accumulateur, current) => {
//       return accumulateur + current.price 
//     }, 0)
    
//     totalPrice.innerHTML += TotalPrix
    
                // updateTotal();

                
      //           const btnNombre = document.querySelectorAll(".itemQuantity")
      //           console.log(btnNombre);
                
      //           const suprBtn = document.querySelectorAll('.deleteItem');
                
      //           suprBtn.forEach(button => {
      //             button.addEventListener("click", () => {
      //               // Trouver l'élément parent de l'article
      //   const cartItem = button.closest(".cart__item");
      //   const productId = cartItem.dataset.id;
        
      //   cartItem.remove()
      //   // Supprimer l'article du DOM
      //   if( cartItem.remove()) {
      //   localStorage.removeItem(cartItem)
      //  }
       
       
      //  // Supprimer l'article de localStorage
      //  // Il est supposé que les articles sont stockés dans un tableau nommé "canapInfo"
      //  let canapInfo = JSON.parse(localStorage.getItem("canapInfo"));
      //  canapInfo = canapInfo.filter(data=> !(data._id === productId && item.colors === productColor));
      //  localStorage.setItem("canapInfo", JSON.stringify(canapInfo));
       
      //  // Mettre à jour l'affichage du total des articles et du prix
  //      updateTotal();
  //   });
  // });
  
  
  
  
  
  
  // html2 = `${canapParse.length}`
  // totalQuantity.innerHTML += html2





  // if quantité -- ou ++ alors quantity de canap parse = quantité .value

  // localStorage.clear();

// on recupere l'objet dans le local storage
const canapInfo = localStorage.getItem("canapInfo");
console.log(canapInfo);

// on transforme le json en javascript utilisable
const canapParse = JSON.parse(canapInfo);
console.log(canapParse);

const div = document.getElementById("cart__items");

const totalQuantity = document.getElementById("totalQuantity");

const totalPrice = document.getElementById("totalPrice");

// variable pour les regex 

const inputFirstName = document.getElementById("firstName");
console.log(inputFirstName);

const inputLastName = document.getElementById("lastName");
console.log(inputLastName);

const inputAddresse = document.getElementById("address");
console.log(inputAddresse);

const inputCity = document.getElementById("city");
console.log(inputCity);

const inputMiel = document.getElementById("email");
console.log(inputMiel);

const btnCommander = document.getElementById("order");
console.log(btnCommander);
// Vider le contenu initial de div pour éviter l'accumulation
div.innerHTML = "";

// Générer le contenu du panier
for (let i = 0; i < canapParse.length; i++) {
  const html = `
    <article class="cart__item" data-id="${canapParse[i].id}" data-color="${canapParse[i].color}">
      <div class="cart__item__img">
        <img src="${canapParse[i].imageUrl}" alt="Photographie d'un canapé">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${canapParse[i].name}</h2>
          <p>${canapParse[i].color}</p>
          <p>${canapParse[i].price}€</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${canapParse[i].quantity}">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>
    </article>`;
  div.innerHTML += html;
}

// Calculer le total des quantités et des prix
const total = canapParse.reduce((accumulator, currentValue) => {
  accumulator.quantity += currentValue.quantity;
  accumulator.price += currentValue.price * accumulator.quantity;
  return accumulator;
}, { quantity: 0, price: 0 });

let htmlTotalQuantity = `${total.quantity}`;
totalQuantity.innerHTML += htmlTotalQuantity;

let htmlTotalPrice = `${total.price}`;
totalPrice.innerHTML += htmlTotalPrice;

// Ajouter les écouteurs d'événements pour la suppression et la mise à jour des quantités
document.querySelectorAll(".deleteItem").forEach((button, index) => {
  button.addEventListener("click", () => {
    canapParse.splice(index, 1);
    localStorage.setItem("canapInfo", JSON.stringify(canapParse));
 
    // Rafraîchir la page pour refléter les changements
    location.reload();
  });
});


// Mise à jour des prix lors du chngement de quantité
document.querySelectorAll(".itemQuantity").forEach((input, index) => {
  input.addEventListener("change", (e) => {
    const nouvelleQuantity = parseInt(e.target.value);
   
    if (nouvelleQuantity > 0 && nouvelleQuantity <= 100) {
      canapParse[index].quantity = nouvelleQuantity;
      localStorage.setItem("canapInfo", JSON.stringify(canapParse));
      location.reload(); 
    } 
    else {
      alert(" Veuillez sélectionner une quantité entre 1 et 100.");
    }
  });
});



// regex


inputFirstName.addEventListener("input", () => {
  const firstNameErrorMsg = document.getElementById("firstNameErrorMsg")
  console.log(firstNameErrorMsg);

  // Le .match sert a vérifier si le c ontenu de l'input match avec la regex en question. 
  //La regex stipule que seul les lettres (maj et/ou min) sont autorisé dans l'input

  if (inputFirstName.value.match(/^[A-Za-z-]+$/)) {
firstNameErrorMsg.textContent = ""
  }
   else {
  // Ce code affiche un message d'erreur si l'input contient des caractères autres que des lettres majuscules, des lettres minuscules et un"-".
    firstNameErrorMsg.textContent = "Erreur : Seules les lettres sont autorisées dans ce champ.";
  }
})

inputLastName.addEventListener("input", () => {
  const lastNameErrorMsg = document.getElementById("lastNameErrorMsg")
  console.log(lastNameErrorMsg);

  if (inputLastName.value.match(/^[A-Za-z-]+$/)) {
    lastNameErrorMsg.textContent = "";
  }
  else {
    lastNameErrorMsg.textContent = "Erreur : Seules les lettres sont autorisées dans ce champ.";
  }
  
})

inputAddresse.addEventListener("input", () => {
  const addressErrorMsg = document.getElementById("addressErrorMsg")
  console.log(addressErrorMsg);

  if(inputAddresse.value.match(/^[A-Za-z0-9\s]+$/)){
    addressErrorMsg.textContent = ""
  }
  else {
    addressErrorMsg.textContent = " Erreur : Seules les lettres, les chiffres et les espaces sont autorisés dans ce champ;"
  }
})

inputCity.addEventListener("input", () => {
  const cityErrorMsg = document.getElementById("cityErrorMsg")
  console.log(cityErrorMsg);

  if(inputCity.value.match(/^[A-Za-z ]+$/)) {
    cityErrorMsg.textContent = "";
  }
  else {
    cityErrorMsg.textContent = "Erreur : Seules les lettres sont autorisées dans ce champ.";
  }
})

inputMiel.addEventListener("input", () => {
  const emailErrorMsg = document.getElementById("emailErrorMsg")
  console.log(emailErrorMsg);

  if (inputMiel.value.match(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/)) {
   emailErrorMsg.textContent = "";
  }
  else {
    emailErrorMsg.textContent = "Erreur : Veuillez entrer une adresse e-mail valide"
  }
})

btnCommander.addEventListener("click", () => {
  
})


