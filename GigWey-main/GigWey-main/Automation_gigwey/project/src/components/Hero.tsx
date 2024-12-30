import React, { useState } from 'react';
import { Play, MousePointer2, Cpu, Zap, Network, ListVideo } from 'lucide-react';
import Container from './layout/Container';
import RecordingStatus from './recording/RecordingStatus';
import RecordingsList from './recording/RecordingsList';
import Infographic from './infographics/Infographic';
export const runtime = "edge";
export default function Hero() {
  const [isRecording, setIsRecording] = useState(false);
  const [showRecordings, setShowRecordings] = useState(false);
  const [recordings, setRecordings] = useState([
    {
      id: '1',
      name: 'Login Automation',
      date: new Date().toLocaleString(),
      duration: '00:45',
      size: '1.2 MB'
    }
  ]);

  const handleStartRecording = () => {
    setIsRecording(true);
    setShowRecordings(false);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    const newRecording = {
      id: Date.now().toString(),
      name: `Recording ${recordings.length + 1}`,
      date: new Date().toLocaleString(),
      duration: '00:00',
      size: '0.6 MB'
    };
    setRecordings([...recordings, newRecording]);
  };

  const handleDeleteRecording = (id: string) => {
    setRecordings(recordings.filter(rec => rec.id !== id));
  };

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,77,0,0.08),transparent_50%)]" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float-slow opacity-60">
          <MousePointer2 className="w-16 h-16 text-orange-500/20" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed opacity-40">
          <Cpu className="w-24 h-24 text-orange-500/10" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float opacity-50">
          <Zap className="w-20 h-20 text-orange-500/15" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-float-delayed opacity-30">
          <Network className="w-28 h-28 text-orange-500/10" />
        </div>
      </div>

      {/* Main Content */}
      <Container className="relative pt-32 pb-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-7xl sm:text-8xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
                Web Automation
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="animate-gradient-x text-6xl sm:text-7xl">Reimagined</span>
                <div className="absolute -inset-x-6 -inset-y-4 bg-orange-500/20 blur-2xl -z-10" />
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto animate-fade-in">
              Automate your web workflows with pixel-perfect precision and 
              <span className="text-orange-500"> AI-powered intelligence</span>
            </p>

            <div className="pt-8 flex items-center justify-center gap-4">
              <button
                onClick={handleStartRecording}
                className="group relative inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5" />
                <span className="font-medium">Start Recording</span>
                <div className="absolute -inset-0.5 rounded-full bg-orange-500/50 blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                onClick={() => setShowRecordings(true)}
                className="group relative inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 border border-white/10"
              >
                <ListVideo className="w-5 h-5" />
                <span className="font-medium">View Recordings</span>
              </button>
            </div>
          </div>

          {/* Recordings List or Infographic */}
          <div className="mt-32 w-full">
            {showRecordings ? (
              <RecordingsList
                recordings={recordings}
                onPlay={(id) => console.log('Playing', id)}
                onDelete={handleDeleteRecording}
              />
            ) : (
              <Infographic />
            )}
          </div>
        </div>
      </Container>

      {/* Recording Status */}
      {isRecording && (
        <RecordingStatus
          duration="00:00:01"
          actions={1}
          size="0.6 MB"
          onPause={() => console.log('Paused')}
          onStop={handleStopRecording}
        />
      )}
    </main>
  );
}