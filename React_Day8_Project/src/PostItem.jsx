import React, { useState } from "react";

/*
  Component: PostItem
  - Props: post (object), likePost(fn), dislikePost(fn), addComment(fn)
  - Local state: commentText (useState)
  - Functions:
      submitComment() -> pushes comment to App via addComment prop
  - Event handling: onClick for like/dislike/comment, onChange for input
  - Conditional rendering: show comments list only if comments exist
*/
const PostItem = ({ post, likePost, dislikePost, addComment }) => {
  const [commentText, setCommentText] = useState("");

  // Function: submitComment()
  // Guard: ignore empty comments
  // Calls addComment(prop function) with post.id and commentText
  const submitComment = () => {
    if (commentText.trim() === "") return;
    addComment(post.id, commentText);
    setCommentText(""); // clear input
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px 0", padding: 12 }}>
      <p style={{ margin: 0 }}>{post.text}</p>

      <div style={{ marginTop: 8 }}>
        {/* Event handling: onClick uses functions from App via props */}
        <button onClick={() => likePost(post.id)}>👍 {post.likes}</button>
        <button onClick={() => dislikePost(post.id)} style={{ marginLeft: 8 }}>
          👎 {post.dislikes}
        </button>
      </div>

      <div style={{ marginTop: 10 }}>
        <input
          type="text"
          placeholder="Add a comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)} // event handler
          style={{ padding: 6, width: "70%" }}
        />
        <button onClick={submitComment} style={{ marginLeft: 8 }}>
          Comment
        </button>
      </div>

      <div style={{ marginTop: 10 }}>
        <strong>Comments:</strong>
        {/* Conditional Rendering: if no comments, show 'No comments yet' */}
        {post.comments.length === 0 ? (
          <p style={{ margin: "6px 0 0" }}>No comments yet.</p>
        ) : (
          post.comments.map((c, idx) => (
            <p key={idx} style={{ margin: "6px 0 0" }}>
              - {c}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default PostItem;
