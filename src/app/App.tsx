
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
    <div className="min-h-screen text-white overflow-x-hidden relative selection:bg-blue-500/30">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl"
      >
        <div className="backdrop-blur-2xl bg-black/20 border border-white/10 rounded-full px-4 py-3 shadow-2xl">
          <div className="flex justify-between items-center sm:justify-center sm:gap-2 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3 sm:px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 group whitespace-nowrap ${activeTab === tab.id
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className={`relative z-10 text-sm font-medium hidden sm:inline ${activeTab === tab.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                  {tab.label}
                </span>
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-50"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl opacity-50"
        />
      </div>

    </div>
  );
}