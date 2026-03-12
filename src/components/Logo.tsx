
import React from 'react';
import { Camera } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Camera size={28} className="text-cyber-purple" />
        <div className="absolute inset-0 blur-sm opacity-70 text-cyber-purple">
          <Camera size={28} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight neon-text-purple">
          Product Photography Designer GPT
        </span>
        <span className="text-xs text-cyber-text/70">
          Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-teal transition-colors">AiWebTools.Ai</a>
        </span>
      </div>
    </div>
  );
};

export default Logo;
