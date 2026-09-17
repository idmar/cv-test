import { ArrowUpRight, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/20 bg-black text-white">
      <div className="container-cv">
        <div className="mb-10 flex flex-col justify-between gap-8 border-b border-white/25 pb-8 md:flex-row md:items-end">
          <div>
            <span className="data-label text-orange">Available for considered work</span>
            <a href="#experience" className="mt-4 flex items-center gap-2 text-lg text-white hover:text-orange">
              Explore the archive <ArrowUpRight size={18} />
            </a>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            A full-stack practice built around clear systems, durable interfaces, and useful outcomes.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="display-title whitespace-nowrap text-white">IDMAR<span className="text-orange">.</span></div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-white/50 md:flex-row">
          <p className="flex items-center gap-2">Made with <Heart size={14} className="text-orange" /> by Idmar</p>
          <p>© {currentYear} / React + TypeScript / Beijing</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
