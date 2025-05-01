
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq: React.FC = () => {
  const faqs = [
    {
      question: "What is Product Photography Designer GPT?",
      answer: "Product Photography Designer GPT is an AI-powered tool that transforms your basic product photos into professional-grade advertising visuals. It uses GPT-4o Image Generation to create hyperrealistic product advertisements for various marketing purposes, including social media, websites, email campaigns, and print materials."
    },
    {
      question: "How many images do I need to upload?",
      answer: "For optimal results, we recommend uploading 2-3 clear images of your product from different angles, preferably under consistent lighting. This helps the AI understand your product's shape, texture, and details to create more accurate and realistic advertisement visuals."
    },
    {
      question: "What formats and sizes can I get for my images?",
      answer: "Product Photography Designer GPT can generate images in various formats and aspect ratios optimized for different platforms, including Instagram squares (1:1), portrait ads (4:5), website banners (16:9), email headers, posters, and more. Just specify your intended use, and the AI will create appropriately formatted visuals."
    },
    {
      question: "Can I make edits to the generated images?",
      answer: "Yes! After receiving your initial generated images, you can request adjustments such as changing the background, altering lighting conditions, adding props, modifying colors, or adjusting the composition. The AI will generate new versions based on your feedback."
    },
    {
      question: "How do I download my finished product advertisement images?",
      answer: "The AI will compile all generated images into your preferred format - either as individual image files, a downloadable PDF, or a complete campaign deck. Each image includes a seed number so it can be regenerated or modified if needed."
    },
    {
      question: "Is Product Photography Designer GPT free to use?",
      answer: "Yes, Product Photography Designer GPT is free to use. However, you'll need an OpenAI account with access to GPT-4o to utilize this tool through ChatGPT."
    },
    {
      question: "Can I use the generated images for commercial purposes?",
      answer: "Yes, all images generated are yours to use for commercial purposes. They are created specifically for your product based on your uploaded images and can be used in your marketing campaigns, websites, social media, and other commercial applications."
    },
    {
      question: "How does Product Photography Designer GPT compare to hiring a professional photographer?",
      answer: "While professional photography offers custom, hands-on shooting, Product Photography Designer GPT provides a cost-effective and quick alternative that generates high-quality, realistic product visuals. It's ideal for businesses looking to create multiple variations of product advertisements without the expense and time investment of traditional product photoshoots."
    }
  ];

  return (
    <div className="py-24 relative" id="faq">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="neon-text-purple">Frequently </span>
            <span className="neon-text-teal">Asked Questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-cyber-text/80">
            Everything you need to know about Product Photography Designer GPT
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-cyber-purple/20"
              >
                <AccordionTrigger className="text-left py-6 text-lg font-medium hover:text-cyber-teal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-cyber-text/80 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://chatgpt.com/g/g-68135dd527dc8191b66f6fec59c6ecef-product-photography-designer-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button inline-flex items-center"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faq;
