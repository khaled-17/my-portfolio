const ProjectCard = ({ project }) => (
  <div className="project-card bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300">
    <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
      <span className="text-white text-2xl font-bold">{project.title.split(' ')[0]}</span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span 
            key={index} 
            className={`px-3 py-1 bg-${tag.toLowerCase()}-100 text-${tag.toLowerCase()}-800 text-xs font-medium rounded-full`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
)

export default ProjectCard