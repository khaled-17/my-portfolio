'use client'

import { domAnimation, LazyMotion, m } from 'framer-motion'
import React from 'react'

const Skills = () => {
  const skills = [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "PostgreSQL", level: 80, category: "Database" },
    { name: "MongoDB", level: 83, category: "Database" },
    { name: "Express.js", level: 85, category: "Backend" },
    { name: "Tailwind CSS", level: 92, category: "Styling" },
    { name: "Material UI", level: 87, category: "UI Libraries" },
    { name: "Socket.io", level: 78, category: "Realtime" },
    { name: "Git & GitHub", level: 90, category: "Version Control" },
    { name: "Chart.js / Nivo", level: 82, category: "Data Visualization" },
    { name: "OOP & Design Patterns", level: 85, category: "Concepts" }
  ]

  const additionalSkills = [
    "TypeScript", "Redux", "React Query", "Jest", "Cypress",
    "Docker", "AWS Basics", "REST APIs", "GraphQL",
    "JWT Authentication", "Agile Methodology", "CI/CD Pipelines"
  ]

  const categories = [...new Set(skills.map(skill => skill.category))]

  const MotionDiv = ({ children, ...props }) => (
    <m.div {...props}>{children}</m.div>
  )

  return (
    <LazyMotion features={domAnimation}>
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center">
              <span className="mr-3"></span> Technical Skills
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              {/* Technologies I work with daily */}
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <MotionDiv
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></span>
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map(skill => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </MotionDiv>
            ))}
          </div>

          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              🛠 Additional Tools & Concepts
            </h3>
            <div className="flex flex-wrap gap-3">
              {additionalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>
    </LazyMotion>
  )
}

export default Skills