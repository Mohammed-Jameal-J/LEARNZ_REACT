import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login logic here (e.g., authentication)

        // After successful login, navigate to the home page
        navigate('/');
    }
  return (
    <>
    <h1>Login</h1>
    <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login