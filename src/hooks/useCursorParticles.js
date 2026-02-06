import { useEffect } from 'react';

export function useCursorParticles() {
    useEffect(() => {
        // Only run on desktop
        if (window.innerWidth < 1024) return;

        const particles = [];
        const maxParticles = 15;

        const createParticle = (x, y) => {
            const particle = document.createElement('div');
            particle.className = 'cursor-particle';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;

            const size = Math.random() * 6 + 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            document.body.appendChild(particle);
            particles.push(particle);

            setTimeout(() => {
                particle.remove();
                const index = particles.indexOf(particle);
                if (index > -1) particles.splice(index, 1);
            }, 1000);
        };

        let lastTime = 0;
        const throttleDelay = 50;

        const handleMouseMove = (e) => {
            const currentTime = Date.now();
            if (currentTime - lastTime < throttleDelay) return;
            lastTime = currentTime;

            if (particles.length < maxParticles) {
                createParticle(e.clientX, e.clientY);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
      .cursor-particle {
        position: fixed;
        pointer-events: none;
        border-radius: 50%;
        background: linear-gradient(135deg, #06B6D4, #0EA5E9);
        box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        z-index: 9999;
        animation: particle-fade 1s ease-out forwards;
      }
      
      @keyframes particle-fade {
        0% {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(var(--tx, 0), var(--ty, 20px)) scale(0);
        }
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            particles.forEach(p => p.remove());
            style.remove();
        };
    }, []);
}
