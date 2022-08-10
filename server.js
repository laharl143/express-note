// reference: https://expressjs.com/en/starter/hello-world.html
// common command line used: 
// CTRL + C = to exit the node; 
// $ nodemon server.js = is used for the automation; 

// How to set this step by step:
// Make a new folder called my-express-server on your Desktop

// Change Directory to this new folder

// Inside the my-express-server folder, create a new file called server.js

// Set up a new NPM package ($ npm init)

// Open the project folder in vscode

// Using NPM install the express module ($ npm install express)

// Require express in your server.js   (const express = require('express'))

// Setup express  (const app = express())

// Create a root route get method with app.get()

// Send the words Hello World from the root route as the response

// Spin up our server on port 3000 with app.listen

// Run server with nodemon  ($ nodemon server.js)

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

