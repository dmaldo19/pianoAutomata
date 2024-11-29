import React from 'react';
import { Play } from 'lucide-react';

interface MusicNoteProps {
  note: string;
  onPlay: () => void;
}

export const MusicNote: React.FC<MusicNoteProps> = ({ note, onPlay }) => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-6 text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Nota Actual</h3>
      <div className="text-4xl font-bold text-indigo-600 mb-4">{note}</div>
      <button
        onClick={onPlay}
        className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <Play className="h-5 w-5" />
        <span>Reproducir Nota</span>
      </button>
    </div>
  );
};