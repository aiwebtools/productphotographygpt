
import React from 'react';
import { Camera, Image, Palette, Sparkles, Layers, Download } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Camera className="text-cyber-purple h-8 w-8 mb-4" />,
      title: "Professional Photography",
      description: "Generate hyperrealistic product advertisement images that look indistinguishable from professional photography"
    },
    {
      icon: <Image className="text-cyber-teal h-8 w-8 mb-4" />,
      title: "Multiple Angles",
      description: "Upload 2-3 product images from different angles to create perfect 3D representations in various settings"
    },
    {
      icon: <Palette className="text-cyber-magenta h-8 w-8 mb-4" />,
      title: "Creative Design",
      description: "Create stunning ad visuals with perfect lighting, composition, and aesthetic consistency across all your marketing"
    },
    {
      icon: <Sparkles className="text-cyber-purple h-8 w-8 mb-4" />,
      title: "Ad-Ready Output",
      description: "Get print-quality visuals suitable for websites, social media, packaging, and storefront displays"
    },
    {
      icon: <Layers className="text-cyber-teal h-8 w-8 mb-4" />,
      title: "Multiple Formats",
      description: "Generate images in various dimensions optimized for different platforms - Instagram, websites, email campaigns"
    },
    {
      icon: <Download className="text-cyber-magenta h-8 w-8 mb-4" />,
      title: "Downloadable Results",
      description: "Receive your images compiled into downloadable PDFs or campaign decks ready for immediate use"
    }
  ];

  return (
    <div className="py-24 bg-cyber-dark relative" id="features">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="neon-text-purple">Powerful </span>
            <span className="neon-text-teal">Features</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-cyber-text/80">
            Transform ordinary product photos into extraordinary marketing assets with our advanced AI capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="cyber-card p-6 flex flex-col items-center text-center"
            >
              <div className="mb-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 neon-text-purple">{feature.title}</h3>
              <p className="text-cyber-text/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
