import React from 'react';

const Header = () => {
  return (
    <header className="fade-in text-center py-8 bg-gray-400 shadow-md">
      <div className="profile-pic mx-auto mb-4">
        <div className="pfp-container">
            <div className="pfp-border">
                <img src="resources/pholder.png" alt="Photo" id="pfp" className="rounded-small w-16 h-16 object-cover" />
            </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold">Lin Myat Phyo</h1>
      <p className="text-lg mt-2">Welcome to my personal website!</p>
    </header>
  );
};

export default Header;