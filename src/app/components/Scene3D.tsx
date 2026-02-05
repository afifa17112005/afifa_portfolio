import { motion } from 'motion/react';

export function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" />
      
      {/* Floating animated spheres */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, 30, 0],
          rotateZ: [0, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/3 right-1/4 w-80 h-80"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, -40, 0],
          rotateZ: [360, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 left-1/4 w-72 h-72"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)',
          filter: 'blur(45px)',
        }}
      />

      {/* 3D-looking geometric shapes with CSS */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '300px',
          height: '300px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Cube faces */}
        <div
          className="absolute inset-0 border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-sm"
          style={{
            transform: 'translateZ(150px)',
          }}
        />
        <div
          className="absolute inset-0 border-2 border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent backdrop-blur-sm"
          style={{
            transform: 'rotateY(90deg) translateZ(150px)',
          }}
        />
        <div
          className="absolute inset-0 border-2 border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-transparent backdrop-blur-sm"
          style={{
            transform: 'rotateY(180deg) translateZ(150px)',
          }}
        />
        <div
          className="absolute inset-0 border-2 border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-sm"
          style={{
            transform: 'rotateY(-90deg) translateZ(150px)',
          }}
        />
        <div
          className="absolute inset-0 border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm"
          style={{
            transform: 'rotateX(90deg) translateZ(150px)',
          }}
        />
        <div
          className="absolute inset-0 border-2 border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent backdrop-blur-sm"
          style={{
            transform: 'rotateX(-90deg) translateZ(150px)',
          }}
        />
      </motion.div>

      {/* Particles/Stars effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, -100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
