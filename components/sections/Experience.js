'use client'

import { motion } from 'framer-motion'
import React from 'react'

// بيانات التجارب
const experiences = [
  {
    id: 1,
    title: 'Web Developer',
    company: 'GPS Education - EL-Moasser',
    description:
      'Built responsive web interfaces using React.js and Next.js for an ed-tech platform. Implemented frontend authentication flows and integrated dynamic APIs.',
    icon: '💻',
    color: 'indigo',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Egyemp',
    description:
      'Built a recruitment platform using React.js and MUI. Developed a Node.js backend to manage user roles and authentication. Integrated Nivo Charts for data visualization.',
    icon: '🚀',
    color: 'purple',
  },
]

// مكون الكارت الواحد
const ExperienceCard = ({ exp, index }) => {
  const bgColor =
    exp.color === 'indigo'
      ? 'bg-indigo-100 dark:bg-indigo-900/50'
      : 'bg-purple-100 dark:bg-purple-900/50'

  const textColor =
    exp.color === 'indigo'
      ? 'text-indigo-700 dark:text-indigo-300'
      : 'text-purple-700 dark:text-purple-300'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${bgColor}`}
    >
      <div className="flex items-start gap-4 mb-3">
        <div className="text-2xl">{exp.icon}</div>
        <div>
          <h3 className={`text-xl font-semibold ${textColor}`}>{exp.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        {exp.description}
      </p>
    </motion.div>
  )
}

// المكون الرئيسي للسكشن
const Experience = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            🧑‍💻 Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Explore my journey in web development
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
