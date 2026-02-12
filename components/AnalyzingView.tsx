
import React, { useEffect, useState } from 'react';
import { FormData, AnalysisResult } from '../types.ts';
import { analyzeBusinessPotential } from '../services/geminiService.ts';

interface AnalyzingViewProps {
  formData: FormData;
  onComplete: (result: AnalysisResult) => void;
}

const AnalyzingView: React.FC<AnalyzingViewProps> = ({ formData, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Analyzing business niche...');

  useEffect(() => {
    const statuses = [
      'Scanning industry benchmarks...',
      'Mapping ideal call flow...',
      'Selecting optimal AI persona...',
      'Architecting response logic...',
      'Generating custom blueprint...'
    ];

    let currentStatus = 0;
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        if (p % 20 === 0 && currentStatus < statuses.length) {
          setStatus(statuses[currentStatus]);
          currentStatus++;
        }
        return p + 1;
      });
    }, 40);

    const runAnalysis = async () => {
      try {
        const result = await analyzeBusinessPotential(formData);
        // Wait for progress bar to look natural
        setTimeout(() => onComplete(result), 4500);
      } catch (e) {
        console.error(e);
      }
    };

    runAnalysis();

    return () => clearInterval(interval);
  }, [formData, onComplete]);

  return (
    <div className="max-w-xl mx-auto text-center py-20">
      <div className="relative inline-block mb-8">
        <div className="w-24 h-24 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Building your demo...</h2>
      <p className="text-slate-500 mb-8">{status}</p>

      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div 
          className="bg-indigo-600 h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AnalyzingView;
