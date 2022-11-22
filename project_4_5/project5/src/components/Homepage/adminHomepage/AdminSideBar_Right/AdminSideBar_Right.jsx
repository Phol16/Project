import React from 'react'
import { useMovieContext } from '../../../../Context/Context'
import style from './style.module.css'

const AdminSideBar_Right = () => {
  const {getSearched} = useMovieContext();

  const selected=(e)=>{
    
  }

  return (
    <div className={style.container}>
      <div className={style.fixedContainer}>
      <label htmlFor="search">Search Movie Here:</label>
      <input onChange={selected} type='text' id='search' name='search' placeholder='Search'/>
      </div>
    </div>
  )
}

export default AdminSideBar_Right