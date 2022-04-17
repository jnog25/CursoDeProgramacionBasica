var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var j = 0
    var xi, yf, xf, yi;
    var colorcito = "#AAF";
    var espacio = ancho / lineas

    while(l < lineas)
    {
        xi = espacio * l;
        yf = espacio * (l + 1); 

        dibujarLinea(colorcito, xi, 0, 300, yf);
        l = l + 1
    }

    dibujarLinea(colorcito, 1, 1, 299, 1);
    dibujarLinea(colorcito, 299, 1, 299, 299);
}