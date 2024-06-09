import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Reachout() {
  const links = [
    { icon: <FaGithub />, url: 'https://github.com/yourprofile', label: 'GitHub' },
    { icon: <FaInstagram />, url: 'https://instagram.com/yourprofile', label: 'Instagram' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourprofile', label: 'Twitter' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="w-3/4 md:w-1/2 lg:w-1/3 bg-primary p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Reach Out to Me</h2>
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li key={index} className="flex items-center justify-between text-white">
              <span className="flex items-center space-x-2">
                {link.icon}
                <span>{link.label}</span>
              </span>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Reachout;
