//? Dependencies
const express = require('express')
const quoteRouter = require('./quotes/quotes.router')

//? Initial config
const port = 9001
const app = express()

//? JSON request avalaible
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'OK'
  })
})

//? api V1 rOUTES
app.use('/api/v1', quoteRouter)

//?  start server
app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})
