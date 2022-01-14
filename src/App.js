import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BooksShelves from './BooksShelves'
import { Route } from 'react-router-dom'
import { toCustomBooks } from './BooksHelpers';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
    this.loadBooks();
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.loadBooks();
      })
  }

  loadBooks = () => {
    BooksAPI.getAll()
      .then(books => {
        const customBooks = toCustomBooks(books);

        this.setState({
          books: customBooks
        })
      })
  }

  render() {
    return (

      <div>
        <Route exact path='/' render={() => (
          <BooksShelves
            books={this.state.books}
            onUpdateBook={this.updateBook}
          />
        )} />
        <Route path='/search' render={() => (
          <Search
            onUpdateBook={this.updateBook}
            myBooks={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp