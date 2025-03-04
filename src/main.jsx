import React, { useEffect, useState } from 'react';
import './main.css';
import mac from './mac.png';

const Main = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      const url = 'https://www.reddit.com/r/all/comments.json?limit=25';
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setComments(data);
        console.log("Parsed data:", data);
      } catch (error) {
        setError(error);
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <img src={mac} className='mac' alt='Mac'></img>
      <p>Hi, I'm Sam</p>
      <div>
        {comments.length > 0 ? (
          comments.data.children.map((comment, index) => (
            <div key={index}>
              <p>{comment.data.body}</p>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Main;
