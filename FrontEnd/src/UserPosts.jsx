// src/UserPosts.jsx

import React, { useEffect, useState } from 'react';
import { fetchUserPosts } from './api';

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!userId) return; // avoid API call if userId is not passed

    fetchUserPosts(userId)
      .then(data => setPosts(data.posts))
      .catch(err => console.error(err));
  }, [userId]);

  console.log("userId passed to UserPosts:", userId); // Debug log

  if (!userId) return <div>Please select a user to view posts.</div>;

  return (
    <div>
      <h2>Posts for User {userId}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserPosts;
