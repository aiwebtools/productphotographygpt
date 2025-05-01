
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Product Images",
      description: "Provide 2-3 clear photos of your product from different angles under consistent lighting for best results."
    },
    {
      number: "02",
      title: "Describe Your Product & Target Audience",
      description: "Tell the AI about your product, its purpose, target audience, and the marketing message you want to convey."
    },
    {
      number: "03",
      title: "Specify Usage Requirements",
      description: "Indicate where you'll use the images (Instagram, website, email, print) and provide your brand name and tagline."
    },
    {
      number: "04",
      title: "Review Generated Designs",
      description: "The AI will create multiple high-quality advertisement images with your product perfectly integrated."
    },
    {
      number: "05",
      title: "Request Adjustments (Optional)",
      description: "Ask for modifications to lighting, background, props, or other elements to perfect your visuals."
    },
    {
      number: "06",
      title: "Download Your Campaign Assets",
      description: "Receive a complete package of ad-ready images compiled into a downloadable format ready for your marketing needs."
    }
  ];

  return (
    <div className="py-24 relative bg-cyber-background" id="how-it-works">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="neon-text-teal">How It </span>
            <span className="neon-text-purple">Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-cyber-text/80">
            Creating professional product advertisements has never been easier
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-start gap-6 mb-12 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                <div className="w-16 h-16 rounded-full bg-cyber-dark flex items-center justify-center neon-border">
                  <span className="text-2xl font-bold neon-text-purple">{step.number}</span>
                </div>
              </div>
              
              <div className="w-full md:w-3/4 glass-panel p-6">
                <h3 className="text-xl font-semibold mb-3 neon-text-teal">{step.title}</h3>
                <p className="text-cyber-text/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://chatgpt.com/g/g-68135dd527dc8191b66f6fec59c6ecef-product-photography-designer-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button inline-flex items-center"
          >
            Try It Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
