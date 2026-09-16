import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 mt-16">
      <div className="container-cv">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-700 dark:text-slate-400 text-sm">
            <p className="flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by Idmar
            </p>
          </div>
          <div className="text-slate-700 dark:text-slate-400 text-sm">
            <p>
              © {currentYear} Idmar. All rights reserved. | Powered by React + TypeScript
            </p>
          </div>
          <div className="text-slate-700 dark:text-slate-400 text-sm">
            <a
              href="#"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Privacy Policy
            </a>
            {' | '}
            <a
              href="#"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
