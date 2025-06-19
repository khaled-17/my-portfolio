const Hero = () => (
  <section id="hero" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-100 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-100 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>

    <div className="max-w-3xl mx-auto text-center relative z-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        <span className="gradient-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500">
          Khaled Mohamed
        </span>
      </h1>
      
      <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-up">
        Full Stack Developer
      </h2>
      
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
        Building scalable web applications with React and Node.js. Passionate about creating optimized user experiences.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-200">
        <a 
          href="#projects" 
          className="px-6 py-3 bg-indigo-600 dark:bg-indigo-700 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          aria-label="View my projects"
        >
          View Projects
        </a>
        <a 
          href="#contact" 
          className="px-6 py-3 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          aria-label="Contact me"
        >
          Contact Me
        </a>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
)

export default Hero