
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-cyber-radial z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cyber-background to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="neon-text-purple">Product Photography </span>
              <span className="neon-text-teal">Designer</span>
              <span className="neon-text-magenta"> GPT</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-cyber-text/90">
              PRODUCT PHOTOGRAPHY DESIGN <span className="neon-text-teal">JUST BECAME FREE</span>
            </p>
            
            <p className="md:text-lg mb-12 max-w-3xl mx-auto">
              Transform your product photos into stunning, professional-grade advertising visuals with our AI-powered design assistant. Create high-end product images for ads, websites, social media, and more - for free.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="https://chatgpt.com/g/g-68135dd527dc8191b66f6fec59c6ecef-product-photography-designer-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button text-center"
              >
                USE Product Photography Designer GPT
              </a>
              
              <a 
                href="#how-it-works"
                className="cyber-button cyber-button-secondary text-center"
              >
                Learn How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cyber-purple flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyber-purple rounded-full animate-pulse-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
