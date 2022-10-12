const express = require('express');
const ig = require('instagram-node').instagram();

// creamos la app con express
var app = express();

// especificamos a node la ruta
app.use(express.static(__dirname + '/public'));

// especificamos que utilizaremos ejs como motor de vistas
app.set('view engine', 'ejs');

// creamos la ruta
app.get('/', function (req, res) {

  // aqui configuraremos la app de ig con un access_token
  res.render('pages/index');
});


// especificamos el puerto
app.listen(8080);
console.log('Escuchando en el puerto 8080');
