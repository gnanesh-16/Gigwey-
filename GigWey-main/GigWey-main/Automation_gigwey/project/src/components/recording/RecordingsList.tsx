import React from 'react';
import { Play, Trash2, Clock, HardDrive } from 'lucide-react';
export const runtime = "edge";
interface Recording {
  id: string;
  name: string;
  date: string;
  duration: string;
  size: string;
}

interface RecordingsListProps {
  recordings: Recording[];
  onPlay: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function RecordingsList({ recordings, onPlay, onDelete }: RecordingsListProps) {
  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center"></h2>
      <div className="space-y-3">
        {recordings.map((recording) => (
          <div 
            key={recording.id} 
            className="group bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-white group-hover:text-orange-500 transition-colors">
                  {recording.name}
                </h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {recording.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <HardDrive className="w-4 h-4" />
                    {recording.size}
                  </div>
                  <div className="text-gray-500">{recording.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onPlay(recording.id)}
                  className="p-2 rounded-full hover:bg-white/10 text-orange-500 transition-colors"
                  title="Play recording"
                >
                  <Play className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDelete(recording.id)}
                  className="p-2 rounded-full hover:bg-white/10 text-red-500 transition-colors"
                  title="Delete recording"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}