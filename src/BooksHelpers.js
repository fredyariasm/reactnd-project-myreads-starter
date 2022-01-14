export const toCustomBooks = (books) =>
(
    books.map(book => {
        const { id, title, authors = [], imageLinks = { thumbnail: '' }, shelf = 'none' } = book;
        return ({
            id: id,
            title: title,
            authors: authors,
            imageUrl: imageLinks.thumbnail,
            shelf: shelf
        })
    })
)

export const toCustomBooksSearch = (booksFound, myBooks) =>
(
    booksFound.map(book => {      
        const { id, title, authors = [], imageLinks = { thumbnail: '' }} = book;
        return ({
            id: id,
            title: title,
            authors: authors,
            imageUrl: imageLinks.thumbnail,
            shelf: getShelfById(id,myBooks)
        })
    })
)

const getShelfById = (id, myBooks)=>{
    const bookSearch = myBooks.find((b) => b.id === id);
    return (bookSearch) ? bookSearch.shelf : 'none'
}