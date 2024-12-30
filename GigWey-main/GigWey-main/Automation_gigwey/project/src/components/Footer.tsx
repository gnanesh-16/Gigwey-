import React from 'react';
import { Github, Twitter } from 'lucide-react';
export const runtime = "edge";
export default function Footer() {
  return (
    <footer className="bg-black py-8 px-6 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} GigWey. All rights reserved.
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#docs" className="text-gray-400 hover:text-white transition-colors">Docs</a>
          <a href="#api" className="text-gray-400 hover:text-white transition-colors">API</a>
          <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
          
          <div className="flex items-center space-x-4">
            <a href="#github" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#twitter" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}