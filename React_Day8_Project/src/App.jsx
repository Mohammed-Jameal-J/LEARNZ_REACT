import React, { useState } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";

/*
  Component: App
  - State: posts (useState)
  - Functions:
      addPost     -> (Function) adds a new post
      likePost    -> (Function) increments likes for a post
      dislikePost -> (Function) increments dislikes for a post
      addComment  -> (Function) adds a comment to a post
  - Props passed down: addPost, posts, likePost, dislikePost, addComment
*/
const App = () => {
  // State: store all posts (each post has text, likes, dislikes, comments)
  const [posts, setPosts] = useState([]);

  // Function: addPost(text)
  // Purpose: create a new post object and add to posts array.
  // Called by: PostForm via props.
  const addPost = (text) => {
    const newPost = {
      id: Date.now(),
      text: text,
      likes: 0,
      dislikes: 0,
      comments: []
    };
    // Event + State update: setPosts to a new array including newPost
    setPosts([...posts, newPost]);
  };

  // Function: likePost(id)
  // Purpose: increment likes for the post with matching id.
  // Event: called when a like button is clicked in PostItem.
  const likePost = (id) => {
    const updated = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updated);
  };

  // Function: dislikePost(id)
  // Purpose: increment dislikes for the post with matching id.
  // Event: called when dislike button clicked.
  const dislikePost = (id) => {
    const updated = posts.map((post) =>
      post.id === id ? { ...post, dislikes: post.dislikes + 1 } : post
    );
    setPosts(updated);
  };

  // Function: addComment(id, commentText)
  // Purpose: add a comment string to the comments array of the matching post.
  // Event: called by PostItem when user submits a comment.
  const addComment = (id, commentText) => {
    const updated = posts.map((post) =>
      post.id === id
        ? { ...post, comments: [...post.comments, commentText] }
        : post
    );
    setPosts(updated);
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 20 }}>
      <h2>Post App</h2>
      <p>Total posts: {posts.length}</p> {/* simple display using state */}
      {/* Props: addPost passed to PostForm */}
      <PostForm addPost={addPost} />

      {/* Props: posts and action functions passed to PostList */}
      <PostList
        posts={posts}
        likePost={likePost}
        dislikePost={dislikePost}
        addComment={addComment}
      />
    </div>
  );
};

export default App;
