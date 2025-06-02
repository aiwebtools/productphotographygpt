
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.2)_0%,rgba(59,130,246,0.1)_35%,rgba(6,182,212,0.15)_70%,transparent_100%)] z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cyber-background via-purple-900/10 to-transparent z-0"></div>
      
      {/* Floating divine orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-cyan-400/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-cyan-400/25 to-purple-400/25 rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12 p-10 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-cyan-500/10 border border-purple-300/20 shadow-[0_30px_80px_rgba(147,51,234,0.4)]">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 bg-clip-text text-transparent animate-glow drop-shadow-2xl">
                  Product Photography 
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-300 bg-clip-text text-transparent animate-glow drop-shadow-2xl">
                  Designer
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent animate-glow drop-shadow-2xl">
                  GPT
                </span>
              </h1>
              
              <div className="mb-10">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
                  PRODUCT PHOTOGRAPHY DESIGN 
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent animate-glow drop-shadow-lg">
                  JUST BECAME FREE
                </p>
              </div>
              
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/95 leading-relaxed font-medium">
                Transform your product photos into stunning, professional-grade advertising visuals with our AI-powered design assistant. Create high-end product images for ads, websites, social media, and more - for free.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <a 
                href="https://chatgpt.com/g/g-68135dd527dc8191b66f6fec59c6ecef-product-photography-designer-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block px-12 py-6 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-3xl border-2 border-purple-300/50 text-white font-bold text-xl hover:scale-110 transition-all duration-500 shadow-[0_15px_40px_rgba(147,51,234,0.6)] hover:shadow-[0_20px_60px_rgba(6,182,212,0.8)] backdrop-blur-md overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-cyan-300/30 to-purple-400/0 group-hover:from-purple-400/20 group-hover:via-cyan-300/50 group-hover:to-purple-400/20 transition-all duration-500"></div>
                <span className="relative z-10">USE Product Photography Designer GPT</span>
              </a>
              
              <a 
                href="#how-it-works"
                className="group relative inline-block px-12 py-6 bg-transparent rounded-3xl border-2 border-cyan-400/50 text-white font-bold text-xl hover:scale-110 transition-all duration-500 shadow-[0_15px_40px_rgba(6,182,212,0.4)] hover:shadow-[0_20px_60px_rgba(147,51,234,0.6)] backdrop-blur-md overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-purple-300/30 to-cyan-400/0 group-hover:from-cyan-400/20 group-hover:via-purple-300/50 group-hover:to-cyan-400/20 transition-all duration-500"></div>
                <span className="relative z-10">Learn How It Works</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll down indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 rounded-full border-3 border-purple-400/80 flex justify-center pt-3 backdrop-blur-sm bg-purple-500/10 shadow-[0_0_20px_rgba(147,51,234,0.6)]">
          <div className="w-2 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full animate-pulse-slow shadow-[0_0_10px_rgba(147,51,234,0.8)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
