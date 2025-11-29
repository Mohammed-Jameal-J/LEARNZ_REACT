import React from 'react'
import {useParams , useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'

const User = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [id]);
    const handleLogin = () => {
        navigate('/');
    }

  return (
    <>
    <h1>User</h1>
    <h3>{user?.name}</h3>
    <p>Email: {user?.email}</p>
    <p>Phone: {user?.phone}</p>
    <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default User