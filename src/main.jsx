import { useState, useEffect } from "react";
import "./main.css";
import samImage from "./sam.jpeg"; 
import depicto from "./proj-images/depicto.webp";
import doople from "./proj-images/doople.png";
import emotions from "./proj-images/emotions.png";
import git from "./proj-images/git.png";
import nsil from "./proj-images/nsil.png";
import mac from "./mac.png";

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
        <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 w-full">
          {/* Profile Image */}
          <img
            src={samImage}
            alt="Sam Pulaski"
            className="w-24 h-24 rounded-full border border-gray-500"
          />
          {/* Spacer to prevent shifting */}
          <div className="hidden md:block w-6"></div>
          {/* Text Content */}
          <div className="w-full text-center md:text-left">
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
        <div className="mt-4 w-full flex flex-col items-center text-center">
          <p className="text-gray-300">Important Info:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="mailto:sampulaski@nyu.edu" className="text-green-400 hover:underline"> Email</a>
            <a href="/resume.pdf" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer"> Resume</a>
            <a href="https://github.com/freesampul" className="text-blue-400 hover:underline"> GitHub</a>
            <a href="https://www.linkedin.com/in/sam-pulaski-3098882ba/" className="text-pink-400 hover:underline"> LinkedIn</a>
            <a href="https://instagram.com/sampulaski" className="text-green-400 hover:underline"> Instagram</a>
          </div>
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

// Separate Component for Fetching Comments
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
        setComments(data.data.children);
      } catch (error) {
        setError(error);
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="bg-gray-900 text-white p-4">
      <img src={mac} className="w-full h-auto rounded-md" alt="Mac" />
      <p className="text-center text-xl mt-2">Hi, I'm Sam</p>
      <div className="mt-4">
        {error ? (
          <p className="text-red-500">Error: {error.message}</p>
        ) : comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-700 py-2">
              <p className="text-gray-300">{comment.data.body}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Loading comments...</p>
        )}
      </div>
    </div>
  );
};

export { Main };