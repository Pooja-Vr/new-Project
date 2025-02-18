import React from 'react'

const Login = () => {
  return (

    <>
        <div>Login</div>
        <div className="flex items-center justify-center h-screen w-screen bg-gray-600">
            <div className="flex flex-col">
                <input  className="text-center px-4 py-5 rounded-full bg-transparent" type="email"  placeholder='Enter your mail id'/>
                <input className="text-center px-4 py-5 rounded-full bg-transparent" type="password" placeholder='Enter password' />
                <button>Login</button>
            </div>
        </div>

    </>
  )
}

export default Login;