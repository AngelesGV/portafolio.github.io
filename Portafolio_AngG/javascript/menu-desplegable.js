const btn_menu = document.querySelector('.icono-menu');
const menu_desplegable = document.querySelector('.cont-menu-principal');
var estado_menu = 'cerrado';
var tamaño = 'escritorio';


let condicion_ventana = window.matchMedia('( max-width: 769px )');
let condicion_ventana_escritorio = window.matchMedia('( min-width: 770px )');

console.log(condicion_ventana);

window.addEventListener('load', estado_ventana);

if(condicion_ventana_escritorio.matches){
    menu_desplegable.style.display = 'flex';
}


var estado_ventana = () => {
    if(condicion_ventana.matches){
        menu_desplegable.style.display = 'none';
        estado_menu = "cerrado";
        
    }else if(condicion_ventana_escritorio.matches){
        menu_desplegable.style.display = 'flex';
        estado_menu = "abierto";
    }
}

window.addEventListener('resize', estado_ventana);


btn_menu.addEventListener('click', () => {
    
    if(estado_menu == "cerrado"){
        menu_desplegable.style.display = 'flex';
        menu_desplegable.style.animation =  'slide .8s ease .1s backwards';
        estado_menu = "abierto";

    }else if(estado_menu == "abierto"){
        menu_desplegable.style.animation =  'slideCancel .8s ease .1s backwards';
        estado_menu = "cerrado";
        menu_desplegable.style.display = 'none';
    }else{
        menu_desplegable.style.display = 'none';
        estado_menu = "cerrado";
    }


});


const links = document.querySelectorAll(".nav-list-menu ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
