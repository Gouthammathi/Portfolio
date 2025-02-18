import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold font-mono">Goutham Mathi</h3>
            <p className="text-sm mt-2 font-mono">Full Stack Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a href="https://github.com/gouthammathi" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:opacity-80 transition-opacity">
                GitHub
              </a>
              <a href="https://linkedin.com/in/gouthammathi" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:opacity-80 transition-opacity">
                LinkedIn
              </a>
              <a href="mailto:goouthamm@gmail.com" 
                 className="text-white hover:opacity-80 transition-opacity">
                Email
              </a>
            </div>
            <p className="text-sm font-mono text-gray-400">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer