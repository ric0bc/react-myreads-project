# MyReads Project

This is my template for the final assessment project for Udacity's React Fundamentals course. The HTML and CSS markup I used, is from the starter template from [Udacity](https://github.com/udacity/reactnd-project-myreads-starter).

## Usage information
You have 3 bookshelfs on your homepage. With the "plus" button on the bottom, you can search after other books and add them to your bookshelf. On the bookshelf page you can also change the state of your books.

## TL;DR

To get started:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Files included in the repository
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── Book-component.js
    ├── BooksAPI.js
    ├── Bookshelf-component.js
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    ├── index.js
    └── search-component.js
```

## Backend Server

Udacity provided a backend server. The methods for using the Backend API are not changed.

## Search terms
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms.

The only search terms you can use are:
```
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
```
