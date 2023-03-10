import express from 'express'//express importado
import { db } from './config/configuracion_firebase.js'

const app = express(); //express inicializado

app.listen('8000', (req, res) =>{
    console.log('aplicacion iniciada en localhost:8000');//puerto escuchando en el puerto 8000
});

app.set('views', './vistas'); //de aca recoge las vistas
app.set('view engine', 'ejs'); //le digo que utilize ejs

app.use(express.static('./estilos'));//configura los archivos estaticos


//primera ruta:

app.get('/', (req, res) =>{
    console.log(db)
        res.render('index');
});