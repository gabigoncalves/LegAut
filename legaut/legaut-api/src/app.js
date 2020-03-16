const express = require('express')
const bodyParser = require('body-parser')
const server = require('./server')

const app = express()
const PORT = 3030

app.use(bodyParser.json())
app.use('/', server)


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
    console.log(`http://localhost:${PORT}/`)
})