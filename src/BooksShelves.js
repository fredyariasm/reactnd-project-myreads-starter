import React from 'react';
import Shelf from './Shelf';
import AddBookButton from './AddBookButton';


const BooksShelves = (props) => {

    const { books, onUpdateBook } = props

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf title="Currently Reading"
                        books={books.filter(book => book.shelf === "currentlyReading")}
                        onUpdateBook={onUpdateBook} />

                    <Shelf title="Want to Read"
                        books={books.filter(book => book.shelf === "wantToRead")}
                        onUpdateBook={onUpdateBook} />

                    <Shelf title="Read"
                        books={books.filter(book => book.shelf === "read")}
                        onUpdateBook={onUpdateBook} />
                </div>
            </div>
            <div className="open-search">
                <AddBookButton />
            </div>
        </div>
    )
}

export default BooksShelves