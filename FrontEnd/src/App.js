// src/App.jsx

import React from 'react';
import UserPosts from './UserPosts';

function App() {
  const userId = 1; // Hardcoded for now (you can make this dynamic later)

  return (
    <div>
      <h1>Social Media Posts</h1>
      <UserPosts userId={userId} />
    </div>
  );
}

export default App;
