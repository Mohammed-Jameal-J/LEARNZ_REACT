import { useSelector, useDispatch } from "react-redux";
import UserForm from './components/UserForm.jsx';
import { useState } from "react";

function App() {

  const users = useSelector((state) => state.users);
  const [user, setUser] = useState(null);

  return (
    <>
      <h2>User Management App</h2>
      <UserForm user={user} />

      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button onClick={() => setUser(user)}>Edit</button>
        </div>
      ))}
      
      
    </>
  )
}

export default App
