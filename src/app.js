const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
const exphbs = require('express-handlebars');

// Initializations
const app = express();

// Settings
// Define a porta do aplicativo usando a variável de ambiente PORT
app.set("port", process.env.PORT);

// Configura o diretório de visualizações como sendo o diretório 'views' dentro do diretório atual
app.set('views', path.join(__dirname, 'views'));

// Configuração do mecanismo de visualização Handlebars
const hbs = exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  });
  app.engine(".hbs", hbs.engine);
  app.set("view engine", ".hbs");

// Middlewares
app.use(morgan('dev'));

// Adiciona o middleware para analisar os dados do corpo da solicitação com o formato de codificação x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Routes
// Rota raiz que renderiza a visualização "index"
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// Static files
// Define o diretório 'public' como o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;