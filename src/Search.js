import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import { toCustomBooksSearch } from './BooksHelpers';
import HomeButton from './HomeButton';
import Shelf from './Shelf';


class Search extends Component {

    state = {
        booksResult: []
    }

    handleInput = (event) => {
        this.searchBooks(event.target.value);
    }

    searchBooks = (query) => {
        if (query.length === 0) {
            this.setState({ booksResult: [] });
        }
        else if (query.trim()) {
            BooksAPI.search(query.trim())
                .then(books => {
                    const customBooks = books.error ? [] : toCustomBooksSearch(books, this.props.myBooks);
                    this.setState({
                        booksResult: customBooks
                    });
                });
        }
    };

    render() {
        const { onUpdateBook } = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">                  
                    <HomeButton />
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" onChange={this.handleInput} placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <Shelf title=""
                        books={this.state.booksResult}
                        onUpdateBook={onUpdateBook} />                   
                </div>
            </div>
        )
    }

}

export default Search