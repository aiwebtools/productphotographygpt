
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
      className="bg-cyber-dark py-12 border-t border-cyber-purple/20 relative z-20"
      style={{ position: 'relative', zIndex: 10 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-cyber-text/70">
              PRODUCT PHOTOGRAPHY DESIGN JUST BECAME FREE
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4 neon-text-teal">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index} className="w-full">
                  <a
                    href={link.url}
                    target={link.url.startsWith('http') ? "_blank" : undefined}
                    rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-cyber-text/70 hover:text-cyber-teal transition-colors w-full block py-3 px-4 cursor-pointer"
                    onClick={(e) => console.log(`Link clicked: ${link.name}`)}
                  >
                    <div className="w-full h-full">{link.name}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4 neon-text-teal">Legal</h3>
            <ul className="space-y-2">
              <li className="w-full">
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyber-text/70 hover:text-cyber-teal transition-colors w-full block py-3 px-4 cursor-pointer"
                  onClick={(e) => console.log("Privacy Policy clicked")}
                >
                  <div className="w-full h-full">Privacy Policy</div>
                </a>
              </li>
              <li className="w-full">
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyber-text/70 hover:text-cyber-teal transition-colors w-full block py-3 px-4 cursor-pointer"
                  onClick={(e) => console.log("Terms of Service clicked")}
                >
                  <div className="w-full h-full">Terms of Service</div>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4 neon-text-teal">Contact Us</h3>
            <ul className="space-y-2">
              <li className="w-full">
                <a 
                  href="tel:+14758008096" 
                  className="text-cyber-text/70 hover:text-cyber-teal transition-colors w-full block py-3 px-4 cursor-pointer"
                  onClick={(e) => console.log("Phone number clicked")}
                >
                  <div className="w-full h-full">(475) 800-8096</div>
                </a>
              </li>
              <li className="w-full">
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-cyber-text/70 hover:text-cyber-teal transition-colors w-full block py-3 px-4 cursor-pointer"
                  onClick={(e) => console.log("Email clicked")}
                >
                  <div className="w-full h-full">Contact@ai-webtools.com</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-cyber-purple/20 flex flex-col md:flex-row justify-between items-center">
          <div>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyber-text/70 hover:text-cyber-purple transition-colors py-2 px-3 inline-block cursor-pointer"
              onClick={(e) => console.log("Copyright link clicked")}
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </div>
          
          {/* More AI Tools button */}
          <div className="mt-4 md:mt-0">
            <Button
              onClick={() => {
                console.log("More AI Tools button clicked");
                window.open("https://www.aiwebtools.ai", "_blank", "noopener,noreferrer");
              }}
              className="inline-block px-6 py-2 bg-cyber-dark rounded-full border border-cyber-purple/50 text-cyber-text hover:bg-cyber-purple/10 transition-all duration-300 shadow-[0_0_10px_rgba(127,90,240,0.3)] cursor-pointer z-20"
            >
              More AI Tools
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
