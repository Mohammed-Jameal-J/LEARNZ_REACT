import React from "react";
import PostItem from "./PostItem";

/*
  Component: PostList
  - Props: posts (array), likePost (fn), dislikePost (fn), addComment (fn)
  - Purpose: loop through posts and render a PostItem for each
  - No local state here: purely presentational + passes props down
*/
const PostList = ({ posts, likePost, dislikePost, addComment }) => {
  if (posts.length === 0) {
    // Conditional rendering: if no posts, show a friendly message
    return <p>No posts yet. Be the first to post!</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          likePost={likePost}
          dislikePost={dislikePost}
          addComment={addComment}
        />
      ))}
    </div>
  );
};

export default PostList;
