const React = require('react')
const Fragment = React.Fragment

const Book = props =>
  <Fragment>
    {props.isRead ?
      <div className="card mb-3 " key={props.title}>
        <div className="card-header" id="bookName">
          <h4>{props.title}
            <a href="#" id="editBTN" className="btn btn-secondary btn-sm float-right">Edit</a>
            <a href="#" id="deleteBTN" className="btn btn-danger btn-sm float-right">Delete</a>
          </h4>
        </div>
        <ul className="list-group list-group-flush">
          <li id="bookAuthor" className="list-group-item">Author: {props.author}</li>
          <li id="bookPages" className="list-group-item">Pages: {props.pages}</li>
          <li id="bookCurrent" className="list-group-item">Current Page: {props.currentPage}</li>
          <li id="isRead" className="list-group-item disabled"><i>Book Completed!</i></li>
        </ul>
      </div> :
      <div className="card mb-3" key={props.title}>
        <div className="card-header" id="bookName">
          <h4>{props.title}
            <a href="#" id="editBTN" className="btn btn-secondary btn-sm float-right">Edit</a>
            <a href="#" id="deleteBTN" className="btn btn-danger btn-sm float-right">Delete</a>
          </h4>
        </div>
        <ul className="list-group list-group-flush">
          <li id="bookAuthor" className="list-group-item">Author: {props.author}</li>
          <li id="bookPages" className="list-group-item">Pages: {props.pages}</li>
          <li id="bookCurrent" className="list-group-item">Current Page: {props.currentPage}</li>
        </ul>
      </div>}
  </Fragment>

module.exports = Book