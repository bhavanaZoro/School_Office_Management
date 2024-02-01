import React from 'react';
import "./index.css"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
    <div className='homeimage'>
      <h1> SCHOOL <br /> MANAGEMENT </h1>
    </div>
    <div className='footer'>
    <li> <Link to={""}>Facebook</Link></li>
    <li> <Link to={""}>Linkdin</Link></li>
    <li>  <Link to={""}>Indeed</Link></li>
  </div>
    </>
  );
};

export default Home;
