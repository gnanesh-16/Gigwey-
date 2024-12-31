import React, { useState } from 'react';
import { Mail, X } from 'lucide-react';
export const runtime = "edge";

interface BetaFormProps {
  onClose: () => void;
}

export default function BetaForm({ onClose }: BetaFormProps) {
  const [email, setEmail] = useState('');
  const [canCode, setCanCode] = useState<boolean | null>(null);
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, canCode, newsletter });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />
      
      <div className="relative bg-zinc-900/90 rounded-2xl p-8 max-w-md w-full border border-white/50">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 animate-ping" />
            <div className="absolute inset-0 w-12 h-12 rounded-full bg-orange-500/40" />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-2 mt-4">Join the private beta</h2>
        <p className="text-gray-400 mb-8">
          Get early access to our revolutionary web automation platform.
          Accepted members receive an API key via email.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-white/90">Email address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/50 rounded-lg pl-10 pr-4 py-3 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-white/90">
              Can you write Python scripts?
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="canCode"
                  checked={canCode === true}
                  onChange={() => setCanCode(true)}
                  className="text-orange-500 border-white/10 focus:ring-orange-500"
                />
                <span className="text-gray-400 group-hover:text-white transition-colors">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="canCode"
                  checked={canCode === false}
                  onChange={() => setCanCode(false)}
                  className="text-orange-500 border-white/10 focus:ring-orange-500"
                />
                <span className="text-gray-400 group-hover:text-white transition-colors">No</span>
              </label>
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
              className="text-orange-500 border-white/10 rounded focus:ring-orange-500"
            />
            <span className="text-gray-400 group-hover:text-white transition-colors">
              Keep me updated about launches and events
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-medium text-white transition-colors relative group"
          >
            <span className="relative z-10">Apply for Early Access</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
          </button>
        </form>
      </div>
    </div>
  );
}