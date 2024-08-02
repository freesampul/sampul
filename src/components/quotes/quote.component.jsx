import React, { useEffect, useState } from "react";
import "./quote.styles.css";

const maxMessageLength = 250;
const url = "http://www.reddit.com/r/all/comments.json?limit=25"

const images = [
  'https://images.unsplash.com/photo-1515469037678-4d4f8288bcbe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1506354259095-f4e94f2716b0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1509595427827-45f14a172eec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1721007490150-41e3cbca6bd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1722433258015-0fa276cb3022?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1515825452884-0de18ec8d031?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1722542252078-e021d0518de0?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1701316613369-6ea5c0d96b98?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1504433374832-4fcf45f40967?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1722255564078-d854daf5fbad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1722166153862-2a853d435197?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1720462944690-8cace8bbb90c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI6fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1588713029525-f95e7652926d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1716203045277-d66881438bfb?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1611608422635-7717846960d2?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const Quote = () => {
  const [comments, setComments] = useState([]);
  const [currentQuote, setCurrentQuote] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  const fetchComments = () => {
    console.log("fetching comments...");
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        console.log("Received data:", data);
        const shortComments = data.data.children.filter(
          (comment) => comment.data.body.length < maxMessageLength
        );
        setComments(shortComments);
        console.log(`${shortComments.length} comments in queue`);
      })
      .catch(error => console.error('Error fetching comments:', error));
  };

  const showQuote = () => {
    if (comments.length > 0) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setBackgroundImage(randomImage);

      const quote = comments.pop();
      console.log("Displaying quote:", quote.data.body);
      setCurrentQuote(quote.data.body);

      if (comments.length === 0) {
        fetchComments();
      }
    }
  };

    fetchComments();
    setInterval(showQuote, 10000);

  return (
    <div
      className="quote-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="quote-loading">{comments.length === 0 ? "Loading..." : ""}</div>
      <div className="quote-text">{currentQuote}</div>
    </div>
  );
};

export default Quote;