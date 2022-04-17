var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
    resultado.send("Este es el <strong>home</home>");
}

function cursos(peticion, resultado)
{
    resultado.send("Estos son los <strong>cursos</home>");
}

aplicacion.listen(8989);