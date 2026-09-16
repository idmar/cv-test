import { Award } from 'lucide-react';
import { cvData } from '@/data/cv';

const Education = () => {
  const { education } = cvData;

  return (
    <section id="education" className="section fade-in">
      <h2 className="section-title">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="card">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <Award className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-primary-900 dark:text-primary-100">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  {edu.school}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                  Graduated: {edu.graduationDate}
                </p>
                {edu.details && (
                  <ul className="mt-3 space-y-1 text-slate-700 dark:text-slate-300">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="text-sm">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
