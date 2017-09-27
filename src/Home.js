import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf-component.js'

class Home extends Component {

  updateShelf = (value, book) => {
    if(this.props.onUpdateShelf){
      this.props.onUpdateShelf(value, book)
    }
  }

  render() {
    const { books } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <div className="list-books-content">
            <div>
              <Bookshelf
                onUpdateShelf={(shelf, book) => this.updateShelf(shelf, book)}
                title={'Currently Reading'}
                books={books}
                shelf={'currentlyReading'}
              />
              <Bookshelf
                onUpdateShelf={(shelf, book) => this.updateShelf(shelf, book)}
                title={'Want to Read'}
                books={books}
                shelf={'wantToRead'}
              />
              <Bookshelf
                onUpdateShelf={(shelf, book) => this.updateShelf(shelf, book)}
                title={'Read'}
                books={books}
                shelf={'read'}
              />
            </div>
          </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}
 export default Home
