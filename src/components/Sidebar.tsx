import React from 'react';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 bg-black text-gray-300 p-6 flex flex-col h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Spotify</h1>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="flex items-center hover:text-white">
              <Home className="mr-4" />
              Home
            </Link>
          </li>
          <li>
            <Link href="/search" className="flex items-center hover:text-white">
              <Search className="mr-4" />
              Search
            </Link>
          </li>
          <li>
            <Link href="/library" className="flex items-center hover:text-white">
              <Library className="mr-4" />
              Your Library
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-8 space-y-4">
        <button className="flex items-center text-gray-300 hover:text-white">
          <PlusSquare className="mr-4" />
          Create Playlist
        </button>
        <button className="flex items-center text-gray-300 hover:text-white">
          <Heart className="mr-4" />
          Liked Songs
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
