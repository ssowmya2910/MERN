import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UseEffectAPI = () => {
  var [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("couldn't read the API", err));
  }, []);
  return (
    <div>
      <h1>useEffectAPI</h1>
      <h2>fetching data from API</h2>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
      <button
        onClick={() => {
          console.log("Button clicked:)");
        }}
      >
        button
      </button>
    </div>
  );
};

export default UseEffectAPI;
