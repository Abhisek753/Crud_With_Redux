import React from 'react'
import { BooksList } from '../Conponents/BooksList'
import Navbar from '../Conponents/Navbar'
import SideBar from '../Conponents/SideBar'
import styles from "./Books.module.css"

export const Books = () => {
  return (
    <div>
    <Navbar/>
        <div className={styles["books-filter-container"]}>
           <div className={styles["filter-component"]}>
           <SideBar/>

           </div>
           <div className={styles["books-list"]}>
           <BooksList/>

           </div>

        </div>
    </div>
  )
}

