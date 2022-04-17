var dibujar = false;
var x = 0;
var y = 0;

var cuadrito = document.getElementById("area_de_dibujo");
var contexto = cuadrito.getContext("2d");


cuadrito.addEventListener("mousedown", e => {
    x = e.offsetX;
    y = e.offsetY;
    dibujar = true;
});

cuadrito.addEventListener("mousemove", e => {
    if(dibujar === true) {
        dibujarLinea(contexto, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

window.addEventListener("mouseup", e => {
    if (dibujar === true) {
        dibujarLinea(contexto, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        dibujar = false
    }
});

function dibujarLinea(contexto, x1, y1, x2, y2,) {
    contexto.beginPath();
    contexto.strokeStyle = "black";
    contexto.lineWidth = 5;
    contexto.moveTo(x1, y1);
    contexto.lineTo(x2, y2);
    contexto.stroke();
    contexto.closePath();
}