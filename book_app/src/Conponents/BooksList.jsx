import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getBooks } from '../Redux/Books/action'
import BookCard from './BookCard'
import styles from "./BookList.module.css"



export const BooksList = () => {
  const dispatch=useDispatch()
  const books=useSelector((store)=>store.books)
  const location =useLocation()
  const [searchParams]=useSearchParams();
  console.log(location)

  useEffect(()=>{
    const order=searchParams.get("order")
    let paramObj={
      params:{
        category:searchParams.getAll("category"),
        _sort:order&&"release_year",
        _order:order&& order
        
      }
    }

     dispatch(getBooks(paramObj));
  },[location.search])
  return (
    <div className={styles.container}>
      {books.length>0 &&books.map((el)=>{
        return <BookCard key={el.id} book={el}/>
      })}
    </div>
  )
}

