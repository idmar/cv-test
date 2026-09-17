import { cvData } from '@/data/cv';

const Skills = () => {
  const { skills } = cvData;

  return (
    <section id="skills" className="section fade-in">
      <h2 className="section-title">Skills</h2>
      <div className="wide-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="card col-span-12 md:col-span-6 lg:col-span-3">
            <span className="data-label mb-8 block text-orange">0{index + 1} / Format</span>
            <h3 className="text-lg font-bold text-primary-900 dark:text-primary-100 mb-4">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
