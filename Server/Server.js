const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const fs2 = require('node:fs');
const path = require('node:path');
const readdirp = require("readdirp");


app.use(cors());

app.use(express.json());
port = 3080;
app.listen(port, () => {
  console.log(`Server listening on the port:: ${port}`)
})

app.post('/api/ex1', (req,res) => {

  const arrelInici = 'C:\\Users\\paupc\\Desktop\\DAM\\AD\\UF1_Expaupulido\\UF1_ExamenAaD';

  console.log('Les rutes de tot el que inclueix el directori UF1_ExamenAaD');
  readdirp(arrelInici,{type: 'all'})
    .on('data', (ruta) => {
      console.log(ruta.fullPath);
    })

})

app.post('/api/ex2',(req,res) => {
  const readStream = fs.createReadStream('C:\\Users\\paupc\\Desktop\\DAM\\AD\\UF1_Expaupulido\\UF1_ExamenAaD\\Documents\\FitxerOrigen.txt')
  const writeStream = fs.createWriteStream('C:\\Users\\paupc\\Desktop\\DAM\\AD\\UF1_Expaupulido\\UF1_ExamenAaD\\Documents\\Docs1\\FitxerDesti.txt')
  readStream.pipe(writeStream)
  console.log("Els dos fitxers tenen el mateix contingut")
})

app.post('/api/ex3', (req,res) => {
  fs.readdir('C:\\Users\\paupc\\Desktop\\DAM\\AD\\UF1_Expaupulido\\UF1_ExamenAaD\\Imatges', (err, imatge) => {
    imatge.forEach(imatge => {
      if (path.extname(imatge) === '.png')
        console.log(imatge);
    })
  })



})

app.post('/api/ex4', (req,res) => {

  fs.readdir('C:\\Users\\paupc\\Desktop\\DAM\\AD\\UF1_Expaupulido\\UF1_ExamenAaD\\Imatges', (err, imatge) => {
    imatge.forEach(imatge => {
      if (path.extname(imatge) === '.txt'){
        console.log(imatge)
      }
      else {
        console.log('Al loro, ni ha res per llegir!');
      }
    })
  })

})

