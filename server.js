const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3001
app.use(express.static(__dirname + '/public'));

//para incluir las vistas parciales
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');






app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Adrian'
    });
})


app.get('/about', (req, res) => {
    res.render('about');
})


//para  montar el servidor
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto${port}`)
})