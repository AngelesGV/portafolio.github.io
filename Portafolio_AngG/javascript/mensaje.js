const alerta = document.querySelector(".fondo-negro-mensaje");

window.addEventListener('load', redireccionar)

function nueva_ventana(){
    window.location.href = "http://127.0.0.1:5500/Portafolio_AngG/";
}  

function redireccionar(){
    setTimeout(nueva_ventana, 4000);
}