import React from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black bg-opacity-60">
      <div className="flex space-x-4">
        <button className="bg-black rounded-full p-1">
          <ChevronLeft className="text-white" />
        </button>
        <button className="bg-black rounded-full p-1">
          <ChevronRight className="text-white" />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-white text-black font-bold py-2 px-4 rounded-full">
          Upgrade
        </button>
        <button className="bg-black rounded-full p-1">
          <User className="text-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;
