
import React from 'react';
import { AnalysisResult, FormData } from '../types.ts';

interface ResultViewProps {
  analysis: AnalysisResult;
  formData: FormData;
  onReset: () => void;
  location?: string;
}

const ResultView: React.FC<ResultViewProps> = ({ analysis, formData, onReset, location }) => {
  const deliveryMsg = formData.deliveryPreference === 'email' 
    ? `We've sent a confirmation to ${formData.email}.`
    : `We've sent a WhatsApp confirmation to ${formData.phone}.`;

  const userCity = location?.split(',')[0] || 'your area';

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-700">
      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-8 flex items-center gap-4 shadow-sm">
        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-emerald-900 text-lg">Strategy Blueprint Reserved!</h3>
          <p className="text-emerald-700 text-sm">{deliveryMsg} Our team is now building your custom ROI breakdown.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4">Strategic Patch for {formData.businessName}</h4>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Core Integration</h2>
            <p className="text-slate-600 leading-relaxed">
              {analysis.strategicInsight}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Proposed Voice Identity</h4>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-xl">{analysis.receptionistPersona}</p>
                <p className="text-slate-500 text-sm">Optimized for high-conversion {formData.industry} calls</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 rounded-3xl p-8 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 blur-[80px] -mr-24 -mt-24 rounded-full"></div>
          
          <div className="relative z-10">
            <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-8">What happens next?</h4>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-black shrink-0 shadow-lg shadow-blue-600/20">1</div>
                <div>
                  <span className="text-white font-bold block mb-1">Expert Patch Design</span>
                  <p className="text-slate-400 text-sm leading-relaxed">Our specialists are mapping your website content to a live voice agent capable of handling bookings.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-black shrink-0 shadow-lg shadow-blue-600/20">2</div>
                <div>
                  <span className="text-white font-bold block mb-1">ROI Calculation</span>
                  <p className="text-slate-400 text-sm leading-relaxed">We calculate exactly how many leads you're losing in {userCity} based on local industry benchmarks.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-black shrink-0 shadow-lg shadow-blue-600/20">3</div>
                <div>
                  <span className="text-white font-bold block mb-1">Video Walkthrough</span>
                  <p className="text-slate-400 text-sm leading-relaxed">You'll receive a personal link via <span className="text-blue-400 font-bold uppercase">{formData.deliveryPreference}</span> with your full walkthrough.</p>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={onReset}
            className="w-full mt-12 py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1 active:translate-y-0"
          >
            Create Another Blueprint
          </button>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-slate-400 text-sm font-medium">Ax-Group AI Tech &bull; Bridging the Gap Between Leads and Sales</p>
      </div>
    </div>
  );
};

export default ResultView;
