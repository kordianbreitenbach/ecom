import React from 'react'
import {Link} from 'react-router-dom';
import {ShoppingCart} from "phosphor-react";
import '../App.css';
 const Navbar = () => {
  return (
   <div> <div className="navbar">
        
      <div className="links">
        <div className="shopTitle">
            <h1>fake kordian shop</h1>
        </div>
      <Link to='/' >shop</Link>
      <Link to='/cart'>
         <ShoppingCart size={32}/> 
      </Link>
      </div>
        </div>
        <div className='adds'><h1 className="addDummy">Add Dummy</h1></div>
        </div>
  )
}

export default Navbar;