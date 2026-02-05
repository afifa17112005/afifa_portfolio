import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';

const experiences = [
  {
    title: 'AI & DATA SCIENCE INTERN',
    company: 'ARJUN VISION TECH',
    period: '12/2024 - 02/2025',
    points: [
      'Worked on data preprocessing, model building, and evaluation using ML techniques',
      'Explored deep learning and generative AI with hands-on tools',
      'Enhanced analytical and problem-solving skills in real-world projects'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'WEB DEVELOPMENT TRAINEE',
    company: 'DLK TECHNOLOGIES PVT LTD',
    period: '06/2024 - 07/2024',
    points: [
      'Built responsive websites using HTML, CSS, JavaScript',
      'Learned backend integration and fundamentals of web architecture',
      'Improved knowledge of industry practices in development'
    ],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'MACHINE LEARNING TRAINEE',
    company: 'INFOSYS SPRINGBOARD',
    period: 'Nov 2025 - Jan 2026',
    points: [
      'Completed industry-focused training in Machine Learning, covering data preprocessing, model building, and evaluation',
      'Applied ML algorithms to analyze datasets and generate predictive insights',
      'Gained hands-on experience with real-world case studies and guided projects',
      'Strengthened analytical thinking, problem-solving abilities, and understanding of AI-driven solutions'
    ],
    color: 'from-green-500 to-teal-500'
  }
];

const education = [
  {
    degree: 'B.E - COMPUTER SCIENCE AND ENGINEERING',
    institution: 'Saveetha Engineering College',
    period: '2023 - 2027',
    grade: 'CGPA: 8.4',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    degree: 'HIGHER SECONDARY (12TH)',
    institution: 'BHARATHIDHASANAR MATRIC HR. SEC. SCHOOL',
    period: '2023',
    grade: '89.66%',
    color: 'from-cyan-500 to-teal-500'
  }
];

const certifications = [
  'Google Cloud Skills Boost (20+ badges in Cloud, AI, Terraform, Security)',
  'Cloud Computing – Coursera',
  'Google – Prompt Design in Vertex AI',
  'Internet of Things (IoT) – Coursera',
  'Natural Language Processing – Coursera',
  'Deep Learning Fundamentals – Infosys Springboard'
];

export function AboutTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-300 mb-12 max-w-4xl leading-relaxed backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8"
      >
        <p className="mb-4">
          Motivated and detail-oriented third-year Computer Science Engineering student with a strong interest in Artificial Intelligence, Data Analytics, and emerging technologies. Completed internships in AI with Data Science and Digital Marketing, gaining practical exposure to real-world problem solving and collaborative work environments. Certified in IoT and Cloud Computing, with a foundational understanding of modern computing concepts.
        </p>
        <p>
          A quick learner with strong communication skills and a proactive mindset, eager to contribute to innovative projects and grow within a dynamic organization. Passionate about leveraging technology to create impactful solutions while continuously enhancing professional and interpersonal skills.
        </p>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-8 h-8 text-purple-400" />
          <h3 className="text-3xl text-white">Education</h3>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0`}>
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-white mb-1">{edu.degree}</h4>
                  <p className="text-gray-400 mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-cyan-400">{edu.period}</span>
                    <span className="text-green-400">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-8 h-8 text-cyan-400" />
          <h3 className="text-3xl text-white">Experience</h3>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}>
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-white mb-1">{exp.title}</h4>
                  <p className="text-gray-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-cyan-400 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-8 h-8 text-orange-400" />
          <h3 className="text-3xl text-white">Certifications</h3>
        </div>
        <div className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10 rounded-2xl p-8">
          <ul className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-gray-300 flex items-start gap-3"
              >
                <Award className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span>{cert}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
