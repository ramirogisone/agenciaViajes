//importar express
const express = require('express');
const routes = require('./routes');
const path = require('path');

//configurar express
const app = express();
//cargar las rutas
app.use('/', routes());
//habilitar pug
app.set('view engine', 'pug');
//añadir las vistas
app.set('views', path.join(__dirname, './views'));
//cargar carpeta estatica 'public'
app.use(express.static('public'));

app.listen(3000);