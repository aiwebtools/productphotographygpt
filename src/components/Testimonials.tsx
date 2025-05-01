
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Product Photography Designer GPT has been a game-changer for our e-commerce business. We've increased conversion rates by 36% since upgrading our product visuals with this tool.",
      author: "Alex Chen",
      position: "E-commerce Store Owner",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&w=200"
    },
    {
      quote: "As a freelance marketer, this tool has allowed me to deliver professional-grade product visuals to my clients without hiring a photography team. The results are truly outstanding.",
      author: "Sarah Johnson",
      position: "Digital Marketing Consultant",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&w=200"
    },
    {
      quote: "We used to spend $2,000+ per product photoshoot. Now we upload a few basic photos and get better results in minutes. The ROI is incredible.",
      author: "Michael Torres",
      position: "Brand Manager, Consumer Electronics",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&w=200"
    }
  ];

  return (
    <div className="py-24 relative bg-cyber-dark">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="neon-text-magenta">What People </span>
            <span className="neon-text-teal">Are Saying</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-cyber-text/80">
            Join thousands of satisfied users transforming their product marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="cyber-card p-8 flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="text-5xl text-cyber-purple/30 font-serif mb-4">"</div>
                <p className="italic mb-6 text-cyber-text/90">{testimonial.quote}</p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-cyber-purple/30">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-cyber-text">{testimonial.author}</p>
                  <p className="text-sm text-cyber-text/60">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://chatgpt.com/g/g-68135dd527dc8191b66f6fec59c6ecef-product-photography-designer-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button inline-flex items-center"
          >
            Join Them Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
