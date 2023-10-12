"use client"

import { useEffect, useRef } from 'react';


interface MousePosition {
  x: number | undefined;
  y: number | undefined;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  update: () => void;
  draw: () => void;
}

export default function Cursor(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesArrayRef = useRef<Particle[]>([]);
  let hue = 0;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse: MousePosition = {
      x: undefined,
      y: undefined,
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleClick = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
      for (let i = 0; i < 10; i++) {
        particlesArrayRef.current.push(new Particle());
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
      for (let i = 0; i < 5; i++) {
        particlesArrayRef.current.push(new Particle());
      }
    };

    class Particle implements Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      constructor() {
        this.x = mouse.x!;
        this.y = mouse.y!;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${hue}, 100%, 50%)`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.15;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < 100; i++) {
        particlesArrayRef.current.push(new Particle());
      }
    };

    init();

    const handleParticles = () => {
      for (let i = 0; i < particlesArrayRef.current.length; i++) {
        particlesArrayRef.current[i].update();
        particlesArrayRef.current[i].draw();

        if (particlesArrayRef.current[i].size <= 0.3) {
          particlesArrayRef.current.splice(i, 1);
          i--;
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      hue += 5;
      requestAnimationFrame(animate);
    };

    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas  id='#canvas' ref={canvasRef}></canvas>
    </div>
  );
}