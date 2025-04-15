import React, { useState, useEffect } from 'react';

function GetData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://20.244.56.144/evaluation-service/users')
     .then(response => response.json())
     .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}