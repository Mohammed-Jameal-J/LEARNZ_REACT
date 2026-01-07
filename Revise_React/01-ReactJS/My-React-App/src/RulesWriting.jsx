import React from "react";

const RulesWriting = () => {
  const page = "About";
  return (
    <>
      <h2 style={{backgroundColor: 'black' , color:"white"}}>About</h2>
      <h6 className="">This was {page} page</h6>
      <button
        onClick={() => {
          console.log(Clicked);
        }}
      >
        Click
      </button>
      <label htmlFor="name">Username</label>
      <input type="text" id="name" />
    </>
  );
};

export default RulesWriting;
