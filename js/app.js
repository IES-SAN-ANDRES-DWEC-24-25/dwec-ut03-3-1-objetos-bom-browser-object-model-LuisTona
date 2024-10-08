// Author:  Carlos Tessier
// Version: 1.0
// Date:    2024/10/01

// variable ventana emergente
var myWindow;

// Variable para el  temporizador
var timer;
// Número de segundos transcurridos
var count = 0;

document.addEventListener("DOMContentLoaded", function () {
  // Variables botones
  const btnInfo = document.getElementById("btnInfo");
  const btnUrl = document.getElementById("btnUrl");
  const btnClose = document.getElementById("btnClose");

  const url = document.getElementById("inputUrl");
  const btnBack = document.getElementById("btnBack");
  const btnForward = document.getElementById("btnForward");
  const btnRedirection = document.getElementById("btnRedirection");
  const redirection = document.getElementById("redirection");
  // Añadido, comprobacion red
  const btnConexion = document.getElementById("btnConexion");

  // Añadir eventos click a los botones

  // Muestra la información del navegador
  btnInfo.addEventListener("click", function () {
    informacionNavegador();
  });

  // Redirecciona a la URL introducida en el input a la nueva ventana mywindow
  btnUrl.addEventListener("click", function () {

    // si la URL no está vacía, redireccionar a www.educa.jcyl.es"
    redirect(url.value);
  });

  // Cierra la ventana emergente mywindow
  btnClose.addEventListener("click", function () {
    myWindow.close()
  });

  // Retroceder en la historia del navegador
  btnBack.addEventListener("click", function () {
    history.back();
  });

  // Avanzar en la historia del navegador
  btnForward.addEventListener("click", function () {
    history.forward();
  });

  // Temoporizador
  btnStartTimer.addEventListener("click", function () {
    // Iniciar el temporizador timer cada segundo para poner en counter el valor de segundos transcurridos
    timer = setInterval(()=>{
      count += 1;
      document.getElementById('counter').textContent = count;
    },1000)
  });
  
  btnStopTimer.addEventListener("click", function () {
    // Detener el temporizador timer
    clearInterval(timer);
  });
  
  btnRedirection.addEventListener("click", function () {
    // avisar en el párrafo redirection que se va a redireccionar a www.educa.jcyl.es en 5 segundos
    redirectionPagina();    
  });

  btnConexion.addEventListener('click', function(){
    onLineFunction();
  });

  updateScreenSize();

});

// Funcion para comprobar el estado de la red
function onLineFunction(){
  const statusDisplay =  document.getElementById('status');
  
  if(navigator.onLine){
    statusDisplay.textContent = "Conectado";
    statusDisplay.classList.remove('offline');
  }else{
    statusDisplay.textContent = "Desconectado";
    statusDisplay.classList.add('offline');
  }
}

// Función para actualizar el tamaño de la pantalla
function updateScreenSize() {
  document.getElementById("width").textContent = window.innerWidth;
  document.getElementById("height").textContent = window.innerHeight;
}

// Evento de cambio de pantalla
// Si cambia el tamaño de la pantalla, llamamos de nuevo a la función updateScreenSize
window.onresize = updateScreenSize;

// mostrar la información del navegador en una ventana emergente
function informacionNavegador() {
  alert(
    'appCodeName: '+navigator.appCodeName+ '\n'+
    'appName: '+navigator.appName+ '\n'+
    'appVersion: '+navigator.appVersion+ '\n'+
    'buildID: '+navigator.buildID+ '\n'+
    'Idioma: '+navigator.language+'\n'+
    'pdfViewerEnabled: '+navigator.pdfViewerEnabled+'\n'+
    'oscpu: '+navigator.oscpu+'\n'+
    'platform: '+navigator.platform+'\n'+
    'userAgent: '+navigator.userAgent+'\n'+
    'product: '+navigator.product+'\n'
  );
}

// Función para redireccionar a una URL en una ventana nueva
function redirect(url) {
  if(url != ""){
    myWindow = window.open(url, '','popup');
  }else{
    myWindow = window.open('https://www.educa.jcyl.es', '', 'popup');
  }
}
// Función para redireccionar a la pagina de la junta
function redirectionPagina(){
  let tiempo;
  let abridor;
  let contador;
    contador = 4;
    
    redirection.textContent = `Se le esta redireccionando a "www.educa.jcyl.es" 5 `;
    
    abridor = setInterval(()=>{
      window.open('https://www.educa.jcyl.es');
      
      clearInterval(abridor);
      clearInterval(tiempo);
      
      redirection.textContent = "";
    }, 5000);

    tiempo = setInterval(()=>{
      redirection.textContent = `Se le esta redireccionando a "www.educa.jcyl.es" ${contador}`;
      contador -= 1;
    }, 1000);
}
