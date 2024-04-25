import express from 'express';
const app = express();

app.get('/saludo', (req, res)=>{
    res.send('SALUDOS DESDE EXPRESS');
});

app.listen(3000, ()=>{
    console.log('Hola desde la app de Express');
});