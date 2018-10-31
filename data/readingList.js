let books = []
let selectedBook = {}

module.exports = {
  getBooks () {
    return books
  },
  setBook(id) {
    let index = books.findIndex(bookInfo => bookInfo.id === id)
    selectedBook = books[index]
  },
  getBook() {
    return selectedBook
  },
  addBook(book) {
    books.push(book)
  },
  updateBook (id, book) {
    let index = books.findIndex(bookInfo => bookInfo.id === id)
    books.splice(index, 0)
  }
}