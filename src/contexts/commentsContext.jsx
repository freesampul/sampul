import React, { createContext, useContext, useState, useEffect } from 'react';

const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
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
        setComments(data.data.children); // Adjusted to access comments correctly
      } catch (error) {
        setError(error);
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <CommentsContext.Provider value={{ comments, error }}>
      {children}
    </CommentsContext.Provider>
  );
};

export const useComments = () => useContext(CommentsContext);
