import React from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';

const NowPlaying = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://picsum.photos/60" alt="Album cover" className="w-14 h-14 mr-4" />
          <div>
            <h3 className="text-white font-semibold">Song Title</h3>
            <p className="text-gray-400 text-sm">Artist Name</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Shuffle className="text-gray-400 hover:text-white cursor-pointer" />
          <SkipBack className="text-gray-400 hover:text-white cursor-pointer" />
          <button className="bg-white rounded-full p-2">
            <Play className="text-black" />
          </button>
          <SkipForward className="text-gray-400 hover:text-white cursor-pointer" />
          <Repeat className="text-gray-400 hover:text-white cursor-pointer" />
        </div>
        <div className="w-1/4">
          {/* Placeholder for volume control */}
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
