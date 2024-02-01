import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
const Navbar = () => {
  return (
    <>
    <div className='navigationbar'>
    <div>
        <img src="https://png.pngtree.com/png-vector/20221215/ourmid/pngtree-school-logo-design-png-image_6524414.png" alt="" />
    </div>
    <div className='menu'>
        <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/login"}>Login</Link>
        </li>
        <li>
            <Link to={"/signup"}>Signup</Link>
        </li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar
