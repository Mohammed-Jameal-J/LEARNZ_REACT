import { useGetUsersQuery } from "./redux/apiSlice";
import UserShow from "./components/UserShow";

function App() {
  const { data, error, isLoading } = useGetUsersQuery();
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error occurred</div>
  }
  return (
    <>
     <h1>RTK</h1>
     <div>
      <h2>User List</h2>
      <ul>
        {data?.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            </li>
        ))}
      </ul>

     </div>
     <UserShow />
    </>
  )
}

export default App
