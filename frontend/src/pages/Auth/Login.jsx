import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import Input from '../../components/inputs/input';

const Login = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const [error,setError] = useState(null);

  //handle login form submit
  const handleLogin = async(e)=> {}
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h3 className='text-2xl font-bold text-gray-800 mb-2'>Welcome Back</h3>
        <p className="text-sm text-gray-600 mb-6">please enter your details to login</p>

        <form onSubmit={handleLogin} className="space-y-5">
          <Input
            value={email}
            onChange={({target})=> setEmail(target.value)}
            label="Email Address"
            placeholder="abc@example.com"
            type='text'
          />

          <Input
            value={password}
            onChange={({target})=> setPassword(target.value)}
            label="Password"
            placeholder="Min 8 Characters"
            type='password'
          />

          {error && <p className='text-red-500 text-sm font-medium'>{error}</p>}

          <button
            type='submit'
            className='w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200'
          >
            Login
          </button>

          <p className='text-sm text-gray-600 text-center'>
            Don't have an account?{" "}
            <Link className='text-indigo-600 font-medium hover:underline' to="/signup">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login
