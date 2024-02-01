import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
const Signup = () => {

        

        return (
                <>
                <div className='siguppage'> 
                <Link to={"/teacher"} className='siguppage1'>Teacher</Link>
                <Link to={"/Student"} className='siguppage1'>Student</Link>
                </div>
                <div className='footer'>
    <li> <Link to={"/linkdin.com"}>Facebook</Link></li>
    <li> <Link to={"facebook.com"}>Linkdin</Link></li>
    <li>  <Link to={"indeed.com"}>Indeed</Link></li>
    </div>
                </>
        )
}

export default Signup