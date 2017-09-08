import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf-component.js'
import Search from './search-component.js'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf(shelf, book) {
    BooksAPI.update(book, shelf).then(booksObject => {
      // TODO: allMyBooks should be a copy not a Ref.
      const allMyBooks = this.state.books
      const mybook = allMyBooks.filter((b) => b.id === book.id)
      if(mybook.length === 0){
        book.shelf = shelf
        allMyBooks.push(book)
      } else {
        mybook[0].shelf = shelf
      }

      this.setState({ books: allMyBooks })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
          <Route path="/search" render={({ history }) => (
            <Search
              books={books}
              onUpdateShelf={(shelf, book) => {
                this.updateShelf(shelf, book)
                history.push('/')
              }}/>
          )} />
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
        )} />
      </div>
    )
  }
}

export default BooksApp
