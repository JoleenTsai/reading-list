const React = require('react')
const Fragment = React.Fragment

const Book = props =>
  <Fragment>
    {props.isRead ?
      <div className="card mb-3 " key={props.title}>
        <div className="card-header" id="bookName">
          {props.title} (READ)
        <a href="#" id="deleteBTN" className="btn btn-info btn-sm float-right">Delete</a>
          <a href="#" id="editBTN" className="btn btn-secondary btn-sm float-right">Edit</a>
        </div>
        <ul className="list-group list-group-flush">
          <li id="bookAuthor" className="list-group-item">Author: {props.author}</li>
          <li id="bookPages" className="list-group-item">Pages: {props.pages}</li>
          <li id="bookCurrent" className="list-group-item">Current Page: {props.currentPage}</li>
        </ul>
      </div> :
      <div className="card mb-3" key={props.title}>
        <div className="card-header" id="bookName">
          {props.title}
          <a href="#" id="deleteBTN" className="btn btn-danger btn-sm float-right">Delete</a>
          <a href="#" id="editBTN" className="btn btn-secondary btn-sm float-right">Edit</a>
        </div>
        <ul className="list-group list-group-flush">
          <li id="bookAuthor" className="list-group-item">Author: {props.author}</li>
          <li id="bookPages" className="list-group-item">Pages: {props.pages}</li>
          <li id="bookCurrent" className="list-group-item">Current Page: {props.currentPage}</li>
        </ul>
      </div>}

  </Fragment>

module.exports = Book