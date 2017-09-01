import React, { Component } from 'react'
import Book from './Book-component.js'
import PropTypes from 'prop-types'

class Bookshelf extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		title: PropTypes.string.isRequired,
		shelf: PropTypes.string.isRequired
	}

	onUpdate = (value, book) => {
		if(this.props.onUpdateShelf){
    	this.props.onUpdateShelf(value, book)
		}
  }

	render() {
		const { books, title, shelf } = this.props

		let showingBooks = books.filter(book => book.shelf === shelf)

		return (
			<div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book
            	books={showingBooks}
            	onUpdate={(value, book) => this.onUpdate(value, book)}
            />
          </ol>
        </div>
      </div>
		)
	}
}

export default Bookshelf
