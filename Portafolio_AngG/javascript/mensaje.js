const alerta = document.querySelector(".fondo-negro-mensaje");

window.addEventListener('load', redireccionar)

function nueva_ventana(){
    window.location.href = "https://angelesgv.github.io/Portafolio/Portafolio_AngG/index.html";
}  

function redireccionar(){
    setTimeout(nueva_ventana, 4000);
}