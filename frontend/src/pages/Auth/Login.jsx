import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'

const Login = () => {
  return (
    <AuthLayout>
      <div>
        <h3 className='text=lg font-bold'>Welcome Back</h3>
        <p>please enter your details to login</p>
      </div>
    </AuthLayout>
  )
}

export default Login
