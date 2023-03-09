import express from 'express'//express importado

const app = express(); //express inicializado

app.listen('8000', (req, res) =>{
    console.log('aplicacion iniciada en localhost:8000');//puerto escuchando en el puerto 8000
});

//primera ruta:

app.get('/', (req, res) =>{
    res.send('Funciona todo');
});