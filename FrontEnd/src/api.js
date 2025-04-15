// src/api.js

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0NzAxMjQ4LCJpYXQiOjE3NDQ3MDA5NDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjFhOTlmNTJjLTc1Y2EtNDE2YS1iODExLTVhNDA1NDRiZDk5MiIsInN1YiI6ImFybWFhbjE1OC5iZTIyQGNoaXRrYXJhLmVkdS5pbiJ9LCJlbWFpbCI6ImFybWFhbjE1OC5iZTIyQGNoaXRrYXJhLmVkdS5pbiIsIm5hbWUiOiJhcm1hYW4gc2hhcm1hIiwicm9sbE5vIjoiMjIxMDk5MDE1OCIsImFjY2Vzc0NvZGUiOiJQd3p1ZkciLCJjbGllbnRJRCI6IjFhOTlmNTJjLTc1Y2EtNDE2YS1iODExLTVhNDA1NDRiZDk5MiIsImNsaWVudFNlY3JldCI6ImFVYXlqc2ZzemNybVBmZXAifQ.CSSkFXyfXGcRMr2zVh0fMS1kV2gjR4oamYngTCnCL5g"; // your full token

export const fetchUsers = async () => {
  const response = await fetch('http://20.244.56.144/evaluation-service/users', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  return response.json();
};

export const fetchUserPosts = async (userId) => {
  const response = await fetch(`http://20.244.56.144/evaluation-service/users/${userId}/posts`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch posts for user ${userId}`);
  }

  return response.json(); // returns { posts: [...] }
};
