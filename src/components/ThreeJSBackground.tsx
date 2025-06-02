
import React, { useEffect } from 'react';

const ThreeJSBackground: React.FC = () => {
  useEffect(() => {
    const createParticles = () => {
      const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Match canvas size to window
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      
      // Enhanced particle properties
      const particles: {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;
        glow: number;
        pulse: number;
        trail: { x: number; y: number; opacity: number }[];
      }[] = [];
      
      const divineColors = [
        '#9333EA', // Purple
        '#06B6D4', // Cyan
        '#8B5CF6', // Violet
        '#06D6A0', // Emerald
        '#F59E0B', // Amber
        '#EC4899', // Pink
        '#3B82F6', // Blue
        '#10B981'  // Green
      ];
      
      // Create enhanced particles
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 2,
          speedX: Math.random() * 0.8 - 0.4,
          speedY: Math.random() * 0.8 - 0.4,
          color: divineColors[Math.floor(Math.random() * divineColors.length)],
          glow: Math.random() * 20 + 10,
          pulse: Math.random() * Math.PI * 2,
          trail: []
        });
      }
      
      // Floating orbs
      const orbs: {
        x: number;
        y: number;
        size: number;
        color: string;
        speedX: number;
        speedY: number;
        opacity: number;
        pulse: number;
      }[] = [];
      
      for (let i = 0; i < 12; i++) {
        orbs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 100 + 50,
          color: divineColors[Math.floor(Math.random() * divineColors.length)],
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          opacity: Math.random() * 0.15 + 0.05,
          pulse: Math.random() * Math.PI * 2
        });
      }
      
      let time = 0;
      
      // Enhanced animation
      const animate = () => {
        requestAnimationFrame(animate);
        time += 0.01;
        
        // Create divine gradient background
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
        );
        gradient.addColorStop(0, 'rgba(147, 51, 234, 0.1)');
        gradient.addColorStop(0.3, 'rgba(59, 130, 246, 0.05)');
        gradient.addColorStop(0.6, 'rgba(6, 182, 212, 0.08)');
        gradient.addColorStop(1, 'rgba(15, 14, 23, 0.9)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw enhanced grid with divine glow
        ctx.strokeStyle = `rgba(147, 51, 234, ${0.15 + Math.sin(time * 2) * 0.05})`;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#9333EA';
        
        const gridSize = 80;
        
        // Vertical lines with shimmer
        for (let x = 0; x <= canvas.width; x += gridSize) {
          const shimmer = Math.sin(time * 3 + x * 0.01) * 0.3 + 0.7;
          ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * shimmer})`;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        
        // Horizontal lines with shimmer
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const shimmer = Math.sin(time * 3 + y * 0.01) * 0.3 + 0.7;
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * shimmer})`;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
        
        ctx.shadowBlur = 0;
        
        // Draw floating orbs with divine glow
        orbs.forEach((orb) => {
          orb.x += orb.speedX;
          orb.y += orb.speedY;
          orb.pulse += 0.02;
          
          // Wrap orbs around screen
          if (orb.x < -orb.size) orb.x = canvas.width + orb.size;
          if (orb.x > canvas.width + orb.size) orb.x = -orb.size;
          if (orb.y < -orb.size) orb.y = canvas.height + orb.size;
          if (orb.y > canvas.height + orb.size) orb.y = -orb.size;
          
          const pulsedOpacity = orb.opacity * (0.7 + Math.sin(orb.pulse) * 0.3);
          const pulsedSize = orb.size * (0.8 + Math.sin(orb.pulse * 1.5) * 0.2);
          
          // Create radial gradient for orb
          const orbGradient = ctx.createRadialGradient(
            orb.x, orb.y, 0,
            orb.x, orb.y, pulsedSize
          );
          orbGradient.addColorStop(0, orb.color.replace(')', `, ${pulsedOpacity * 0.8})`).replace('#', 'rgba(').replace(/(.{2})(.{2})(.{2})/, '$1, $2, $3'));
          orbGradient.addColorStop(0.5, orb.color.replace(')', `, ${pulsedOpacity * 0.4})`).replace('#', 'rgba(').replace(/(.{2})(.{2})(.{2})/, '$1, $2, $3'));
          orbGradient.addColorStop(1, orb.color.replace(')', ', 0)').replace('#', 'rgba(').replace(/(.{2})(.{2})(.{2})/, '$1, $2, $3'));
          
          ctx.fillStyle = orbGradient;
          ctx.beginPath();
          ctx.arc(orb.x, orb.y, pulsedSize, 0, Math.PI * 2);
          ctx.fill();
        });
        
        // Update and draw enhanced particles with trails
        particles.forEach((particle) => {
          // Add current position to trail
          particle.trail.push({ x: particle.x, y: particle.y, opacity: 1 });
          if (particle.trail.length > 8) {
            particle.trail.shift();
          }
          
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.pulse += 0.05;
          
          // Wrap particles around screen
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
          
          // Draw particle trail
          particle.trail.forEach((point, index) => {
            const trailOpacity = (index / particle.trail.length) * 0.5;
            const trailSize = particle.size * (index / particle.trail.length);
            
            ctx.shadowBlur = 15;
            ctx.shadowColor = particle.color;
            ctx.beginPath();
            ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
            ctx.fillStyle = particle.color.replace(')', `, ${trailOpacity})`).replace('#', 'rgba(').replace(/(.{2})(.{2})(.{2})/, '$1, $2, $3');
            ctx.fill();
          });
          
          // Draw main particle with enhanced glow
          const pulsedGlow = particle.glow + Math.sin(particle.pulse) * 5;
          const pulsedSize = particle.size + Math.sin(particle.pulse * 2) * 1;
          
          ctx.shadowBlur = pulsedGlow;
          ctx.shadowColor = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, pulsedSize, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Add extra glow layer
          ctx.shadowBlur = pulsedGlow * 2;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, pulsedSize * 0.5, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.shadowBlur = 0;
        });
        
        // Draw connecting lines between nearby particles
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach((otherParticle) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 150) {
              const opacity = (150 - distance) / 150 * 0.3;
              const gradient = ctx.createLinearGradient(
                particle.x, particle.y,
                otherParticle.x, otherParticle.y
              );
              gradient.addColorStop(0, particle.color.replace(')', `, ${opacity})`).replace('#', 'rgba(').replace(/(.{2})(.{2})(.{2})/, '$1, $2, $3'));
              gradient.addColorStop(1, otherParticle.color.replace(')', `, ${opacity})`).replace('#', 'rgba(').replace(/(.{2})(.{2})(.{2})/, '$1, $2, $3'));
              
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          });
        });
      };
      
      animate();
      
      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    };
    
    createParticles();
  }, []);
  
  return (
    <canvas 
      id="bg-canvas"
      className="fixed inset-0 z-0 opacity-90 pointer-events-none"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeJSBackground;
