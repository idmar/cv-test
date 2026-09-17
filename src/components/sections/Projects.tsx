import { ExternalLink, Github } from 'lucide-react';
import { cvData } from '@/data/cv';

const Projects = () => {
  const { projects } = cvData;

  return (
    <section id="projects" className="section section-dark fade-in">
      <h2 className="section-title">Projects</h2>
      <div className="wide-grid">
        {projects.map((project, index) => (
          <div key={index} className="card col-span-12 md:col-span-6 lg:col-span-4 flex flex-col">
            <span className="data-label mb-8 text-orange">0{index + 1} / Package</span>
            <h3 className="text-xl font-bold text-primary-900 dark:text-primary-100 mb-2">
              {project.title}
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4 flex-grow">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary flex-1 justify-center"
                >
                  <ExternalLink size={16} />
                  Visit
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary flex-1 justify-center"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
