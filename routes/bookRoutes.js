const books = require('../data/readingList')

module.exports = (app) => {
  app.get('/books', (req, res) => res.json(books.getBooks()))
  app.post('/books', (req, res) => {
    books.addBook(req.body)
  })
  app.get('/books/:id', (req, res) => {
    books.setBook(req.params.id)
  })
  app.put('/books/:id', (req,res) => {
    books.updateBook(req.params.id, req.body)
  })
  app.delete('/books/:id', (req, res) => {
    books.deleteBook(req.params.id)
  })
}