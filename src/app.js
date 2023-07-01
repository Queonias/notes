const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
require('./config/passport');


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
app.use(methodOverride('_method'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// Adiciona o middleware para analisar os dados do corpo da solicitação com o formato de codificação x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null
  next();
});

// Routes
// Rota raiz que renderiza a visualização "index"
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));

// Static files
// Define o diretório 'public' como o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;