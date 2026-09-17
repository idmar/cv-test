import { Mail, MapPin, ExternalLink, ArrowDownRight } from 'lucide-react';
import { cvData } from '@/data/cv';

const Header = () => {
  const { personal } = cvData;

  return (
    <header className="relative overflow-hidden bg-black text-white">
      <div className="container-cv min-h-[calc(100vh-5rem)] flex flex-col justify-between">
        <div className="fade-in">
          <div className="mb-8 flex items-center justify-between border-b border-white/25 pb-4 text-xs text-green">
            <span className="data-label">01 / Independent Digital Operator</span>
            <span className="data-label">Beijing / UTC+8</span>
          </div>

          <div className="wide-grid items-end gap-y-10">
            <div className="col-span-12 lg:col-span-9">
              <p className="data-label mb-5 text-orange">{personal.title}</p>
              <h1 className="display-title text-white">{personal.name}</h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                {personal.bio}
              </p>
            </div>
            <div className="col-span-12 flex justify-start lg:col-span-3 lg:justify-end">
              <div className="coffee-cup" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden border-y border-white/25 py-4 text-xs text-white/60">
          <div className="marquee flex gap-10">
            <span>React / TypeScript / Performance / Systems / Collaboration / </span>
            <span>React / TypeScript / Performance / Systems / Collaboration / </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/25 pt-6 text-sm text-white/70 md:flex-row md:items-end">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a href={`mailto:${personal.email}`} className="flex items-center gap-2 hover:text-orange">
              <Mail size={16} /> {personal.email}
            </a>
            <span className="flex items-center gap-2"><MapPin size={16} /> {personal.location}</span>
          </div>
          <a href="#experience" className="flex items-center gap-2 text-orange">
            Scroll to explore <ArrowDownRight size={18} />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {personal.links.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="button-primary">
              {link.label} <ExternalLink size={14} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
