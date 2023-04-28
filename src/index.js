const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
app.use(express.json())

require('./services/swagger')
require('./routes')(app)

const port = 3000

app.get('/', (req, res) => {
    res.cookie('Cookie teste', 'token')
    res.send('Cookie set!')
})

app.use('/docs', express.static('src/views'))
app.use('/docs/swagger.yaml', express.static('src/docs/swagger.yaml'))

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`)
})