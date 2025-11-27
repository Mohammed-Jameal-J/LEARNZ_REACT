import React from "react";
import { useState } from "react";

const UserForm = ({ addUser }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData({ name: "", email: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default UserForm;
