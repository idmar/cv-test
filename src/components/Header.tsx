import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { cvData } from '@/data/cv';

const Header = () => {
  const { personal } = cvData;

  return (
    <header className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-slate-900 dark:to-slate-800 py-16 border-b-2 border-primary-200 dark:border-primary-900">
      <div className="container-cv">
        <div className="fade-in">
          {/* Name and Title */}
          <div className="mb-4">
            <h1 className="text-5xl font-bold font-heading text-primary-900 dark:text-primary-100 mb-2">
              {personal.name}
            </h1>
            <p className="text-2xl text-primary-600 dark:text-primary-400 font-medium">
              {personal.title}
            </p>
          </div>

          {/* Bio */}
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 max-w-2xl leading-relaxed">
            {personal.bio}
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-slate-700 dark:text-slate-300">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Mail size={20} />
              <span>{personal.email}</span>
            </a>
            <div className="flex items-center gap-3">
              <MapPin size={20} />
              <span>{personal.location}</span>
            </div>
            <a
              href={`tel:${personal.phone}`}
              className="flex items-center gap-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <span>📱 {personal.phone}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            {personal.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                {link.label}
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
