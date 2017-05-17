const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.use(express.static(path.join(__dirname, 'static')))
app.use(express.static(path.join(__dirname, 'node_modules/react/dist')))
app.use(express.static(path.join(__dirname, 'node_modules/react-dom/dist')))

app.listen(6000, function() {
  console.log('App started on port 6000')
})
