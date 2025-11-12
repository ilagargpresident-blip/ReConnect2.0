import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 md:mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-rose-600">
        ReConnect
      </h1>
      <p className="text-lg md:text-xl text-stone-500 mt-2">
        From strangers to soulmates, let's connect again.
      </p>
    </header>
  );
};

export default Header;