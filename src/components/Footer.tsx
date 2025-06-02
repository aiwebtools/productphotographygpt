
import React from 'react';
import Logo from './Logo';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  const navLinks = [
    {
      name: "USE Product Photography Designer GPT",
      url: "https://chatgpt.com/g/g-68135dd527dc8191b66f6fec59c6ecef-product-photography-designer-gpt",
      isPrimary: true,
    },
    { 
      name: "AD AND LOGO DESIGN GPT", 
      url: "https://adandlogomakergpt.lovable.app/?via=aiwebtools", 
      isPrimary: false 
    },
    { 
      name: "GRAPHIC & COVER DESIGNER GPT", 
      url: "https://graphicdesigngpt.lovable.app/?via=aiwebtools", 
      isPrimary: false 
    },
    { name: "Disclaimer", url: "#disclaimer", isPrimary: false },
    { name: "More AI Tools", url: "https://www.aiwebtools.ai", isPrimary: false },
  ];

  return (
    <footer 
      className="bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30 py-16 border-t border-gradient-to-r from-purple-500/40 via-cyan-400/40 to-purple-500/40 relative z-50 backdrop-blur-md"
      style={{ 
        position: 'relative', 
        zIndex: 50,
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 35%, rgba(6, 182, 212, 0.3) 70%, rgba(147, 51, 234, 0.3) 100%)',
        boxShadow: '0 -20px 40px rgba(147, 51, 234, 0.3), 0 -10px 80px rgba(6, 182, 212, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-cyan-400/10 animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15)_0%,transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and tagline */}
          <div className="md:col-span-1 transform hover:scale-105 transition-all duration-500">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-400/20 backdrop-blur-md border border-purple-300/30 shadow-[0_8px_32px_rgba(147,51,234,0.3)]">
              <Logo />
              <p className="mt-6 text-base text-white/90 font-medium bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
                PRODUCT PHOTOGRAPHY DESIGN JUST BECAME FREE
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent animate-glow">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index} className="w-full">
                  <a
                    href={link.url}
                    target={link.url.startsWith('http') ? "_blank" : undefined}
                    rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="group w-full block p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-400/10 border border-purple-300/20 hover:border-cyan-300/50 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(6,182,212,0.4)] hover:scale-105 cursor-pointer backdrop-blur-sm"
                    onClick={(e) => console.log(`Link clicked: ${link.name}`)}
                    style={{ position: 'relative', zIndex: 51 }}
                  >
                    <div className="text-white/90 group-hover:text-white transition-colors duration-300 font-medium">
                      {link.name}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-cyan-400/0 to-purple-400/0 group-hover:from-purple-400/10 group-hover:via-cyan-400/20 group-hover:to-purple-400/10 rounded-xl transition-all duration-500"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent animate-glow">
              Legal
            </h3>
            <ul className="space-y-4">
              <li className="w-full">
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-full block p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-400/10 border border-cyan-300/20 hover:border-purple-300/50 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(147,51,234,0.4)] hover:scale-105 cursor-pointer backdrop-blur-sm"
                  onClick={(e) => console.log("Privacy Policy clicked")}
                  style={{ position: 'relative', zIndex: 51 }}
                >
                  <div className="text-white/90 group-hover:text-white transition-colors duration-300 font-medium">
                    Privacy Policy
                  </div>
                </a>
              </li>
              <li className="w-full">
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-full block p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-400/10 border border-purple-300/20 hover:border-cyan-300/50 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(6,182,212,0.4)] hover:scale-105 cursor-pointer backdrop-blur-sm"
                  onClick={(e) => console.log("Terms of Service clicked")}
                  style={{ position: 'relative', zIndex: 51 }}
                >
                  <div className="text-white/90 group-hover:text-white transition-colors duration-300 font-medium">
                    Terms of Service
                  </div>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent animate-glow">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="w-full">
                <a 
                  href="tel:+14758008096" 
                  className="group w-full block p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-400/10 border border-purple-300/20 hover:border-cyan-300/50 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(6,182,212,0.4)] hover:scale-105 cursor-pointer backdrop-blur-sm"
                  onClick={(e) => console.log("Phone number clicked")}
                  style={{ position: 'relative', zIndex: 51 }}
                >
                  <div className="text-white/90 group-hover:text-white transition-colors duration-300 font-medium">
                    (475) 800-8096
                  </div>
                </a>
              </li>
              <li className="w-full">
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="group w-full block p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-400/10 border border-cyan-300/20 hover:border-purple-300/50 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(147,51,234,0.4)] hover:scale-105 cursor-pointer backdrop-blur-sm"
                  onClick={(e) => console.log("Email clicked")}
                  style={{ position: 'relative', zIndex: 51 }}
                >
                  <div className="text-white/90 group-hover:text-white transition-colors duration-300 font-medium">
                    Contact@ai-webtools.com
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gradient-to-r from-purple-400/30 via-cyan-400/30 to-purple-400/30 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-block p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-400/20 border border-purple-300/30 hover:border-cyan-300/50 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(6,182,212,0.4)] hover:scale-105 cursor-pointer backdrop-blur-sm"
              onClick={(e) => console.log("Copyright link clicked")}
              style={{ position: 'relative', zIndex: 51 }}
            >
              <div className="text-white/90 group-hover:text-white transition-colors duration-300 font-medium">
                © 2025 AI WEB TOOLS LLC All rights reserved.
              </div>
            </a>
          </div>
          
          {/* More AI Tools button */}
          <div>
            <Button
              onClick={() => {
                console.log("More AI Tools button clicked");
                window.open("https://www.aiwebtools.ai", "_blank", "noopener,noreferrer");
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-2xl border-2 border-purple-300/50 text-white font-bold text-lg hover:scale-110 transition-all duration-500 cursor-pointer shadow-[0_8px_32px_rgba(147,51,234,0.4)] hover:shadow-[0_12px_48px_rgba(6,182,212,0.6)] backdrop-blur-md overflow-hidden"
              style={{ position: 'relative', zIndex: 51 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-cyan-300/30 to-purple-400/0 group-hover:from-purple-400/20 group-hover:via-cyan-300/50 group-hover:to-purple-400/20 transition-all duration-500"></div>
              <span className="relative z-10">More AI Tools</span>
            </Button>
          </div>
        </div>
        
        {/* Educational disclaimer */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-400/10 border border-purple-300/20 backdrop-blur-md">
            <p className="text-white/70 text-sm font-medium">
              For informational, educational, and research purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
