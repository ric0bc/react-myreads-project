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
      this.setState({ books })
    })
  }

  updateShelf(shelf, book) {
    BooksAPI.update(book, shelf).then(booksObject => {
      const allBooks = this.state.books;
      const mybook = allBooks.filter((b) => b.id === book.id);
      mybook[0].shelf = shelf;

      this.setState({ books: allBooks });
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
                  onUpdateShelf={(shelf, book) => this.updateShelf(shelf, book)}
                  title={'Currently Reading'}
                  books={this.state.books}
                  shelf={'currentlyReading'}
                />
                <Bookshelf
                  onUpdateShelf={(shelf, book) => this.updateShelf(shelf, book)}
                  title={'Want to Read'}
                  books={this.state.books}
                  shelf={'wantToRead'}
                />
                <Bookshelf
                  onUpdateShelf={(shelf, book) => this.updateShelf(shelf, book)}
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
