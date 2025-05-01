
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ConsentPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('disclaimerConsent');
    if (!hasConsented) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimerConsent', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-cyber-dark border border-cyber-purple/50 text-cyber-text max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold neon-text-purple">Important Notice</DialogTitle>
          <DialogDescription className="text-cyber-text/80">
            Before using Product Photography Designer GPT
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <p className="mb-4 text-cyber-text/90">
            By accessing and using this service, you acknowledge and agree to the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-cyber-text/80">
            <li>You have legitimate rights to use all images you upload</li>
            <li>Generated content is for your personal or commercial use</li>
            <li>Results may vary based on input quality and specificity</li>
            <li>You accept our full legal disclaimer and terms of service</li>
          </ul>
        </div>

        <DialogFooter>
          <Button 
            onClick={handleAccept}
            className="bg-cyber-purple hover:bg-cyber-dark-purple text-white w-full"
          >
            I AGREE
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConsentPopup;
