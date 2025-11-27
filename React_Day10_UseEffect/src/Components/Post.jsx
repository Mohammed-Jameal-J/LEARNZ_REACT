import React from "react";
import { useEffect, useState } from "react";

const Post = () => {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // step 1: create a function to fetch data
    // step 2: call the function inside useEffect
    // step 3: add dependency array [postId] to re-fetch data when postId changes
    // wat to use without async directly in useEffect
    // setLoading(true);
    // fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPost(data);
    //     setLoading(false);
    //   });
    postRequest()
  }, [postId]);
//  using async await approach
    const postRequest=async()=>{
        setLoading(true);
        const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const data=await res.json()
        setPost(data);
        setLoading(false);
    }
  return (
    <>
      {loading && <h2>Loading...</h2>}
      {!loading && (
        <div>
          <h3>
            Post{post.id} : {post.title}
          </h3>
          <p>{post.body}</p>
          <button onClick={() => setPostId(postId - 1)} disabled={postId === 1}>
            Previous
          </button>
          <button onClick={() => setPostId(postId + 1)}>Next</button>
        </div>
      )}
    </>
  );
};

export default Post;
