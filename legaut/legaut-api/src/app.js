const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3030

app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'LegAutAPI',
    version: '1.0.0'
  });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
    console.log(`http://localhost:${PORT}/`)
})