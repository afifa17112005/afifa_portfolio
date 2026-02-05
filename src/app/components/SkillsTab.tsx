import { motion } from 'motion/react';
import {
  Code, Brain, Wrench,
  FileType, FileCode, AppWindow, Database, GitBranch,
  Search, Cpu, Globe, Layers
} from 'lucide-react';

const skillCategories = [
  {
    category: 'Programming & Development',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Python', level: 90, color: 'bg-blue-500', icon: FileType },
      { name: 'Full Stack Development', level: 85, color: 'bg-purple-500', icon: Layers },
      { name: 'C', level: 80, color: 'bg-blue-600', icon: FileCode },
      { name: 'HTML/CSS', level: 85, color: 'bg-orange-500', icon: Globe },
      { name: 'JavaScript', level: 80, color: 'bg-yellow-500', icon: FileCode }
    ]
  },
  {
    category: 'Machine Learning & AI',
    icon: Brain,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Machine Learning Fundamentals', level: 85, color: 'bg-pink-500', icon: Brain },
      { name: 'Deep Learning', level: 80, color: 'bg-purple-600', icon: Brain },
      { name: 'Scikit-learn', level: 82, color: 'bg-orange-400', icon: Database },
      { name: 'NLP', level: 75, color: 'bg-rose-500', icon: Search },
      { name: 'IoT Integration', level: 78, color: 'bg-indigo-500', icon: Cpu }
    ]
  },
  {
    category: 'Tools & Technologies',
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'MySQL', level: 85, color: 'bg-blue-600', icon: Database },
      { name: 'Pandas & NumPy', level: 88, color: 'bg-cyan-600', icon: Database },
      { name: 'Git', level: 82, color: 'bg-orange-500', icon: GitBranch },
      { name: 'Backend Integration', level: 75, color: 'bg-gray-600', icon: AppWindow }
    ]
  }
];

export function SkillsTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
      >
        Skills & Abilities
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-300 mb-12"
      >
        Technical expertise across multiple domains
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-white">{category.category}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="w-4 h-4 text-gray-400" />
                      <span className="text-white">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>

                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className={`h-full ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills & Learning */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl text-white mb-4">Core Strengths</h3>
          <ul className="space-y-3">
            {[
              'Strong problem-solving and analytical skills',
              'Data preprocessing and model building',
              'Real-time system integration',
              'Industry best practices in development'
            ].map((strength, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                className="text-gray-300 flex items-start gap-2"
              >
                <span className="text-purple-400 mt-1">✓</span>
                <span>{strength}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="backdrop-blur-md bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl text-white mb-4">Currently Pursuing</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'CCNA Certification',
              'Advanced Cloud Security',
              'Generative AI',
              'Web Architecture',
              'Advanced Networking'
            ].map((learning, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm"
              >
                {learning}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
