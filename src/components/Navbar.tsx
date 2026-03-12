
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { name: "More AI Tools", url: "https://aiwebtools.lovable.app/?via=aiwebtools", isPrimary: false },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'cyber-blur py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? "_blank" : undefined}
                rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                className={link.isPrimary 
                  ? "cyber-button"
                  : "text-cyber-text hover:text-cyber-teal transition-colors"
                }
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-cyber-text hover:text-cyber-purple transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden cyber-blur overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100 mt-2 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? "_blank" : undefined}
              rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
              className={`block text-sm ${link.isPrimary 
                ? "cyber-button w-full text-center"
                : "text-cyber-text hover:text-cyber-teal transition-colors py-2"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
