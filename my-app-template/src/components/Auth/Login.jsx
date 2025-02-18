import React from 'react';
import { useState } from 'react';

const Login = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //  login logic here
    console.log("email is : ", email);
    console.log("password is ",password);


    setEmail("");
    setPassword("");

  }
  return (

    <>
        {/* <div>Login</div> */}
        <div className="flex h-screen w-screen items-center justify-center  m-0 p-0">
            <div className="border-2 border-yellow-600 rounded-xl">


              {/*=============== form section start here =========== */}
               <form
                onSubmit={(e) => {
                    // e.preventDefault();
                    handleSubmit(e);
                }}
                className="flex flex-col items-center justify-center p-20">


                {/*====== input email logic here =======  */}
               <input
                 value={email}
                 onChange={(e) => setEmail
                  (e.target.value)
                }  
               
               
               className="outline-none text-xl px-6 py-4 border-2 border-red-600 rounded-full bg-transparent mb-6 placeholder:text-gray-500" type="email"  placeholder='Enter your email'required/>

                {/* ======== input password logic here ======= */}
                <input 
                value ={password}
                onChange ={ (e)=> setPassword
                  (e.target.value)
                }
                
                className="text-xl outline-none px-6 py-4 border-2 border-red-600 rounded-full mb-6 placeholder:text-gray-500" type="password" placeholder='Enter password'  required/>
                <button className="text-xl text-white outline-none px-18 py-4 border-2 border-none bg-green-600 rounded-full mb-6 placeholder:text-gray-500">Login</button>
               </form>
            </div>
        </div>

    </>
  )
}

export default Login;