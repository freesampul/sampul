<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useState } from "react";
import "./main.css";
import samImage from "./sam.jpeg"; 
import depicto from "./proj-images/depicto.webp";
import doople from "./proj-images/your-image-name(2).png"; 
import emotions from "./proj-images/emotions.png";
import git from "./proj-images/git.png";
import nsil from "./proj-images/nsil.png";

export default function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    {
      title: "Depicto",
      description: "An App that turns AI-generated images into a daily guessing game",
      link: "https://depicto.ai",
      image: depicto
    },
    {
      title: "Nsilico",
      description: "Get survey answers quickly.",
      link: "https://nsilico.net",
      image: nsil
    },
    {
      title: "Git",
      description: "Working version control, from the ground up",
      link: "https://github.com/freesampul/Git",
      image: git
    },
    {
      title: "Emotional Shopping",
      description: "Product Recommendations based on your mood",
      link: "https://freesampul.github.io/EmotionalShopping/public/index.html",
      image: emotions
    },
    {
      title: "Doople",
      description: "Build an avatar with hand-drawn assets",
      link: "https://doople.netlify.app/",
      image: doople
    },
  ];
  
  return (
    <div className="bg-black text-white min-h-screen font-mono p-4 flex flex-col items-center">
      {/* Terminal Section */}
      <div className="p-6 max-w-2xl w-full mx-auto mt-6 border border-gray-700 rounded-lg shadow-lg flex flex-col items-center text-center">
        {/* User Info */}
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 w-full">
          <img
            src={samImage}
            alt="Sam Pulaski"
            className="w-24 h-24 rounded-full border border-gray-500"
          />
          <div className="mt-4 md:mt-0">
            <h1 className="text-2xl font-bold text-yellow-400">sampulaski@nyu.edu</h1>
            <p className="text-gray-300">--------------------</p>
            <p className="text-gray-400">
              Hi, I'm <span className="text-indigo-400 font-bold">Sam Pulaski</span>, a full-stack developer, <span className="text-indigo-400 font-bold">NYU</span> student, and (wannabe) entrepreneur. I'm skilled in
              <span className="text-cyan-400"> React, Node.js</span>, and improving in
              <span className="text-yellow-400"> machine learning</span>. I enjoy experimenting with <span className="text-indigo-400"> creative coding</span>.
            </p>
            <p className="text-gray-400 mt-2">
              Passionate about <span className="text-red-400"> web development </span> and crafting
              <span className="text-green-400"> interactive experiences</span>.
            </p>
          </div>
        </div>

        {/* Contact & Links */}
        <div className="mt-4 w-full">
          <p className="text-gray-300">Important Info:</p>
          <p className="flex flex-wrap justify-center gap-2">
            <a href="mailto:sampulaski@nyu.edu" className="text-green-400 hover:underline"> Email</a>
            <a href="/" className="text-blue-400 hover:underline"> Resume</a>
            <a href="https://github.com/freesampul" className="text-blue-400 hover:underline"> GitHub</a>
            <a href="https://www.linkedin.com/in/sam-pulaski-3098882ba/" className="text-pink-400 hover:underline"> LinkedIn</a>
            <a href="https://instagram.com/sampulaski" className="text-green-400 hover:underline"> Instagram</a>
          </p>
        </div>

        {/* Projects Section Toggle */}
        <div className="mt-4">
          <button
            className="text-gray-300 hover:text-white"
            onClick={() => setShowProjects(!showProjects)}
          >
            {showProjects ? "Hide Projects" : "Show Projects"}
          </button>
        </div>
      </div>

      {/* Projects Section */}
      {showProjects && (
        <div className="mt-6 max-w-2xl w-full mx-auto border border-gray-700 rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-bold text-yellow-400 text-center">Projects</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="border-b border-gray-600 py-4 flex flex-col items-center text-center">
                {project.image && (
                  <img src={project.image} alt={project.title} className="w-24 h-24 rounded-lg border border-gray-500 mb-2" />
                )}
                <div>
                  <h3 className="text-blue-400 text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
=======
>>>>>>> resume-fix
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
<<<<<<< HEAD
=======
>>>>>>> b7a6812 (:))
>>>>>>> resume-fix
