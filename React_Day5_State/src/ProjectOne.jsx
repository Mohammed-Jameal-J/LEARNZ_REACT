import React, { useState } from 'react'

const ProjectOne = () => {
  const [field, setField] = useState({
    name: "",
  });

  const [input, setInput] = useState("");

  const updateName = () => {
    setField({...field,name: input }); 
  };

  return (
    <>
      <h3>Project-One</h3>
      <h5>Name: {field.name}</h5>
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={updateName}>Update Name</button>
    </>
  )
}

export default ProjectOne;
