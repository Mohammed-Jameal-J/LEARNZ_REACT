import React from "react";

const UserList = ({ usersList, deleteUser }) => {
  return (
    <>
      {usersList.map((user) => (
        <div key={user.id}>
          <h3>
            Name : {user.name} , Email : {user.email}
          </h3>
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
        </div>
      ))}
    </>
  );
};

export default UserList;
