import React from 'react'
import { Link } from 'react-router-dom'
import AddIcon from './../../assets/image/menu-svgrepo-com.svg'


const Header = () => {
  return (
      <div className='headerLinks'>
          <Link to='/'>Sort by alphabet</Link>
          <Link to='/'>Sort by author</Link>
          <Link to='/'>Sort by category</Link>
          <Link to='/'>Sort by total count</Link>
      <Link to='/'>Sort by total count in category</Link>
      <img src={AddIcon} alt="" />
    </div>
  )
}

export default Header