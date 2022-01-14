import React, { Component } from 'react';
import MoveMenu from './MoveMenu';

class Book extends Component {


    updateBook = (shelf) =>{
        this.props.onUpdateBook(this.props.book,shelf)
    }

    render() {

        const book = this.props.book
      
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageUrl}")` }}></div>
                    <MoveMenu shelf={book.shelf} onMoveBook={this.updateBook} />
                </div>

                <div className="book-title">{book.title}</div>

                {book.authors.map(author => (
                    <div key={author} className="book-authors">
                        {author}
                    </div>
                ))}

            </div >
        )

    }
}

export default Book
