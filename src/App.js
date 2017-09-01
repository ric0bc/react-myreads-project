import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf-component.js'
import Search from './search-component.js'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books)
      this.setState({ books })
    })
  }

  updateShelf(shelf, book) {
    BooksAPI.update(book, shelf).then(book => {
      console.log(book)
      // this.setState(state => ({
      //   state.books.book.shelf = shelf
      // }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf
                  onUpdateShelf={this.updateShelf}
                  title={'Currently Reading'}
                  books={this.state.books}
                  shelf={'currentlyReading'}
                />
                <Bookshelf
                  onUpdateShelf={this.updateShelf}
                  title={'Want to Read'}
                  books={this.state.books}
                  shelf={'wantToRead'}
                />
                <Bookshelf
                  onUpdateShelf={this.updateShelf}
                  title={'Read'}
                  books={this.state.books}
                  shelf={'read'}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
        <Route path="/search" component={Search} />
      </div>
    )
  }
}

export default BooksApp
