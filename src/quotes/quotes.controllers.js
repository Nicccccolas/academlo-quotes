const quotesDB = []
let id = 1

//* {
//*  id: 1,
//*  author: 'Sahid',
//*  quote: 'Dudas?',
//*  year: 2022
//* }

const findAllQuotes = () => {
  return quotesDB
}

const findQuoteById = (id) => {
  const data = quotesDB.find(item => item.id == id)
  return data
}

const createNewQuote = (obj) => {
  const newQuote = {
    id: id++, // este valor lo administramos nosotros
    author: obj.author || 'Anonymous',
    quote: obj.quote,
    year: obj.year ? obj.year : 'Year Unknown'
    // year: obj.year || 'Year Unknown'
  }
  quotesDB.push(newQuote)
  return newQuote
}

const findRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotesDB.length)
  return quotesDB[randomIndex]
}

module.exports = {
  findAllQuotes,
  findQuoteById,
  createNewQuote,
  findRandomQuote
}