const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const fs2 = require('node:fs');
const path = require('node:path');
const readdirp = require("readdirp");
const StreamConcat = require('stream-concat');


app.use(cors());

app.use(express.json());
port = 3080;
app.listen(port, () => {
  console.log(`Server listening on the port:: ${port}`)
})

//EX1
app.post('/api/ex1', (req,res) => {

  const arrelInici = 'C:\\Users\\paupc\\Desktop\\DAM\\AD\\UF1_Expaupulido\\UF1_ExamenAaD';
  console.log('Les rutes de tot el que inclueix el directori UF1_ExamenAaD');
  readdirp(arrelInici,{type: 'all'})
    .on('data', (ruta) => {
      console.log(ruta.fullPath);
    })

})

//EX2
app.post('/api/ex2',(req,res) => {

  if(fs.existsSync('C:\\Users\\paupc\\Desktop\\DAM\\AD\\UF1_Expaupulido\\UF1_ExamenAaD\\Documents\\Docs1\\FitxerDesti.txt')){
    //Concatena (Aquest funciona pero concatena més d'una vegada no se perque)
    const stream1 = fs.createReadStream('C:\\Users\\paupc\\Desktop\\DAM\\AD\\UF1_Expaupulido\\UF1_ExamenAaD\\Documents\\FitxerOrigen.txt', 'utf8');
    const stream2 = fs.createReadStream('C:\\Users\\paupc\\Desktop\\DAM\\AD\\UF1_Expaupulido\\UF1_ExamenAaD\\Documents\\Docs1\\FitxerDesti.txt', 'utf8');
    const output = fs.createWriteStream('C:\\Users\\paupc\\Desktop\\DAM\\AD\\UF1_Expaupulido\\UF1_ExamenAaD\\Documents\\Docs1\\FitxerDesti.txt', 'utf8');
    const combinedStream = new StreamConcat([stream1, stream2]);
    combinedStream.pipe(output);
    console.log("Concatenat");}

  else {
    //Crea el nou fitxer i copia les dades del fitxer Origen. (Awuest va be)
      const readStream = fs.createReadStream('C:\\Users\\paupc\\Desktop\\DAM\\AD\\UF1_Expaupulido\\UF1_ExamenAaD\\Documents\\FitxerOrigen.txt')
      const writeStream = fs.createWriteStream('C:\\Users\\paupc\\Desktop\\DAM\\AD\\UF1_Expaupulido\\UF1_ExamenAaD\\Documents\\Docs1\\FitxerDesti.txt')
      readStream.pipe(writeStream)
      console.log("Els dos fitxers tenen el mateix contingut")
    }

})

//EX3
app.post('/api/ex3', (req,res) => {
  fs.readdir('C:\\Users\\paupc\\Desktop\\DAM\\AD\\UF1_Expaupulido\\UF1_ExamenAaD\\Imatges', (err, imatge) => {
    imatge.forEach(imatge => {
      if (path.extname(imatge) === '.png')
        console.log(imatge);
    })
  })
})

//EX4
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

