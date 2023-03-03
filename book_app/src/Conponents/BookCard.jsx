import React from 'react'

const BookCard = ({book}) => {
  return (
    <div>
      <img src='https://ttpl.imgix.net/9789391055080L.jpg' alt='book_pic' width="100%"/>
       <h3>{book.book_name}</h3>
       <p>Author:{book.author}</p>
       <p>Category:{book.category}</p>
       <p>Year:{book.release_year}</p>
    </div>
  )
}

export default BookCard