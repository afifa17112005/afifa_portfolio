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

      {/* Falling Bubble Tool Logos - Professional Silver/Blue */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => {
          const Icon = icons[i % icons.length];
          const delay = Math.random() * 20;
          const duration = 20 + Math.random() * 10;
          const left = Math.random() * 100;
          const size = 30 + Math.random() * 20; // Varied bubble sizes

          return (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center rounded-full bg-slate-900/10 border border-slate-600/10 backdrop-blur-[1px] shadow-sm text-slate-500/20"
              style={{
                left: `${left}%`,
                width: size * 2,
                height: size * 2,
                boxShadow: `0 0 10px rgba(56, 189, 248, 0.05)` // Extremely subtle glow
              }}
              initial={{ y: -100, x: 0, opacity: 0 }}
              animate={{
                y: ['-10vh', '110vh'],
                x: [0, Math.random() * 50 - 25, 0], // Swaying motion
                rotate: [0, 360], // Gentle rotation
                opacity: [0, 1, 1, 0], // Fade in/out
              }}
              transition={{
                y: {
                  duration: duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: -delay
                },
                x: {
                  duration: duration * 0.5, // Sway faster than fall
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                },
                rotate: {
                  duration: duration * 1.5,
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
              <Icon size={size} strokeWidth={1} />
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
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 opacity-60"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)', // Blue
            filter: 'blur(60px)',
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
        className="absolute top-1/3 right-1/4 w-80 h-80 opacity-60"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(148, 163, 184, 0.15) 0%, transparent 70%)', // Silver
            filter: 'blur(50px)',
          }}
        />
      </motion.div>

      {/* Cybernetic Gyroscope (Rotating Rings) - Professional Metallic */}
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative w-[300px] h-[300px] flex items-center justify-center transform-style-3d perspective-1000">
          {/* Ring 1 - Outer (Silver/Blue) */}
          <motion.div
            animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] rounded-full border border-slate-500/20 border-t-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
          />

          {/* Ring 2 - Middle (Blue/Silver) */}
          <motion.div
            animate={{ rotateX: [360, 0], rotateY: [360, 0], rotateZ: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[220px] h-[220px] rounded-full border border-blue-500/20 border-b-slate-300/50 shadow-[0_0_15px_rgba(148,163,184,0.1)]"
          />

          {/* Ring 3 - Inner (Highlights) */}
          <motion.div
            animate={{ rotateX: [0, 360], rotateY: [360, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[150px] h-[150px] rounded-full border border-slate-400/30 border-l-blue-400/60"
          />

          {/* Core Core (Pulsing Blue) */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.8)]"
          />
        </div>
      </motion.div>

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
