function saludo(){
  alert("HOLA");
}


function cambiarColor(){
  var body = document.getElementsByTagName('body');
  var boton = document.getElementById('btnc');
  body[0].style.backgroundColor = boton.value;
}

function cambiarFondo(elemento){
  document.getElementsByTagName('body')[0].style.backgroundColor=elemento.value;
}

function reloj(){
  var time = setInterval(mostrar, 1000);
  function mostrar(){
    var d = new Date();
    document.getElementById('time').innerHTML ="<b>"+d.toLocaleTimeString()+"</b>";
  }

}
var num = 5;
function temporizador(){
  alert();
  var temp = setInterval(temporiza, 1000);
  function temporiza(){
    if(num==0){
      alert("SU tiempo ha expirado");
      clearInterval(temp);
      reset();
    }
    document.getElementById("tempo").innerHTML=num;
    num--;

  }

}
function reset(){
  num=5;
}
