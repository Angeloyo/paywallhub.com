
function limpiarUrl(url) {
    let urlObj = new URL(url);
    return urlObj.origin + urlObj.pathname;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Botón 12ft
    document.getElementById('boton-12ft').addEventListener('click', function() {
        let urlActual = document.getElementById('inputtext').value;
        let urlLimpia = limpiarUrl(urlActual);
        let urlDestino = 'https://12ft.io/' + urlLimpia;
        window.open(urlDestino, '_blank');
    });
  
    document.getElementById('boton-internetarchive').addEventListener('click', function() {
        let urlActual = document.getElementById('inputtext').value;
        let urlLimpia = limpiarUrl(urlActual);
        let urlDestino = 'https://web.archive.org/' + urlLimpia;
        window.open(urlDestino, '_blank');
    });
  
    document.getElementById('boton-archiveis').addEventListener('click', function() {
        let urlActual = document.getElementById('inputtext').value;
        let urlLimpia = limpiarUrl(urlActual);
        let urlDestino = 'https://archive.ph/newest/' + urlLimpia;
        window.open(urlDestino, '_blank');
    });

    document.getElementById('boton-gcache').addEventListener('click', function() {
        let urlActual = document.getElementById('inputtext').value;
        let urlLimpia = limpiarUrl(urlActual);
        let urlDestino = 'https://webcache.googleusercontent.com/search?q=cache:' + urlLimpia;
        window.open(urlDestino, '_blank');
    });

  });
  