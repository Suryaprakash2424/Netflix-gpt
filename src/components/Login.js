import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
      <div>
          <Header />
          <div className='absolute'>
              <img
                className='w-full'
                src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_medium.jpg" alt='bg' />
      </div>  
      <div>
        <form className='absolute content-center rounded-lg p-12 w-3/12 bg-black bg-opacity-80 my-36 mx-auto left-0 right-0 text-white'>
          <h1 className='font-bold text-2xl mx-3 py-2'>
            {isSignInForm ? "Sign In" :"Sign Up"}
          </h1>
          {!isSignInForm && (
            <input type='text'
            placeholder='Full Name'
            className='p-2 m-2 w-full bg-gray-700  rounded-lg'
          />)}
          <input type='text'
            placeholder='Email or Mobile number'
            className='p-2 m-2 w-full bg-gray-700 rounded-lg'
          />
          <input type='text'
            placeholder='Password'
            className='p-2 m-2 w-full bg-gray-700  rounded-lg'
          />
        <button className='mx-2 py-1 w-full my-2 border bg-red-500 rounded-lg'>
        {isSignInForm ? "Sign In" :"Sign Up"}
        </button>
          <p className='p-2 cursor-pointer ' onClick={toggleSignInForm}>
            {isSignInForm ?
              "Net to Netflix? Sign up Now" :
              "Already resgistered. Sign In Now"}
          </p>
        </form>
        </div>

        </div>      
  )
}

export default Login;