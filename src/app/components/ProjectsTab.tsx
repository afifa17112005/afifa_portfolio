import { motion } from 'motion/react';
import { ExternalLink, Github, Car, Heart, Trophy, Bus } from 'lucide-react';

const projects = [
  {
    title: 'IPL Win Predictor',
    description: 'Full stack web application to predict IPL match outcomes using real-time data',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'Machine Learning'],
    gradient: 'from-orange-500 to-red-500',
    icon: Trophy,
    highlights: [
      'Designed an interactive frontend and integrated it with a backend ML model',
      'Performed data analysis and preprocessing to improve model performance',
      'Demonstrated end-to-end development skills'
    ]
  },
  {
    title: 'Smart Parking System',
    description: 'Automated parking solution to detect real-time slot availability',
    tech: ['Python', 'MySQL', 'HTML', 'CSS', 'IoT', 'Sensors'],
    gradient: 'from-purple-500 to-pink-500',
    icon: Car,
    highlights: [
      'Integrated IoT sensors with a centralized database',
      'Created a responsive web interface for efficient parking management',
      'Enhanced system reliability through real-time data processing'
    ]
  },
  {
    title: 'Heart Disease Prediction System',
    description: 'Predictive model to assess heart disease risk using healthcare datasets',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning'],
    gradient: 'from-cyan-500 to-blue-500',
    icon: Heart,
    highlights: [
      'Conducted data preprocessing and feature engineering',
      'Implemented multiple ML algorithms and optimized models',
      'Generated actionable insights to support early diagnosis'
    ]
  },
  {
    title: 'Public Transport Tracking System',
    description: 'Real-time tracking system to monitor public transport locations',
    tech: ['Python', 'GPS', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    gradient: 'from-green-500 to-teal-500',
    icon: Bus,
    highlights: [
      'Integrated GPS data with a centralized database',
      'Designed a user-friendly interface for vehicle tracking',
      'Improved operational efficiency and route visibility'
    ]
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Responsive personal portfolio to showcase projects, skills, and certifications',
    tech: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-indigo-500 to-purple-500',
    icon: Github,
    highlights: [
      'Implemented intuitive navigation and modern UI principles',
      'Optimized the website for cross-device compatibility and performance',
      'Established a professional online presence'
    ]
  }
];

export function ProjectsTab() {
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
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-300 mb-12"
      >
        Real-world applications combining IoT, ML, and web technologies
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            whileHover={{ y: -10 }}
            className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            {/* Header with gradient */}
            <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center`}>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <project.icon className="w-24 h-24 text-white opacity-90" />
              </motion.div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.2 + i * 0.05 }}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm text-gray-500 mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Details
                </motion.a>
                <motion.a
                  href="https://github.com/afifa17112005"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10 rounded-2xl p-8"
      >
        <h3 className="text-2xl text-white mb-4">Project Philosophy</h3>
        <p className="text-gray-300 leading-relaxed">
          Every project is an opportunity to solve real-world problems using technology. From optimizing parking
          systems with IoT to predicting health risks with machine learning, I focus on creating practical solutions
          that make a difference. Each project teaches me something new about integrating different technologies
          and building scalable, efficient systems.
        </p>
      </motion.div>
    </motion.div>
  );
}