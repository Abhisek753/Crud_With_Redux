import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SideBar = () => {
  const [searchParams,setSearchParams]=useSearchParams()
  const initialState=searchParams.getAll("category");
  const initialOrder=searchParams.getAll("order")
  const [category,setCategory]=useState(initialState||[])
  const [order,setOrder]=useState(initialOrder[0]||"");


  // console.log(category)
  const handleFilter=(e)=>{
   let newCategory=[...category]

    //if a user changes any category it should store in a state 
    // if the category is already present pop out the state 

    if (newCategory.includes(e.target.value)){
       //filter
       //splice
       newCategory.splice(newCategory.indexOf(e.target.value),1)
    }else{
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
    
  }

  const handleSort=(e)=>{
    setOrder(e.target.value)
  }
   
  useEffect(()=>{
    const params={
      category,
    };
    order && (params.order=order)
    setSearchParams(params);
  },[category,order])


  return (
    <div>
      <h3>Filter By</h3>
      <div>
        <input type="checkbox" value="Novel" onChange={handleFilter} checked={category.includes("Novel")}/>  
        <label>Novel</label>
      </div>
      <div>
         <input type="checkbox" value="Motivational" onChange={handleFilter} checked={category.includes("Motivational")}/>
        <label>Motivational</label>

      </div>
      <div>
        <input type="checkbox" value="Thriller" onChange={handleFilter} checked={category.includes("Thriller")}/>
        <label>Thriller</label>

      </div>
      <div>
         <input type="checkbox" value="Science_Fiction" onChange={handleFilter} checked={category.includes("Science_Fiction")}/>
        <label>Science Fiction</label>

      </div>
      <div onChange={handleSort}>
        <h3>Sort By Order</h3>
        <input type="radio" name='short_by' value={"asc"} defaultChecked={order==="asc"} />
        <label>Assending Order</label>
        <input type="radio" name='short_by' value={"desc"}  defaultChecked={order==="desc"} />
        <label>Decending Order</label>
       
      </div>

    </div>
  )
}

export default SideBar