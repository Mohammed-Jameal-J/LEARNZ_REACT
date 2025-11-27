import React, { useState } from "react";

/*
  Component: PostForm
  - Local state: text (useState)
  - Props: addPost (function) — used to send new post to App
  - Function: submitPost() -> calls addPost(text) and clears the textarea
  - Event handling: onChange for textarea, onClick for Post button
*/
const PostForm = ({ addPost }) => {
  // State: store current textarea value
  const [text, setText] = useState("");

  // Function: submitPost
  // - Only runs if text is not just whitespace (guard)
  // - Calls addPost (prop function)
  const submitPost = () => {
    if (text.trim() === "") return; // disable post when empty
    addPost(text);
    setText(""); // clear textarea after posting
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <textarea
        rows="3"
        placeholder="Write something..."
        value={text} // controlled input (value from state)
        onChange={(e) => setText(e.target.value)} // event handler
        style={{ width: "100%", padding: 8 }}
      ></textarea>
      <br />
      <button onClick={submitPost} style={{ marginTop: 8 }}>
        Post
      </button>
    </div>
  );
};

export default PostForm;
