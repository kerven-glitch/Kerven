
import React from 'react';

interface NavbarProps {
  location?: string;
  onLogoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ location, onLogoClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={onLogoClick}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img 
            src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/ax-group-logo.png" 
            alt="Ax-Group AI Tech" 
            className="h-10 w-auto"
            onError={(e) => {
              // Fallback if image doesn't exist yet
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.querySelector('.fallback-logo')!.classList.remove('hidden');
            }}
          />
          <div className="fallback-logo hidden flex items-center gap-2">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">AX</div>
            <span className="font-bold text-slate-900 text-xl tracking-tight">Ax-Group AI Tech</span>
          </div>
        </button>

        <div className="flex items-center gap-4">
          {location && (
            <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Active in {location}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
