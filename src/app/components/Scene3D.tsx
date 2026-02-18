import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Code, Database, Globe, Server, Terminal, Cpu, Cloud, Layers, Smartphone, Wifi, Lock, Monitor } from 'lucide-react';

const icons = [
  Code, Database, Globe, Server, Terminal, Cpu, Cloud, Layers, Smartphone, Wifi, Lock, Monitor
];

export function Scene3D() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Transform mouse values to parallax offsets
  // Different elements will move at different speeds/directions
  const x1 = useTransform(springX, [-0.5, 0.5], [-50, 50]);
  const y1 = useTransform(springY, [-0.5, 0.5], [-50, 50]);

  const x2 = useTransform(springX, [-0.5, 0.5], [30, -30]);
  const y2 = useTransform(springY, [-0.5, 0.5], [30, -30]);

  const x3 = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const y3 = useTransform(springY, [-0.5, 0.5], [20, -20]);

  const rotateX = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -0.5 to 0.5
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />

      {/* Falling Bubble Tool Logos - Subtle & Premium */}
      {/* Falling Bubble Tool Logos - Tiny Bubbles from Top */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const Icon = icons[i % icons.length];
          const delay = Math.random() * 20;
          const duration = 15 + Math.random() * 15; // Slower, more floaty
          const left = Math.random() * 100;
          const size = 15 + Math.random() * 15; // Tiny bubbles (15px - 30px)

          return (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm shadow-[0_0_10px_rgba(59,130,246,0.1)]"
              style={{
                left: `${left}%`,
                width: size * 2.5, // Slightly larger container for bubble effect
                height: size * 2.5,
              }}
              initial={{ y: -100, x: 0, opacity: 0 }}
              animate={{
                y: ['-10vh', '110vh'],
                x: [0, Math.random() * 30 - 15, 0], // Gentle side-to-side drift
                rotate: [0, 360],
                opacity: [0, 0.6, 0.6, 0], // Fade in/out
              }}
              transition={{
                y: {
                  duration: duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: -delay
                },
                x: {
                  duration: duration * 0.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                },
                rotate: {
                  duration: duration * 0.8,
                  repeat: Infinity,
                  ease: "linear"
                },
                opacity: {
                  duration: duration,
                  repeat: Infinity,
                  times: [0, 0.1, 0.9, 1]
                }
              }}
            >
              <Icon size={size} strokeWidth={1.5} className="text-blue-300/60" />
            </motion.div>
          );
        })}
      </div>

      {/* Floating animated spheres with Parallax - Cohesive Blue/Silver */}
      <motion.div
        style={{ x: x1, y: y1 }}
        animate={{
          y: [0, -30, 0],
          rotateZ: [0, 360],
        }}
        transition={{
          y: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "mirror"
          },
          rotateZ: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] opacity-40" // Reduced opacity & Larger
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 60%)', // Softer gradient
            filter: 'blur(100px)', // Increased blur
          }}
        />
      </motion.div>

      <motion.div
        style={{ x: x2, y: y2 }}
        animate={{
          y: [0, 40, 0],
          x: [0, 30, 0],
          rotateZ: [0, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "mirror"
        }}
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] opacity-40" // Reduced opacity
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(148, 163, 184, 0.1) 0%, transparent 60%)',
            filter: 'blur(80px)', // Increased blur
          }}
        />
      </motion.div>

      {/* Cybernetic Gyroscope (Rotating Rings) - REMOVED */}

      {/* Grid pattern overlay - Subtle Tech Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
