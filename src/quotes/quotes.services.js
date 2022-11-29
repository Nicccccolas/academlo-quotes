//?  File's imports

const quotesControllers = require('./quotes.controllers')

const getAllQuotes = (req, res) => {
  const data = quotesControllers.findAllQuotes()
  res.status(200).json(data)
}

const getQuoteById = (req, res) => {
  const id = req.params.id
  const data = quotesControllers.findQuoteById(id)

  if(data){
    //? Caso Exitoso
    res.status(200).json(data)
  } else {
    //! error
    res.status(404).json({message: 'Invalid ID'})
  }
}

const postQuote = (req, res) => {
  const {author, quote, year} = req.body
  
  if (quote) {
    const data = quotesControllers.createNewQuote({author, quote})
    res.status(201).json(data)
  } else {
    res.status(400).json({message: 'Invalid data', fields: {author: 'String', quote: 'String', year: 2022}})
  }
}

const getRandomQuote = (req, res) => {
  const data = quotesControllers.findRandomQuote()

  if(data){
    //? Caso exitoso
    res.status(200).json(data)
  } else {
    //! caso error
    res.status(400).json({
      message: 'DB is empty'
    })
  }
}


module.exports = {
  getAllQuotes, 
  getQuoteById, 
  getRandomQuote,
  postQuote
}