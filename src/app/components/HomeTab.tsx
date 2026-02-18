
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';


export function HomeTab() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-4 overflow-hidden">

      {/* 3D Background Sphere */}


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center w-full max-w-4xl"
      >
        {/* Name - Largest Element */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-7xl md:text-9xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-100 to-blue-200 drop-shadow-2xl"
        >
          AFIFA A
        </motion.h1>

        {/* Glowing Highlight Line */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <span className="inline-block py-1 px-4 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm text-xs md:text-sm font-light tracking-[0.2em] uppercase text-blue-300/80 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
            Artificial Intelligence • Cloud • Product Thinking
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-2xl md:text-3xl text-white/90 font-light mb-8 tracking-wide"
        >
          AI & Cloud Enthusiast | Building Scalable Intelligent Systems
        </motion.h2>

        {/* Description - Compact */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-base md:text-lg text-slate-400 max-w-xl mb-12 leading-relaxed font-light mx-auto"
        >
          Pre-final year Computer Science Engineering student specializing in Artificial Intelligence and Cloud technologies.
          Internship experience in AI & Data Science with a focus on building real-world, impactful solutions.
        </motion.p>

        {/* Location - Subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center gap-2 text-slate-600 mb-10 text-xs uppercase tracking-widest"
        >
          <MapPin className="w-3 h-3" />
          <span>Chennai, India</span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Primary Button */}
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37, 99, 235, 0.6)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white font-medium flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 transition-all text-lg tracking-wide border border-transparent hover:border-blue-400/30"
            >
              Explore Projects 🚀
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              href="https://drive.google.com/file/d/1-Qqc9uZdp9vRlYwtyZuMWUM1qaMkALRh/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-transparent border border-slate-600 hover:border-white/50 rounded-lg text-slate-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-lg tracking-wide group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Resume
            </motion.a>
          </div>

          {/* Open to Work Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex items-center gap-2 text-emerald-400/80 text-sm font-medium tracking-wide bg-emerald-400/5 px-3 py-1 rounded-full border border-emerald-400/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open to Internship Opportunities
          </motion.div>
        </motion.div>

        {/* Social Links - Minimal Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex gap-8 mt-16 opacity-40 hover:opacity-100 transition-opacity"
        >
          <a href="https://github.com/afifa17112005" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/afifa-a-7788362a7/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:aneesafifa17@gmail.com" className="text-slate-400 hover:text-pink-400 transition-colors"><Mail className="w-5 h-5" /></a>
        </motion.div>
      </motion.div>
    </div>
  );
}