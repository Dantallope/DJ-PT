const express = require('express');
const path = require('path')


const app = express();
const port = process.env.PORT || 3001

app.get('/', (re, res) => {
  res.sendFile(path.join(__dirname,'../public/index.html'))
})


app.listen(port,() => {
  console.log(`Server is running on localhost ${port}`)
})