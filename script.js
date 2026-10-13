function ejercicio1() {
    window.document.getElementById("url").textContent = window.location;
    window.document.getElementById("nombre").textContent = window.navigator.userAgent;
    window.document.getElementById("ancho").textContent = window.screen.availWidth;
    window.document.getElementById("alto").textContent = window.screen.availHeight;
    window.document.getElementById("idioma").textContent = window.navigator.language;
}

ejercicio1();

function ejercicio2() {
    window.alert("El ancho de la ventana es " + window.screen.width + " y la altura es " + window.screen.height + ", y el ancho visible es " + window.innerWidth + " y la altura visible es " + window.innerHeight);
}

function ejercicio3volver() {
    window.history.back();
}

function ejercicio3reload() {
    window.location.reload();
}