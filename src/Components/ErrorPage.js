import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <div className='text-center'>
    <img src={require("./images/Logo-01.png")} width={"25%"}></img>
      
      <div className='mt-2 justify-content-center d-flex aligns-item-center '>
        <h1>404 PAGE NOT FOUND</h1>
      </div>
      <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      <Link className='btn btn-primary' to="/"><i class="bi bi-arrow-left"></i>  Back to HomePage </Link>
    </div>
    </>
  )
}

export default ErrorPage
