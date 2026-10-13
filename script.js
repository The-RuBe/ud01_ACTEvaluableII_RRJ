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

function ejercicio4() {
    let contador = 30;
    const interval = setInterval(() => {
        window.getElementById("temporizador").textContent(contador);
        contador--;
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
    }, segundos * 1000);
}

function ejercicio5abrir() {
    window.open("https://example.com");
}

function ejercicio5cerrar() {
    window.close();
}

function ejercicio6() {
    const respuesta = window.confirm("¿Deseas cambiar el color de fondo?");
    let color = "A";
    if (respuesta) {
        color = window.prompt("¿Que color quieres?");
        if (color != "") {
            window.document.body.style.backgroundColor = color;
        }
    }
}

function ejercicio7() {
    let nombre = window.prompt("Introduce tu nombre: ");

    if (nombre != null && "") {
        window.alert("Bienvenido " + nombre);
    } else {
        window.alert("No se ha introducido un nombre.")
    }
}

function ejercicio8() {
    let ancho = window.innerWidth;
    if (ancho < 768) {
        window.alert("<<Ventana pequeña>>" + " El ancho es: " + ancho + "px");
    } else {
        window.alert("<<Ventana grande>>" + " El ancho es: " + ancho + "px");
    }
}