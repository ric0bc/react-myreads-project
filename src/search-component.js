import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI.js'
import Book from './Book-component.js'

class Search extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    if(query){
      BooksAPI.search(query.trim(), 20).then(result => {
        if(!result.error){
          result.map(book => this.updateRequestedBook(book))
        } else {
          result = []
        }
        this.setState({ books: result })

      })
    } else {
      this.setState({books: []})
    }
    this.setState({query: query})
  }

  updateRequestedBook = (book) => {
    const myBook = this.props.books.find(myBook => (myBook.id === book.id))
    if(myBook){
      book.shelf = myBook.shelf
    } else {
      book.shelf = 'none'
    }
    return book
  }

  updateShelf = (value, book) => {
    if(this.props.onUpdateShelf){
      this.props.onUpdateShelf(value, book)
    }
  }

	render() {
    const { books, query } = this.state
    const displayBooks = books.sort(sortBy('title')).filter(book => book.imageLinks)

		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => {this.updateQuery(event.target.value)}}
              value={query}/>
          </div>
        </div>
        <div className="search-books-results">
          {displayBooks.length === 0 && query.length >= 1 && (
            <div className="search-no-results">
              <p>No results found for <strong>{query}</strong></p>
            </div>
          )}
          <Book
            books={displayBooks}
            onUpdate={this.updateShelf.bind(this)}/>
        </div>
      </div>
		)
	}
}

export default Search
