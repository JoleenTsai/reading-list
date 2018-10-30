const React = require('react')
const Fragment = React.Fragment

const Form = props =>
  <Fragment>
    <form>
      <div className="form-group">
        <label htmlFor="bookName">Title</label>
        <input type="text" className="form-control" id="bookName" placeholder={props.title ? '' : "The Great Gatsby"} value={props.title ? props.title : ''} />
      </div>
      <div className="form-group">
        <label htmlFor="bookAuthor">Author</label>
        <input type="text" className="form-control" id="bookAuthor" placeholder="F. Scott Fitzgerald" />
      </div>
      <div className="form-group">
        <label htmlFor="bookPages">Total Pages</label>
        <input type="text" className="form-control" id="bookPages" placeholder="180" />
      </div>
      <div className="form-group">
        <label htmlFor="bookCurrent">Current Page Number</label>
        <input type="text" className="form-control" id="bookCurrent" placeholder="43" />
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" id="bookIsRead" checked={!!props.isRead} />
        <label className="form-check-label" htmlFor="bookIsRead"> Read this Book Before</label>
      </div>
      <hr className="my-2" />
    </form>
    <a className="btn btn-info mr-3" id="submitBook" href="/list" role="button"><i className="fas fa-book-reader"></i> Submit Book</a>
    <a className="btn btn-warning mr-3" href="/list" role="button"><i className="fas fa-bars"></i> View List</a>
    <a className="btn btn-secondary" href="/" role="button"><i className="fas fa-home"></i> Back Home</a>
  </Fragment>

module.exports = Form