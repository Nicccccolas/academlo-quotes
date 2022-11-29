//? Dependencies
const express = require('express')

//? Initial config
const port = 9000
const app = express()

//? JSON request avalaible
app.use(express.json())




//?  start server
app.listenerCount(port, () => {
  console.log(`Server started at port: ${port}`)
})
