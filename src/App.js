import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Home from './Home'
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
      const allMyBooks = [...this.state.books]
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
        <Route exact path="/" render={() => (
          <Home
          books={books}
          onUpdateShelf={(shelf, book) => this.updateShelf(shelf, book)}
          />
        )} />
        <Route path="/search" render={() => (
          <Search
            books={books}
            onUpdateShelf={(shelf, book) => {
              this.updateShelf(shelf, book)
            }}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
