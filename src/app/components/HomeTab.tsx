import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

export function HomeTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
      >
        AFIFA A
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-2xl md:text-3xl text-gray-300 mb-4"
      >
        Computer Science Student | Full Stack, Gen AI & Cloud Enthusiast
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex items-center gap-2 text-lg text-gray-400 mb-6"
      >
        <MapPin className="w-5 h-5" />
        Chennai, India
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-lg text-gray-400 max-w-2xl mb-12"
      >
        Pre-final year student with a strong foundation in Full Stack, Gen AI, Cloud Computing, and Networking.
        Passionate about building intelligent systems and modern web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="flex gap-6 mb-12"
      >
        <motion.a
          href="mailto:aneesafifa17@gmail.com"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          Contact Me
        </motion.a>

        <motion.a
          href="https://drive.google.com/file/d/160iEJaE_aBl7qM1-0srAjAl1RMXlJFt8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Resume
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="flex gap-6"
      >
        <motion.a
          href="https://github.com/afifa17112005"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-300 hover:text-white transition-colors"
        >
          <Github className="w-8 h-8" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/afifa-a-7788362a7/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Linkedin className="w-8 h-8" />
        </motion.a>
        <motion.a
          href="mailto:aneesafifa17@gmail.com"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="text-pink-400 hover:text-pink-300 transition-colors"
        >
          <Mail className="w-8 h-8" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}