// reference: https://expressjs.com/en/starter/hello-world.html
// common command line used: 
// CTRL + C = to exit the node; 
// $ nodemon server.js = is used for the automation; 

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {              // "/" is the home page
  res.send("<h1>Hello World!</h1>")
})

app.get('/contact', (req, res) => {              // "/" is the home page
    res.send("Contact me at: erskine.duenas@gmail.com!")
  })

  app.get('/about', (req, res) => {              // "/" is the home page
    res.send("Hi! My name is Erskine. Nice to meet you :)")
  })

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

