import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 md:px-12 bg-bones-whitesmoke border-t border-bones-gainsboro">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <p className="text-sm text-bones-dimgray">
          © {new Date().getFullYear()} readerghost
        </p>
        <div>
          <a 
            href="https://links.renderg.host" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-bones-blue hover:text-bones-midnightblue transition-colors duration-200 underline"
          >
            links.renderg.host
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

