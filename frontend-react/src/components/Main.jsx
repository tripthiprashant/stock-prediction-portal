import React from 'react'
import { Link } from 'react-router-dom'
function Main() {
  return (
    <div className='container'>
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock Prediction Portal</h1>
        <p className='text-light lead '>This stock application utlizers machine learning techniques,specifically employing Keras, and LSTM models,integrated within Django framework.It forecasts future stock prices by analyzing 100-day and 200-day moving averges,essential indicators widely used by stock analysts to inform trading and investment decisions.</p>
         <Link  className='btn btn-info' to='/login'>Login</Link>
      </div>
    </div>
  )
}

export default Main