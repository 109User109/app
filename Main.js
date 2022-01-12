const express = require('express');
const { dirname } = require('path');
const path = require("path")
const exphbs = require("express-handlebars")
const mehtodOverride = require("method-override")
const expressSesion = require("express-session")
require("colors")
// Init
const app = express();
require("./Database")
 // settings
app.set('port', process.env.PORT || 3000);
app.set("views",path.join(__dirname, 'views'));

app.engine(".hbs", exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'Layouts'),
    partialsDir: path.join(app.get("views"), 'partials'),
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowedProtoMethodsByDefault: true},
    extname: '.hbs'}));
app.set("view engine", '.hbs');
 // middlewares
app.use(express.urlencoded({extended: false}));
app.use(mehtodOverride('_method'));
app.use(expressSesion({
    secret: '274312166527',
    resave: true,
    saveUninitialized: true}))
 // rutas
app.use(require("./Routes/index"))
app.use(require("./Routes/notes"))
app.use(require("./Routes/users"))
 // Variables Globales
// Static Files
app.use(express.static(path.join(__dirname, 'public')));
 // Server Listen
 app.listen(app.get('port'), ()=>{
     console.log(' [+] Server on PORT:'.green, app.get('port'));});