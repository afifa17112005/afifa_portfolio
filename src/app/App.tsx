import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scene3D } from '@/app/components/Scene3D';
import { HomeTab } from '@/app/components/HomeTab';
import { AboutTab } from '@/app/components/AboutTab';
import { ProjectsTab } from '@/app/components/ProjectsTab';
import { SkillsTab } from '@/app/components/SkillsTab';
import { ContactTab } from '@/app/components/ContactTab';
import { Footer } from '@/app/components/Footer';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

const tabs = [
  { id: 'home', label: 'Home', icon: Home, component: HomeTab },
  { id: 'about', label: 'About', icon: User, component: AboutTab },
  { id: 'projects', label: 'Projects', icon: Briefcase, component: ProjectsTab },
  { id: 'skills', label: 'Skills', icon: Code, component: SkillsTab },
  { id: 'contact', label: 'Contact', icon: Mail, component: ContactTab }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || HomeTab;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-x-hidden">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-4 py-3 shadow-2xl">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-full transition-colors flex items-center gap-2 ${
                  activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <tab.icon className="w-5 h-5 relative z-10" />
                <span className="relative z-10 hidden md:inline">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Content */}
      <main className="relative z-10 pt-32 pb-20">
        <AnimatePresence mode="wait">
          <ActiveComponent key={activeTab} />
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none -z-5">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Scroll Indicator (only on home) */}
      {activeTab === 'home' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}