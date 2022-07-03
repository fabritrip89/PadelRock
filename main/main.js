/* const { name } = require("ci-info");

const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeItems = document.getElementById("contenedorPaletas");
  const product = document.querySelectorAll(".product");
  const pname = storeItems.getElementsByTagName("h2");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
}; */

/* const { x } = require("tar"); */

let contenedorPaletas = document.getElementById("contenedorPaletas");

// Aca modificar precios, nombre, id, descuentos, descripcion, etc...

let shopItemsData = [
  {
    id: "bourne", // ID de Stock
    name: "Varilon Bourne", //Nombre
    price: 50.0, // Precio
    desc: "lorem", // Descripccion
    img: "../img/bourne.png",
    discount: 20, // Descuento
    offer: 12, // Cuotas
  },
  {
    id: "asd",
    name: "Varilon sie7e",
    price: 500.0,
    desc: "lorem",
    img: "../img/paletaVarilon.png",
    discount: 17,
    offer: 3,
  },
  {
    id: "asdsad",
    name: "Varilon Cañon",
    price: 300.0,
    desc: "lorem",
    img: "../img/canonFrente.png",
    discount: 21,
    offer: 6,
  },
  {
    id: "asdsada",
    name: "Varilon Avant",
    price: 650.0,
    desc: "lorem",
    img: "../img/varilonAvant.png",
    discount: 15,
    offer: 3,
  },
];

let basket = JSON.parse(localStorage.getItem("data")) || [];



let generateContenedorPaletas = () => {
  return (contenedorPaletas.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img, discount, offer } = x;
      let search = basket.find((y) => y.id === id) || [];
      return ` 
    <div id=product-id-${id} class="product">
    <table class="table table-dark table-sm">
        <td><span> ${discount}%  OFF </span></td>
    </table>

    <a href="../pages\pala1.html">
        <img src=${img} alt="Paleta Nox" /></a>
    <h4 class="nombrePaleta"> ${x.name}</h4>
    <div  class="masOmenos">
        <i onclick="increment(${id})"class="bi bi-plus-lg"></i>
        <div id=${id} class="cantidad">
        
        ${search.item === undefined ? 0 : search.item}
        </div>
        <i onclick="decrement(${id})"class="bi bi-dash"></i>
    </div>

    <div class="cuotasSinteres">
        <strong> ${x.offer}  Cuotas sin Interés </strong>
    </div>
    <div class="precio">$ ${x.price} </div>
</div>

    `;
    })
    .join(""));
};

generateContenedorPaletas();

//Incrementar o decrecer N de articulos en el carrito

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

/**Se utiliza para decrecer la selección de productos  */

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};

/**Aca se actualizan los elemenos seleccionads de cada producto */

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

/**Aca se calcula el total de los items seleccionados*/

let calculation = () => {
  let cardIcon = document.getElementById("cantidad");
  cardIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
