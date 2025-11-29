import { useSelector, useDispatch } from "react-redux";
import UserForm from './components/UserForm.jsx';

function App() {

  const users = useSelector((state) => state.users);

  return (
    <>
      <h2>User Management App</h2>
      <UserForm />

      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
      
      
    </>
  )
}

export default App
