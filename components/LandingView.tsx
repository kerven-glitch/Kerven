
import React from 'react';

interface LandingViewProps {
  onStart: () => void;
  location?: string;
}

const LandingView: React.FC<LandingViewProps> = ({ onStart, location }) => {
  const logoUrl = "https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/ax-group-logo.png";

  return (
    <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Top Logo Placement */}
      <div className="flex justify-center mb-10">
        <img 
          src={logoUrl} 
          alt="Ax-Group AI Tech" 
          className="h-14 md:h-18 w-auto drop-shadow-xl"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = `
              <div class="flex flex-col items-center">
                <div class="text-3xl font-black tracking-tighter text-slate-900">AX-GROUP</div>
                <div class="text-blue-600 font-bold tracking-[0.3em] text-xs -mt-1">AI TECH</div>
              </div>
            `;
          }}
        />
      </div>

      <div className="inline-flex items-center px-5 py-2.5 bg-slate-950 text-white rounded-full text-xs font-bold mb-8 tracking-widest uppercase shadow-xl shadow-slate-900/20">
        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
        Only 4 free custom patches this week – don't miss out {location ? `in ${location.split(',')[0]}` : ''}
      </div>

      <div className="mb-10">
        <h1 className="text-4xl md:text-7xl font-black text-slate-950 leading-[1.1] mb-6 tracking-tight">
          Never Lose a <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Local Lead</span> Again.
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug max-w-3xl mx-auto px-4">
          Want to see how an <span className="text-blue-600 italic">AI Revenue Patch</span> would fix your biggest revenue leak—built specifically for YOUR business?
        </h2>
      </div>

      <div className="relative mb-12 max-w-2xl mx-auto px-6">
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
          Fill out this <span className="text-slate-900 font-bold">30-second form</span> and I'll build you a custom workflow showing exactly how AI would recover revenue for your business – <span className="text-blue-600 font-bold border-b-2 border-blue-200">free, no strings</span>.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-slate-200/60 mb-16 max-w-2xl mx-auto text-left relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">WHAT'S INSIDE YOUR PATCH</h3>
            <div className="h-px flex-1 mx-6 bg-slate-100"></div>
          </div>

          <ul className="space-y-8">
            <li className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-slate-900/10 transition-transform group-hover:scale-110">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">A visual board showing your custom patch</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Detailed architecture of how AI integrates with your unique business workflow.</p>
              </div>
            </li>

            <li className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">A walkthrough explaining how it works</h4>
                <p className="text-slate-500 text-sm leading-relaxed">A video demo showcasing your AI receptionist handling complex customer inquiries.</p>
              </div>
            </li>

            <li className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-110">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">ROI breakdown showing how much your business would recover/make</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Quantifiable data on revenue saved from previously missed after-hours and overflow leads.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 pb-20">
        <button 
          onClick={onStart}
          className="group relative inline-flex items-center justify-center px-16 py-6 text-2xl font-black text-white bg-slate-950 rounded-full overflow-hidden transition-all duration-300 hover:bg-slate-900 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
        >
          <span className="relative z-10 uppercase">Generate My Blueprint</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <svg className="relative z-10 w-7 h-7 ml-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <p className="text-slate-400 font-medium text-sm italic">Limited availability for custom AI Revenue Patch builds this week.</p>
      </div>
    </div>
  );
};

export default LandingView;
