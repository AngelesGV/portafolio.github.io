const contador = document.getElementById("contador-textarea");
function countChars(obj){
    var maxLength = 570;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);
    
    contador.style.color = 'black';
    contador.style.fontWeight = 'normal';

    if(charRemain <= 0){

        contador.style.color = 'red';
        contador.style.fontWeight = 'bold';
        contador.innerHTML = '¡Tienes '+ charRemain + ' caracteres!.';
    }else if(charRemain == 570){
        contador.innerHTML = 'Max ' + charRemain + ' caracteres.';
    }else{

        contador.innerHTML = 'Quedan ' + charRemain + ' caracteres.';
    }
}