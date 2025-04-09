import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-8 px-6 md:px-12 bg-bones-whitesmoke border-b border-bones-gainsboro">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif text-bones-black mb-2">
          readerghost
        </h1>
        <p className="text-lg md:text-xl text-bones-dimgray font-sans">
          20 recommendations for books to read
        </p>
      </div>
    </header>
  );
};

export default Header;

