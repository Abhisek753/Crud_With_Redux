import React from 'react'

const SideBar = () => {
  return (
    <div>
      <h3>Filter By</h3>
      <div>
        <input type="checkbox"/>
        <label>Novel</label>
      </div>
      <div>
         <input type="checkbox" />
        <label>Motivational</label>

      </div>
      <div>
        <input type="checkbox"/>
        <label>Thriller</label>

      </div>
      <div>
         <input type="checkbox" />
        <label>Science Fiction</label>

      </div>

    </div>
  )
}

export default SideBar