const books = require('../data/readingList')

module.exports = app => {
  app.get('/', (req, res) => {
   res.render('index')
  })
  app.get('/list', (req, res) => res.render('list', {list: books.getBooks()}))
  app.get('/bookResult', (req, res) => res.render('bookInput', {list: books.getBook()}))
}