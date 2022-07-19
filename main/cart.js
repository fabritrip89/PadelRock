let label = document.getElementById("label");

let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

/**Aca se calcula el total de los items seleccionados*/

let calculation = () => {
  let cardIcon = document.getElementById("cantidad");
  cardIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
  if (basket.lenght !== 0) {
    return (ShoppingCart.innerHTML = basket.map((x) => {
      return `
<div className="cart-item"> hello</div> 
`;
    }));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = ` 
   <h1> El carrito esta vacio </h1>   
   <a href="index.html">
   <button class="HomeBtn">Regresar al Inicio</button>
   </a>   
    `;
  }
};

generategenerateCartitems();
