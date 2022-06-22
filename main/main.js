

const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
const storieitems = document.getElementById ("contenedorPaletas")
const product = document.querySelectorAll(".product")
const pname =document.getElementsById("nombrePaleta")

/* for (var i=0; i <pname.length; i++){
    let match = product [i] getElementsById('nombrePaleta')[0];
}
 */
if(match){
   let textvalue = match.textContent || match.innerHTML

if(textvalue.toUpperCase().indexof(searchbox) > -1){
    product [i].style.display = "";

}else{
    product [i].style.display = "none";
}

}

};
