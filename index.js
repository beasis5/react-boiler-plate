const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://beasis5:Ohbani1109@cluster0.6yabo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
//   useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
// }).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

mongoose.connect('mongodb+srv://beasis5:Ohbani1109@cluster0.6yabo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').
then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)})