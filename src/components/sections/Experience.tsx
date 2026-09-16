import { Calendar, Building2 } from 'lucide-react';
import { cvData } from '@/data/cv';

const Experience = () => {
  const { experience } = cvData;

  return (
    <section id="experience" className="section fade-in">
      <h2 className="section-title">Work Experience</h2>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <div key={index} className="card">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-primary-900 dark:text-primary-100">
                  {job.position}
                </h3>
                <p className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium mt-1">
                  <Building2 size={16} />
                  {job.company}
                </p>
              </div>
            </div>

            {/* Date Range */}
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm mb-4">
              <Calendar size={16} />
              <span>
                {job.startDate} - {job.endDate}
              </span>
            </div>

            {/* Description */}
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mb-4">
              {job.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Highlights/Tags */}
            {job.highlights && (
              <div className="flex flex-wrap gap-2">
                {job.highlights.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
