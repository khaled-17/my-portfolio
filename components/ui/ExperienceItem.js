'use client'

import { motion } from 'framer-motion'

const icons = {
  work: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M21 13.255A23.931 23.931 0 0112 15
      c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0
      00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5
      20h14a2 2 0 002-2V8a2 2 0
      00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  ),
  code: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M10 20l4-16m4 4l4 4-4 4M6
      16l-4-4 4-4" />
  ),
  education: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M12 6.253v13m0-13C10.832 5.477
      9.246 5 7.5 5S4.168 5.477 3
      6.253v13C4.168 18.477 5.754 18
      7.5 18s3.332.477 4.5 1.253m0-13C13.168
      5.477 14.754 5 16.5 5c1.747 0
      3.332.477 4.5 1.253v13C19.832
      18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  )
}

const ExperienceItem = ({ experience, index }) => {
  const colorMap = {
    indigo: {
      bg: 'bg-indigo-100 dark:bg-indigo-900/50',
      text: 'text-indigo-600 dark:text-indigo-400',
      icon: 'text-indigo-600 dark:text-indigo-300'
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900/50',
      text: 'text-purple-600 dark:text-purple-400',
      icon: 'text-purple-600 dark:text-purple-300'
    },
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/50',
      text: 'text-blue-600 dark:text-blue-400',
      icon: 'text-blue-600 dark:text-blue-300'
    }
  }

  const colors = colorMap[experience.color] || colorMap.indigo

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start">
        <div className={`${colors.bg} p-3 rounded-lg mr-4 flex-shrink-0`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${colors.icon}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {icons[experience.icon] || icons.work}
          </svg>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {experience.title}
          </h3>
          <p className={`${colors.text} font-medium`}>{experience.company}</p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {experience.description}
          </p>

          {experience.period && (
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
              {experience.period}
            </p>
          )}

          {experience.skills?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ExperienceItem
