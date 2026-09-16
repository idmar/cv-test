import { useState } from 'react';
import { Download, Printer, Share2 } from 'lucide-react';

interface ActionBarProps {
  onExportPDF: () => void;
  onPrint: () => void;
}

const ActionBar = ({ onExportPDF, onPrint }: ActionBarProps) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({
        title: 'My CV',
        url,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed left-8 bottom-24 flex flex-col gap-3 z-30 md:flex hidden">
      {/* Export PDF */}
      <button
        onClick={onExportPDF}
        className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group relative"
        title="Export as PDF"
      >
        <Download size={20} />
        <span className="absolute right-16 bg-slate-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Export PDF
        </span>
      </button>

      {/* Print */}
      <button
        onClick={onPrint}
        className="p-3 bg-accent-500 hover:bg-accent-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group relative"
        title="Print CV"
      >
        <Printer size={20} />
        <span className="absolute right-16 bg-slate-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Print
        </span>
      </button>

      {/* Share */}
      <button
        onClick={handleShare}
        className="p-3 bg-slate-600 hover:bg-slate-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group relative"
        title="Share CV"
      >
        <Share2 size={20} />
        <span className="absolute right-16 bg-slate-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? 'Copied!' : 'Share'}
        </span>
      </button>
    </div>
  );
};

export default ActionBar;
