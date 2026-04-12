import { useState } from "react";
import "./main.css";
import samImage from "./sam.jpeg";
import depicto from "./proj-images/depicto.webp";
import doople from "./proj-images/doople.png";
import emotions from "./proj-images/emotions.png";
import git from "./proj-images/git.png";
import nsil from "./proj-images/nsil.png";

export default function Portfolio() {
  const [showProjects, setShowProjects] = useState(true);

  const projects = [
    {
      title: "Depicto",
      description: "Daily AI-generated image guessing game — hit 48% day-30 retention, 6× the industry average.",
      link: "https://depicto.ai",
      image: depicto
    },
    {
      title: "Nsilico",
      description: "AI-powered survey response generation — persona-based answers at scale.",
      link: "https://nsilico.net",
      image: nsil
    },
    {
      title: "Git",
      description: "VCS built from scratch in Java — SHA-1 hashing, blob/tree/commit model, branching, and merge.",
      link: "https://github.com/freesampul/Git",
      image: git
    },
    {
      title: "Emotional Shopping",
      description: "Real-time emotion-driven product recommendations via facial expression detection with Face-api.js.",
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
              Hi, I'm <span className="text-indigo-400 font-bold">Sam Pulaski</span> — a full-stack developer, <span className="text-indigo-400 font-bold">NYU</span> CS student, and builder. Most recently I interned at <span className="text-blue-400 font-bold">Ticketmaster</span> on the Demand team, scaling SMS workflows to 200K+ messages/day and rebuilding internal tools in React and GraphQL. I like building things that are fast, useful, and occasionally weird.
            </p>
            <p className="text-gray-400 mt-2">
              Currently: <span className="text-green-400">open to summer 2026 internships</span>. Feel free to reach out.
            </p>
          </div>
        </div>

        {/* Contact & Links */}
        <div className="mt-4 w-full flex flex-col items-center text-center">
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="mailto:sampulaski@nyu.edu" className="text-green-400 hover:underline"> Email</a>
            <a href="/resume.pdf" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer"> Resume</a>
            <a href="https://github.com/freesampul" className="text-blue-400 hover:underline"> GitHub</a>
            <a href="https://www.linkedin.com/in/sam-pulaski-3098882ba/" className="text-pink-400 hover:underline"> LinkedIn</a>

          </div>
        </div>

        {/* Projects Section Toggle */}

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

      {/* Awards and Accolades Section */}
      <div className="mt-6 max-w-2xl w-full mx-auto border border-gray-700 rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold text-yellow-400 text-center mb-4">Awards and Accolades</h2>
        <div className="space-y-3 text-center">
          <div className="text-gray-300">
            Leadership award - 4th grade class
          </div>
          <div className="text-gray-300">
            "The most handsome boy on earth" - Mom
          </div>
          <div className="text-gray-300">
            "Most I've ever seen anyone eat" - Buffalo Wild Wings waiter, all you can eat promotion
          </div>
        </div>
      </div>
    </div>
  );
}
