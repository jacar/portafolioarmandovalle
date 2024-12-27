import React from 'react';
import { Play } from 'lucide-react';

const playlists = [
  { id: 1, name: 'Discover Weekly', image: 'https://picsum.photos/200?random=1' },
  { id: 2, name: 'Release Radar', image: 'https://picsum.photos/200?random=2' },
  { id: 3, name: 'Daily Mix 1', image: 'https://picsum.photos/200?random=3' },
  { id: 4, name: 'Daily Mix 2', image: 'https://picsum.photos/200?random=4' },
  { id: 5, name: 'Daily Mix 3', image: 'https://picsum.photos/200?random=5' },
  { id: 6, name: 'Liked Songs', image: 'https://picsum.photos/200?random=6' },
];

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Good evening</h1>
      <div className="grid grid-cols-3 gap-4">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="bg-gray-800 rounded-lg p-4 flex items-center group">
            <img src={playlist.image} alt={playlist.name} className="w-16 h-16 mr-4" />
            <span className="flex-grow">{playlist.name}</span>
            <button className="bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="text-black" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
